(() => {
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

  const icons = {
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.8-3.8"></path></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 14.2A8.4 8.4 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7Z"></path></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path></svg>',
    sunrise: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 18h16M6 14a6 6 0 0 1 12 0M12 2v3M4.93 6.93l2.12 2.12M19.07 6.93l-2.12 2.12"></path></svg>',
    utensils: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3v7M4 3v4a3 3 0 0 0 6 0V3M7 10v11M17 3v18M17 3c2 2.5 3 5.3 3 8h-3"></path></svg>',
    coffee: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h12v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8Z"></path><path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16M6 3v2M10 3v2M14 3v2"></path></svg>',
    cup: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M5 7h12l-1 12H6L5 7Z"></path><path d="M17 9h1a2 2 0 0 1 0 4h-1M8 3h6"></path></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 5 6v5c0 4.6 2.7 8 7 10 4.3-2 7-5.4 7-10V6l-7-3Z"></path><path d="m9 12 2 2 4-4"></path></svg>',
    printer: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M7 8V3h10v5M7 17H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"></path><path d="M7 14h10v7H7z"></path></svg>',
    chevronDown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>',
    flame: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c4 0 7-2.7 7-6.5 0-3.1-1.8-5.4-4.5-8.5-.2 2.3-1.2 3.8-2.6 4.8.2-3.5-1.8-6.3-4.2-8.8C7.5 7.1 5 10.1 5 14.8 5 19 8.1 22 12 22Z"></path><path d="M9.6 17.2c0-1.6.9-2.8 2.4-4.2.1 1.1.6 1.9 1.3 2.4.1-1 .6-1.8 1.1-2.5.7 1 1.1 2 1.1 3.2 0 2-1.5 3.4-3.3 3.4-1.5 0-2.6-.9-2.6-2.3Z"></path></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg>',
    droplet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2s7 7.1 7 12a7 7 0 0 1-14 0c0-4.9 7-12 7-12Z"></path></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z"></path><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5v-16Z"></path></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 12 4 4 8-8"></path></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 9-8 9 8"></path><path d="M5 10v10h14V10M9 20v-6h6v6"></path></svg>',
    calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"></rect><path d="M16 3v4M8 3v4M3 10h18"></path></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m6 6 12 12M18 6 6 18"></path></svg>',
    arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>'
  };

  const iconAlias = {
    "chevron-down": "chevronDown",
    "arrow-right": "arrowRight"
  };

  function icon(name) {
    return icons[iconAlias[name] || name] || icons.utensils;
  }

  function hydrateIcons(scope = document) {
    $$('[data-icon]', scope).forEach((el) => {
      el.innerHTML = icon(el.dataset.icon);
    });
  }

  const els = {
    weekSelect: $('#weekSelect'),
    dayTabs: $('#dayTabs'),
    mealGrid: $('#mealGrid'),
    totalCalories: $('#totalCalories'),
    selectedTitle: $('#selectedTitle'),
    selectedSubtitle: $('#selectedSubtitle'),
    heroDay: $('#heroDay'),
    heroWeek: $('#heroWeek'),
    heroCalories: $('#heroCalories'),
    heroFoodPreview: $('#heroFoodPreview'),
    heroRing: $('#heroRing'),
    weekOverview: $('#weekOverview'),
    searchBtn: $('#searchBtn'),
    mobileSearchBtn: $('#mobileSearchBtn'),
    searchModal: $('#searchModal'),
    closeSearchBtn: $('#closeSearchBtn'),
    searchInput: $('#searchInput'),
    searchResults: $('#searchResults'),
    searchHint: $('#searchHint'),
    themeBtn: $('#themeBtn'),
    printBtn: $('#printBtn'),
    toast: $('#toast'),
    todayBtn: $('#todayBtn'),
    currentDateBadge: $('#currentDateBadge')
  };

  // Kalendar menu automatik.
  // Maklumat pihak kolej: minggu yang bermula Isnin, 24 Ogos 2026 ialah MINGGU 2.
  // Selepas itu minggu menu berputar 2 → 3 → 4 → 1 setiap Isnin.
  
  // Kiraan minggu bulanan: Ahad hingga Sabtu.
  function getMonthlyWeek(date) {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1, 12);
    const offset = firstDay.getDay();
    return Math.min(4, Math.floor((date.getDate() + offset - 1) / 7) + 1);
  }
  const MS_PER_WEEK = 7 * 24 * 60 * 60 * 1000;


  function startOfLocalDay(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 0, 0);
  }

  function getTodayState(now = new Date()) {
    const safeNow = startOfLocalDay(now);
    const jsDay = safeNow.getDay();
    const dayIndex = jsDay === 0 ? 6 : jsDay - 1;
   const week = getMonthlyWeek(safeNow);
    return { date: safeNow, dayIndex, week };
  }

  const todayState = getTodayState();
  const todayIndex = todayState.dayIndex;
  const todayWeek = todayState.week;

  // Setiap kali website dibuka / refresh, terus kembali ke menu tarikh hari tersebut.
  let selectedWeek = todayWeek;
  let selectedDay = todayIndex;

  function escapeHtml(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function showToast(message) {
    els.toast.textContent = message;
    els.toast.classList.add('show');
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => els.toast.classList.remove('show'), 2200);
  }

  function mealIcon(mealKey) {
    return icon(MENU_DATA.mealMeta[mealKey].icon);
  }

  function formatMalayDate(date) {
    return new Intl.DateTimeFormat('ms-MY', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  }

  function isShowingToday() {
    return selectedWeek === todayWeek && selectedDay === todayIndex;
  }

  function goToToday(scroll = true) {
    const fresh = getTodayState();
    selectedWeek = fresh.week;
    selectedDay = fresh.dayIndex;
    renderAll();
    if (scroll) $('#menu-hari-ini').scrollIntoView({ behavior: 'smooth', block: 'start' });
    showToast(`Menu hari ini · ${MENU_DATA.days[selectedDay]}, ${MENU_DATA.weeks[selectedWeek].label}`);
  }

  function renderDayTabs() {
    els.dayTabs.innerHTML = MENU_DATA.days.map((day, index) => {
      const classes = [
        'day-tab',
        index === selectedDay ? 'active' : '',
        index === todayIndex && selectedWeek === todayWeek ? 'today' : ''
      ].filter(Boolean).join(' ');

      return `<button class="${classes}" role="tab" aria-selected="${index === selectedDay}" data-day="${index}" type="button">${day}</button>`;
    }).join('');

    $$('.day-tab', els.dayTabs).forEach((btn) => {
      btn.addEventListener('click', () => selectDay(Number(btn.dataset.day)));
    });
  }

  function renderMeals() {
    const week = MENU_DATA.weeks[selectedWeek];
    const dayMenu = week.menus[selectedDay];
    const order = ['breakfast', 'lunch', 'tea', 'dinner', 'supper'];

    els.mealGrid.innerHTML = order.map((mealKey, idx) => {
      const meta = MENU_DATA.mealMeta[mealKey];
      const kcal = week.calories[mealKey][selectedDay];
      const items = dayMenu[mealKey] || [];

      return `
        <article class="meal-card" data-meal="${mealKey}">
          <div class="meal-card-head">
            <div class="meal-title-wrap">
              <span class="meal-icon">${mealIcon(mealKey)}</span>
              <div>
                <span>Sesi ${String(idx + 1).padStart(2, '0')}</span>
                <strong>${meta.label}</strong>
              </div>
            </div>
            <span class="kcal-badge">${kcal} kcal</span>
          </div>
          <ul class="food-list">
            ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
          </ul>
          <div class="meal-card-footer">
            <span>Menu Standard Sekolah Menengah</span>
            <span>KPM · 2018</span>
          </div>
        </article>
      `;
    }).join('');
  }

  function renderHero() {
    const week = MENU_DATA.weeks[selectedWeek];
    const dayMenu = week.menus[selectedDay];
    const total = week.calories.total[selectedDay];
    const dayName = MENU_DATA.days[selectedDay];

    els.heroDay.textContent = dayName;
    els.heroWeek.textContent = week.label;
    els.heroCalories.textContent = total.toLocaleString('ms-MY');

    const preview = [
      ['breakfast', dayMenu.breakfast[0]],
      ['lunch', dayMenu.lunch[1] || dayMenu.lunch[0]],
      ['dinner', dayMenu.dinner[1] || dayMenu.dinner[0]]
    ];

    els.heroFoodPreview.innerHTML = preview.map(([key, item]) => `
      <div class="hero-preview-item">
        <span class="preview-icon">${mealIcon(key)}</span>
        <div>
          <span>${MENU_DATA.mealMeta[key].short}</span>
          <strong>${escapeHtml(item)}</strong>
        </div>
      </div>
    `).join('');

    const ringPercent = Math.min(100, Math.max(10, (total / 2600) * 100));
    els.heroRing.style.setProperty('--ring', `${ringPercent}%`);
  }

  function renderSummary() {
    const week = MENU_DATA.weeks[selectedWeek];
    const total = week.calories.total[selectedDay];
    const dayName = MENU_DATA.days[selectedDay];

    els.totalCalories.textContent = `${total.toLocaleString('ms-MY')} kcal`;
    els.selectedTitle.textContent = isShowingToday() ? `Menu Hari Ini · ${dayName}` : `${dayName} · ${week.label}`;
    els.selectedSubtitle.textContent = isShowingToday()
      ? `${formatMalayDate(todayState.date)} · ${week.label} · 5 waktu makan · ${total.toLocaleString('ms-MY')} kcal`
      : `Paparan manual · ${week.label} · 5 waktu makan · jumlah rujukan ${total.toLocaleString('ms-MY')} kcal sehari`;
  }

  function renderWeekOverview() {
    const week = MENU_DATA.weeks[selectedWeek];

    els.weekOverview.innerHTML = MENU_DATA.days.map((day, index) => {
      const menu = week.menus[index];
      return `
        <button class="week-day-card ${index === selectedDay ? 'active' : ''}" type="button" data-day="${index}">
          <span class="day-name">${day}</span>
          <span class="day-kcal">${week.calories.total[index]} kcal</span>
          <div class="mini-meal">
            <span>Sarapan</span>
            <strong>${escapeHtml(menu.breakfast[0])}</strong>
          </div>
          <div class="mini-meal">
            <span>Tengah Hari</span>
            <strong>${escapeHtml(menu.lunch[1] || menu.lunch[0])}</strong>
          </div>
          <div class="mini-meal">
            <span>Malam</span>
            <strong>${escapeHtml(menu.dinner[1] || menu.dinner[0])}</strong>
          </div>
        </button>
      `;
    }).join('');

    $$('.week-day-card', els.weekOverview).forEach((card) => {
      card.addEventListener('click', () => {
        selectDay(Number(card.dataset.day));
        $('#menu-hari-ini').scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  function renderAll() {
    els.weekSelect.value = String(selectedWeek);
    els.currentDateBadge.textContent = `Hari ini · ${formatMalayDate(todayState.date)} · Minggu ${todayWeek}`;
    els.todayBtn.classList.toggle('is-today', isShowingToday());
    els.todayBtn.setAttribute('aria-pressed', String(isShowingToday()));
    renderDayTabs();
    renderMeals();
    renderHero();
    renderSummary();
    renderWeekOverview();
  }

  function selectDay(day) {
    selectedDay = day;
    renderAll();
  }

  function selectWeek(week) {
    selectedWeek = week;
    renderAll();
    showToast(`${MENU_DATA.weeks[selectedWeek].label} dipilih`);
  }

  function buildSearchIndex() {
    const results = [];
    Object.entries(MENU_DATA.weeks).forEach(([weekNumber, week]) => {
      week.menus.forEach((dayMenu, dayIndex) => {
        Object.keys(MENU_DATA.mealMeta).forEach((mealKey) => {
          (dayMenu[mealKey] || []).forEach((item) => {
            results.push({
              item,
              week: Number(weekNumber),
              day: dayIndex,
              meal: mealKey,
              kcal: week.calories[mealKey][dayIndex]
            });
          });
        });
      });
    });
    return results;
  }

  const searchIndex = buildSearchIndex();

  function openSearch() {
    els.searchModal.hidden = false;
    document.body.style.overflow = 'hidden';
    setTimeout(() => els.searchInput.focus(), 40);
  }

  function closeSearch() {
    els.searchModal.hidden = true;
    document.body.style.overflow = '';
    els.searchInput.value = '';
    els.searchResults.innerHTML = '';
    els.searchHint.textContent = 'Taip sekurang-kurangnya 2 huruf.';
  }

  function renderSearch(query) {
    const q = query.trim().toLowerCase();
    if (q.length < 2) {
      els.searchResults.innerHTML = '';
      els.searchHint.textContent = 'Taip sekurang-kurangnya 2 huruf.';
      return;
    }

    const matches = searchIndex
      .filter((entry) => entry.item.toLowerCase().includes(q))
      .slice(0, 30);

    els.searchHint.textContent = matches.length
      ? `${matches.length} hasil teratas ditemui.`
      : 'Tiada menu ditemui untuk carian ini.';

    if (!matches.length) {
      els.searchResults.innerHTML = '<div class="empty-state">Cuba kata kunci lain seperti “nasi”, “ayam”, “ikan” atau “bihun”.</div>';
      return;
    }

    els.searchResults.innerHTML = matches.map((match) => `
      <button class="search-result" type="button" data-week="${match.week}" data-day="${match.day}">
        <div>
          <strong>${escapeHtml(match.item)}</strong>
          <div class="search-result-meta">
            <span>${icon('calendar')} Minggu ${match.week} · ${MENU_DATA.days[match.day]}</span>
            <span>${icon('clock')} ${MENU_DATA.mealMeta[match.meal].label}</span>
            <span>${icon('flame')} ${match.kcal} kcal / sesi</span>
          </div>
        </div>
        <span class="arrow">${icon('arrow-right')}</span>
      </button>
    `).join('');

    $$('.search-result', els.searchResults).forEach((btn) => {
      btn.addEventListener('click', () => {
        selectedWeek = Number(btn.dataset.week);
        selectedDay = Number(btn.dataset.day);
                closeSearch();
        renderAll();
        $('#menu-hari-ini').scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  function setTheme(theme, save = true) {
    document.documentElement.dataset.theme = theme;
    els.themeBtn.innerHTML = `<span data-icon="${theme === 'dark' ? 'sun' : 'moon'}"></span>`;
    hydrateIcons(els.themeBtn);
    if (save) localStorage.setItem('kvsp1-theme', theme);
  }

  function setupTheme() {
    const saved = localStorage.getItem('kvsp1-theme');
    const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(saved || preferred, false);
  }

  function setupNavSpy() {
    const sectionLinks = $$('.nav-link, .mobile-nav-item[href^="#"]');
    const sections = ['menu-hari-ini', 'mingguan', 'rujukan'].map((id) => document.getElementById(id));

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;

      sectionLinks.forEach((link) => {
        const href = link.getAttribute('href');
        link.classList.toggle('active', href === `#${visible.target.id}`);
      });
    }, { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.2, 0.5] });

    sections.forEach((section) => section && observer.observe(section));
  }

  function setupPWA() {
    if ('serviceWorker' in navigator && location.protocol !== 'file:') {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').catch(() => {});
      });
    }
  }

  els.weekSelect.addEventListener('change', (event) => selectWeek(Number(event.target.value)));
  els.todayBtn.addEventListener('click', () => goToToday(true));
  els.searchBtn.addEventListener('click', openSearch);
  els.mobileSearchBtn.addEventListener('click', openSearch);
  els.closeSearchBtn.addEventListener('click', closeSearch);
  els.searchModal.addEventListener('click', (event) => {
    if (event.target === els.searchModal) closeSearch();
  });
  els.searchInput.addEventListener('input', (event) => renderSearch(event.target.value));
  els.themeBtn.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
  });
  els.printBtn.addEventListener('click', () => window.print());

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !els.searchModal.hidden) closeSearch();
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      openSearch();
    }
  });

  hydrateIcons();
  setupTheme();
  renderAll();
  setupNavSpy();
  setupPWA();
})();
