(() => {
  'use strict';
  const C = window.MenuCal;
  const D = MENU_DATA; // const peringkat atas dalam data.js (bukan sifat window)
  const $ = (s, scope = document) => scope.querySelector(s);
  const $$ = (s, scope = document) => [...scope.querySelectorAll(s)];

  const svg = (p) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  const icons = {
    sunrise: svg('<path d="M4 18h16M6 14a6 6 0 0 1 12 0M12 2v3M4.93 6.93l2.12 2.12M19.07 6.93l-2.12 2.12"/>'),
    utensils: svg('<path d="M7 3v7M4 3v4a3 3 0 0 0 6 0V3M7 10v11M17 3v18M17 3c2 2.5 3 5.3 3 8h-3"/>'),
    coffee: svg('<path d="M4 8h12v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8Z"/><path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16M6 3v2M10 3v2M14 3v2"/>'),
    moon: svg('<path d="M20.5 14.2A8.4 8.4 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7Z"/>'),
    cup: svg('<path d="M5 7h12l-1 12H6L5 7Z"/><path d="M17 9h1a2 2 0 0 1 0 4h-1M8 3h6"/>'),
    home: svg('<path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10M9 20v-6h6v6"/>'),
    calendar: svg('<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>'),
    book: svg('<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5v-16Z"/>'),
    check: svg('<path d="m6 12 4 4 8-8"/>'),
    'arrow-right': svg('<path d="M5 12h14M13 6l6 6-6 6"/>'),
    'chevron-left': svg('<path d="m15 6-6 6 6 6"/>'),
    'chevron-right': svg('<path d="m9 6 6 6-6 6"/>')
  };
  const icon = (n) => icons[n] || icons.utensils;
  const hydrateIcons = (scope = document) => $$('[data-icon]', scope).forEach((el) => { el.innerHTML = icon(el.dataset.icon); });

  const DAY_FULL = ['Ahad', 'Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat', 'Sabtu'];
  const DAY_ABBR = ['Ahd', 'Isn', 'Sel', 'Rab', 'Kha', 'Jum', 'Sab'];
  const MONTHS = ['Januari', 'Februari', 'Mac', 'April', 'Mei', 'Jun', 'Julai', 'Ogos', 'September', 'Oktober', 'November', 'Disember'];
  // Nama waktu makan diambil daripada data.js; kunci "supper" dipaparkan sebagai "Moreh" (label data: "Minum Malam").
  const mealTitle = (k) => (k === 'supper' ? 'Moreh' : D.mealMeta[k].label);
  const mealNote = (k) => (k === 'supper' ? D.mealMeta[k].label : '');

  const esc = (v) => String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
  const parts = (dn) => C.fromDayNumber(dn);
  const longDate = (dn) => { const t = parts(dn); return `${DAY_FULL[C.weekday(dn)]}, ${t.day} ${MONTHS[t.month - 1]} ${t.year}`; };

  const els = {
    heroDate: $('#heroDate'), heroChips: $('#heroChips'),
    menuKicker: $('#menuKicker'), menuTitle: $('#menuTitle'), menuSub: $('#menuSub'), menuChips: $('#menuChips'),
    mealGrid: $('#mealGrid'), todayBtn: $('#todayBtn'),
    tomorrowSub: $('#tomorrowSub'), tomorrowCard: $('#tomorrowCard'), tomorrowBtn: $('#tomorrowBtn'),
    monthLabel: $('#monthLabel'), prevMonth: $('#prevMonth'), nextMonth: $('#nextMonth'),
    weekTabs: $('#weekTabs'), dayGrid: $('#dayGrid'), weekNote: $('#weekNote')
  };

  let today = C.todayMY();
  let selected = today;
  let view = viewOf(today);

  function viewOf(dn) { const t = parts(dn); return { y: t.year, m: t.month, w: C.calendarWeekOfMonth(dn) }; }

  function chipsHTML(dn, entry) {
    const wk = C.calendarWeekOfMonth(dn);
    return `<span class="chip chip-cyan">Minggu ${wk} (Kalendar)</span>` +
      (entry ? `<span class="chip chip-violet">Set Menu ${entry.set}</span>` : '');
  }

  function unavailable(dn) {
    return `<div class="empty">Menu untuk ${esc(longDate(dn))} belum tersedia.</div>`;
  }

  function mealCard(key, items, idx) {
    const note = mealNote(key);
    return `<article class="meal-card" data-meal="${key}">
      <header class="meal-head">
        <span class="meal-icon">${icon(D.mealMeta[key].icon)}</span>
        <div><span class="meal-no">Sesi ${String(idx + 1).padStart(2, '0')}</span>
        <h3>${esc(mealTitle(key))}${note ? ` <small>(${esc(note)})</small>` : ''}</h3></div>
      </header>
      <ul class="food-list">${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
    </article>`;
  }

  function renderHero() {
    const entry = C.menuFor(today, D);
    els.heroDate.textContent = longDate(today);
    els.heroChips.innerHTML = chipsHTML(today, entry);
  }

  function renderMenu() {
    const entry = C.menuFor(selected, D);
    const isToday = selected === today, isTomorrow = selected === today + 1;
    els.menuKicker.textContent = isToday ? 'MENU HARI INI' : isTomorrow ? 'MENU ESOK' : 'MENU HARIAN';
    els.menuTitle.textContent = isToday ? 'Menu Hari Ini' : isTomorrow ? 'Menu Esok' : `Menu ${DAY_FULL[C.weekday(selected)]}`;
    els.menuSub.textContent = longDate(selected);
    els.menuChips.innerHTML = chipsHTML(selected, entry);
    els.todayBtn.hidden = isToday;
    els.mealGrid.innerHTML = entry ? C.MEALS.map((k, i) => mealCard(k, entry.meals[k], i)).join('') : unavailable(selected);
  }

  function renderTomorrow() {
    const dn = today + 1, entry = C.menuFor(dn, D);
    els.tomorrowSub.textContent = longDate(dn);
    els.tomorrowBtn.hidden = !entry;
    els.tomorrowCard.innerHTML = entry
      ? `<div class="chips">${chipsHTML(dn, entry)}</div><dl class="mini-list">${C.MEALS.map((k) =>
          `<div><dt>${esc(mealTitle(k))}</dt><dd>${entry.meals[k].map(esc).join(' · ')}</dd></div>`).join('')}</dl>`
      : unavailable(dn);
  }

  function renderWeekly() {
    const total = C.calendarWeeksInMonth(view.y, view.m);
    if (view.w > total) view.w = total;
    els.monthLabel.textContent = `${MONTHS[view.m - 1]} ${view.y}`;
    els.weekTabs.innerHTML = Array.from({ length: total }, (_, i) => i + 1).map((w) =>
      `<button type="button" role="tab" class="week-tab${w === view.w ? ' active' : ''}" aria-selected="${w === view.w}" data-week="${w}">Minggu ${w}</button>`).join('');
    const slots = C.weekSlots(view.y, view.m, view.w);
    els.dayGrid.innerHTML = slots.map((dn, i) => {
      if (dn === null) return `<div class="day-cell off" aria-hidden="true"><span class="abbr">${DAY_ABBR[i]}</span><span class="num">–</span></div>`;
      const entry = C.menuFor(dn, D);
      const cls = ['day-cell', dn === selected ? 'selected' : '', dn === today ? 'is-today' : ''].filter(Boolean).join(' ');
      return `<button type="button" class="${cls}" data-dn="${dn}" aria-label="${esc(longDate(dn))}"${dn === selected ? ' aria-pressed="true"' : ''}>
        <span class="abbr">${DAY_ABBR[i]}</span><span class="num">${parts(dn).day}</span>
        <span class="set">${entry ? 'Set ' + entry.set : '—'}</span>${dn === today ? '<i class="today-dot" title="Hari ini"></i>' : ''}</button>`;
    }).join('');
    els.weekNote.textContent = 'Minggu kalendar (Ahad–Sabtu) dikira semula setiap bulan. Nombor Set Menu mengikut kitaran 4 minggu dan boleh bertukar di tengah minggu kalendar.';
  }

  function renderAll() { renderHero(); renderMenu(); renderTomorrow(); renderWeekly(); }

  function openDay(dn, scroll) {
    selected = dn; view = viewOf(dn); renderAll();
    if (scroll) { const m = $('#menu'); if (m && m.scrollIntoView) m.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  }

  function shiftMonth(delta) {
    let m = view.m + delta, y = view.y;
    if (m < 1) { m = 12; y--; } else if (m > 12) { m = 1; y++; }
    const t = parts(today);
    view = { y, m, w: (y === t.year && m === t.month) ? C.calendarWeekOfMonth(today) : 1 };
    renderWeekly();
  }

  els.todayBtn.addEventListener('click', () => openDay(today, true));
  els.tomorrowBtn.addEventListener('click', () => openDay(today + 1, true));
  els.prevMonth.addEventListener('click', () => shiftMonth(-1));
  els.nextMonth.addEventListener('click', () => shiftMonth(1));
  els.weekTabs.addEventListener('click', (e) => {
    const b = e.target.closest ? e.target.closest('[data-week]') : null;
    if (b) { view.w = Number(b.dataset.week); renderWeekly(); }
  });
  els.dayGrid.addEventListener('click', (e) => {
    const b = e.target.closest ? e.target.closest('[data-dn]') : null;
    if (b) openDay(Number(b.dataset.dn), true);
  });

  // Tarikh Malaysia bertukar tengah malam: semak berkala & apabila tab kembali aktif.
  function tick() {
    const fresh = C.todayMY();
    if (fresh === today) return;
    const followed = selected === today;
    today = fresh;
    if (followed) { selected = today; view = viewOf(today); }
    renderAll();
  }
  setInterval(tick, 30000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) tick(); });

  function setupNavSpy() {
    if (typeof IntersectionObserver === 'undefined') return;
    const links = $$('[data-nav]');
    const obs = new IntersectionObserver((entries) => {
      const v = entries.filter((x) => x.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (v) links.forEach((l) => l.classList.toggle('active', l.dataset.nav === v.target.id));
    }, { rootMargin: '-25% 0px -55% 0px', threshold: [0, 0.2, 0.5] });
    ['menu', 'esok', 'mingguan', 'rujukan'].forEach((id) => { const s = document.getElementById(id); if (s) obs.observe(s); });
  }

  function setupPWA() {
    if ('serviceWorker' in navigator && location.protocol !== 'file:') {
      window.addEventListener('load', () => { navigator.serviceWorker.register('./sw.js').catch(() => {}); });
    }
  }

  hydrateIcons();
  renderAll();
  setupNavSpy();
  setupPWA();
})();
