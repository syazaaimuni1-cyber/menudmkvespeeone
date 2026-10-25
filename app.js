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
    heroMealTitle: $('#heroMealTitle'),
    heroDay: $('#heroDay'),
    heroWeek: $('#heroWeek'),
    heroStatus: $('#heroStatus'),
    heroClock: $('#heroClock'),
    heroCalories: $('#heroCalories'),
    heroDailyCalories: $('#heroDailyCalories'),
    heroFoodPreview: $('#heroFoodPreview'),
    heroRing: $('#heroRing'),
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

  // Masa rasmi & kalendar menu automatik.
  // Minggu bermula pada hari Ahad dan berakhir pada hari Sabtu.
  // Kiraan minggu bermula semula pada Minggu 1 setiap kali bulan baharu bermula,
  // dan dihadkan kepada Minggu 1 hingga Minggu 4 sahaja.
  // Semua pengiraan hari, minggu dan sesi aktif menggunakan waktu rasmi server,
  // kemudian ditafsirkan dalam zon Asia/Kuala_Lumpur (MYT, UTC+8).
  const TIME_ZONE = 'Asia/Kuala_Lumpur';
  const MS_PER_DAY = 24 * 60 * 60 * 1000;
  const MAX_MENU_WEEK = 4;
  // Susunan paparan tab hari (Ahad -> Sabtu). Nilai ialah indeks dalam data.js
  // (0 = Isnin ... 6 = Ahad), jadi kandungan data.js tidak diubah.
  const DAY_DISPLAY_ORDER = [6, 0, 1, 2, 3, 4, 5];

  const MEAL_SCHEDULE = [
    { key: 'breakfast', start: '06:30', end: '07:15' },
    { key: 'lunch', start: '13:10', end: '14:00' },
    { key: 'tea', start: '17:00', end: '17:30' },
    { key: 'dinner', start: '18:00', end: '19:00' },
    { key: 'supper', start: '22:00', end: '22:30' }
  ];

  let serverEpochAtSync = null;
  let perfAtSync = null;
  let officialState = null;
  let selectedWeek = 1;
  let selectedDay = 0;
  let manualBrowse = false;
  let timeSyncFailed = false;

  function getOfficialNow() {
    if (serverEpochAtSync == null || perfAtSync == null) return null;
    return new Date(serverEpochAtSync + (performance.now() - perfAtSync));
  }

  function getMalaysiaParts(date) {
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone: TIME_ZONE,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hourCycle: 'h23'
    }).formatToParts(date);

    const values = Object.fromEntries(
      parts.filter((part) => part.type !== 'literal').map((part) => [part.type, part.value])
    );

    return {
      year: Number(values.year),
      month: Number(values.month),
      day: Number(values.day),
      hour: Number(values.hour),
      minute: Number(values.minute),
      second: Number(values.second)
    };
  }

  function getMenuStateFromYMD(year, month, day) {
    const daySerial = Date.UTC(year, month - 1, day);
    const jsDay = new Date(daySerial).getUTCDay(); // 0 = Ahad ... 6 = Sabtu
    const dayIndex = jsDay === 0 ? 6 : jsDay - 1;  // indeks data.js: 0 = Isnin ... 6 = Ahad
    const firstWeekday = new Date(Date.UTC(year, month - 1, 1)).getUTCDay();
    const weekOfMonth = Math.floor((day - 1 + firstWeekday) / 7) + 1; // minggu Ahad-Sabtu dalam bulan
    const week = Math.min(MAX_MENU_WEEK, weekOfMonth);
    return { year, month, day, dayIndex, week, daySerial };
  }

  function getOfficialState(date = getOfficialNow()) {
    if (!date) return null;
    const parts = getMalaysiaParts(date);
    return { ...getMenuStateFromYMD(parts.year, parts.month, parts.day), ...parts, date };
  }

  function stateFromDaySerial(daySerial) {
    const d = new Date(daySerial);
    return getMenuStateFromYMD(d.getUTCFullYear(), d.getUTCMonth() + 1, d.getUTCDate());
  }

  function timeToMinutes(value) {
    const [hour, minute] = value.split(':').map(Number);
    return hour * 60 + minute;
  }

  function getMealContext(state) {
    const nowMinutes = state.hour * 60 + state.minute + state.second / 60;

    for (let index = 0; index < MEAL_SCHEDULE.length; index += 1) {
      const meal = MEAL_SCHEDULE[index];
      const start = timeToMinutes(meal.start);
      const end = timeToMinutes(meal.end);

      if (nowMinutes >= start && nowMinutes < end) {
        return { ...meal, mode: 'active', targetState: state, isTomorrow: false };
      }

      if (nowMinutes < start) {
        return { ...meal, mode: 'next', targetState: state, isTomorrow: false };
      }
    }

    const tomorrow = stateFromDaySerial(state.daySerial + MS_PER_DAY);
    return {
      ...MEAL_SCHEDULE[0],
      mode: 'next',
      targetState: tomorrow,
      isTomorrow: true
    };
  }

  async function fetchOfficialTimestamp() {
    const errors = [];

    // 1) PALING STABIL UNTUK VERCEL STATIC:
    // Ambil header HTTP Date daripada fail statik di domain website sendiri.
    // Query rawak memaksa request baharu supaya Service Worker/cache lama tidak
    // boleh memberi masa yang tersimpan. Ini masa SERVER, bukan jam device.
    if (location.protocol === 'http:' || location.protocol === 'https:') {
      try {
        const probeUrl = new URL('./favicon.svg', location.href);
        probeUrl.searchParams.set('__official_time', `${Date.now()}-${Math.random().toString(36).slice(2)}`);
        const response = await fetch(probeUrl.toString(), {
          method: 'GET',
          cache: 'no-store',
          credentials: 'same-origin',
          headers: { 'Cache-Control': 'no-cache' }
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const dateHeader = response.headers.get('date');
        const timestamp = dateHeader ? Date.parse(dateHeader) : NaN;
        if (!Number.isFinite(timestamp)) throw new Error('Header Date tiada/tidak sah');
        return { timestamp, source: 'hosting-server-date' };
      } catch (error) {
        errors.push(`hosting-date: ${error.message}`);
      }
    }

    // 2) Vercel Function jika /api/time berjaya dideploy.
    try {
      const response = await fetch(`/api/time?nonce=${Math.random().toString(36).slice(2)}`, {
        cache: 'no-store',
        headers: { Accept: 'application/json' }
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      if (!Number.isFinite(data.timestamp)) throw new Error('Timestamp API tidak sah');
      return { timestamp: data.timestamp, source: 'vercel-api' };
    } catch (error) {
      errors.push(`api/time: ${error.message}`);
    }

    // 3) Public world-clock API #1.
    // TimeAPI mengembalikan waktu tempatan Asia/Kuala_Lumpur.
    try {
      const response = await fetch('https://timeapi.io/api/Time/current/zone?timeZone=Asia%2FKuala_Lumpur', {
        cache: 'no-store',
        headers: { Accept: 'application/json' }
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();

      let timestamp = NaN;
      if (data.dateTime) {
        const raw = String(data.dateTime);
        timestamp = Date.parse(/[zZ]|[+-]\d\d:\d\d$/.test(raw) ? raw : `${raw}+08:00`);
      }
      if (!Number.isFinite(timestamp) && [data.year, data.month, data.day, data.hour, data.minute].every(Number.isFinite)) {
        timestamp = Date.UTC(
          data.year,
          data.month - 1,
          data.day,
          data.hour - 8,
          data.minute,
          Number(data.seconds || 0),
          Number(data.milliSeconds || data.milliseconds || 0)
        );
      }
      if (!Number.isFinite(timestamp)) throw new Error('Timestamp TimeAPI tidak sah');
      return { timestamp, source: 'timeapi-io' };
    } catch (error) {
      errors.push(`timeapi.io: ${error.message}`);
    }

    // 4) Public world-clock API #2.
    try {
      const response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Kuala_Lumpur', {
        cache: 'no-store',
        headers: { Accept: 'application/json' }
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      const timestamp = Number.isFinite(data.unixtime)
        ? data.unixtime * 1000
        : Date.parse(data.datetime);
      if (!Number.isFinite(timestamp)) throw new Error('Timestamp WorldTimeAPI tidak sah');
      return { timestamp, source: 'worldtimeapi' };
    } catch (error) {
      errors.push(`worldtimeapi: ${error.message}`);
    }

    // 5) Pilihan terakhir: jam peranti, tetapi SENTIASA ditafsirkan dalam zon
    // Asia/Kuala_Lumpur. Hanya digunakan apabila semua sumber masa rasmi gagal
    // (contohnya fail dibuka terus melalui file:// atau tiada internet) supaya
    // kad PAPARAN AKTIF tidak runtuh. Sync seterusnya akan kembali ke masa server.
    console.warn('Sumber masa rasmi gagal, guna jam peranti (zon Asia/Kuala_Lumpur):', errors.join(' | '));
    return { timestamp: Date.now(), source: 'device-clock-fallback', fallback: true };
  }

  async function syncOfficialTime({ silent = false } = {}) {
    const requestStart = performance.now();
    try {
      const official = await fetchOfficialTimestamp();
      const requestEnd = performance.now();
      const halfRoundTrip = official.fallback ? 0 : Math.max(0, (requestEnd - requestStart) / 2);
      serverEpochAtSync = official.timestamp + halfRoundTrip;
      perfAtSync = requestEnd;
      timeSyncFailed = false;
      document.documentElement.dataset.timeSource = official.source;

      const fresh = getOfficialState();
      const oldDayKey = officialState ? `${officialState.year}-${officialState.month}-${officialState.day}` : null;
      const newDayKey = `${fresh.year}-${fresh.month}-${fresh.day}`;
      const firstSync = !officialState;
      const dayChanged = Boolean(oldDayKey && oldDayKey !== newDayKey);
      officialState = fresh;

      if (!manualBrowse || firstSync) {
        selectedWeek = fresh.week;
        selectedDay = fresh.dayIndex;
      }

      if (firstSync || dayChanged) {
        renderAll();
      } else {
        els.currentDateBadge.textContent = `Hari ini · ${formatMalayDate(officialState.date)} · Minggu ${officialState.week}`;
        renderHero();
      }

      if (!silent && dayChanged) {
        showToast(`Hari baharu · ${MENU_DATA.days[fresh.dayIndex]}, Minggu ${fresh.week}`);
      }
      return true;
    } catch (error) {
      console.error('Gagal mendapatkan waktu rasmi server:', error);
      timeSyncFailed = true;
      // Jangan padam kad PAPARAN AKTIF jika masa yang sah sudah ada.
      if (!officialState) renderTimeUnavailable();
      return false;
    }
  }

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
      timeZone: TIME_ZONE,
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  }

  function formatStateDate(state) {
    const date = new Date(Date.UTC(state.year, state.month - 1, state.day, 12));
    return new Intl.DateTimeFormat('ms-MY', {
      timeZone: 'UTC',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  }

  function formatMalaysiaClock(state) {
    return `${String(state.hour).padStart(2, '0')}:${String(state.minute).padStart(2, '0')}`;
  }

  function isShowingToday() {
    return Boolean(officialState) && selectedWeek === officialState.week && selectedDay === officialState.dayIndex;
  }

  function goToToday(scroll = true) {
    if (!officialState) {
      showToast('Waktu rasmi belum tersedia. Cuba semula sebentar lagi.');
      syncOfficialTime();
      return;
    }
    manualBrowse = false;
    selectedWeek = officialState.week;
    selectedDay = officialState.dayIndex;
    renderAll();
    if (scroll) $('#menu-hari-ini').scrollIntoView({ behavior: 'smooth', block: 'start' });
    showToast(`Menu hari ini · ${MENU_DATA.days[selectedDay]}, ${MENU_DATA.weeks[selectedWeek].label}`);
  }

  function renderDayTabs() {
    els.dayTabs.innerHTML = DAY_DISPLAY_ORDER.map((index) => {
      const day = MENU_DATA.days[index];
      const classes = [
        'day-tab',
        index === selectedDay ? 'active' : '',
        officialState && index === officialState.dayIndex && selectedWeek === officialState.week ? 'today' : ''
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
        </article>
      `;
    }).join('');
  }

  function renderHero() {
    if (!officialState) {
      renderTimeUnavailable();
      return;
    }

    const context = getMealContext(officialState);
    const state = context.targetState;
    const week = MENU_DATA.weeks[state.week];
    const dayMenu = week.menus[state.dayIndex];
    const meta = MENU_DATA.mealMeta[context.key];
    const items = dayMenu[context.key] || [];
    const sessionKcal = week.calories[context.key][state.dayIndex];
    const dailyTotal = week.calories.total[state.dayIndex];
    const dayName = MENU_DATA.days[state.dayIndex];
    const previewLimit = 4;
    const visibleItems = items.slice(0, previewLimit);
    const remaining = Math.max(0, items.length - visibleItems.length);

    els.heroMealTitle.textContent = meta.label;
    els.heroDay.textContent = `${context.isTomorrow ? 'Esok · ' : ''}${dayName} · ${formatStateDate(state)}`;
    els.heroWeek.textContent = week.label;
    els.heroCalories.textContent = sessionKcal.toLocaleString('ms-MY');
    els.heroDailyCalories.textContent = `Jumlah harian: ${dailyTotal.toLocaleString('ms-MY')} kcal`;
    els.heroClock.textContent = `Waktu Malaysia · ${formatMalaysiaClock(officialState)} MYT`;

    if (context.mode === 'active') {
      els.heroStatus.className = 'meal-status is-active';
      els.heroStatus.textContent = `SEDANG BERLANGSUNG · ${context.start}–${context.end}`;
    } else {
      els.heroStatus.className = 'meal-status is-next';
      els.heroStatus.textContent = `SETERUSNYA${context.isTomorrow ? ' ESOK' : ''} · ${context.start}`;
    }

    els.heroFoodPreview.innerHTML = visibleItems.map((item) => `
      <div class="hero-preview-item">
        <span class="preview-icon">${mealIcon(context.key)}</span>
        <div>
          <span>${context.mode === 'active' ? 'Menu aktif' : 'Menu seterusnya'}</span>
          <strong>${escapeHtml(item)}</strong>
        </div>
      </div>
    `).join('') + (remaining ? `
      <div class="hero-preview-more">+ ${remaining} item lagi · lihat menu penuh di bawah</div>
    ` : '');

    const ringPercent = Math.min(100, Math.max(10, (sessionKcal / 900) * 100));
    els.heroRing.style.setProperty('--ring', `${ringPercent}%`);
  }

  function renderSummary() {
    const week = MENU_DATA.weeks[selectedWeek];
    const total = week.calories.total[selectedDay];
    const dayName = MENU_DATA.days[selectedDay];

    els.totalCalories.textContent = `${total.toLocaleString('ms-MY')} kcal`;
    els.selectedTitle.textContent = isShowingToday() ? `Menu Hari Ini · ${dayName}` : `${dayName} · ${week.label}`;
    els.selectedSubtitle.textContent = isShowingToday()
      ? `${officialState ? formatMalayDate(officialState.date) : 'Tarikh rasmi tidak tersedia'} · ${week.label} · 5 waktu makan · ${total.toLocaleString('ms-MY')} kcal`
      : `Paparan manual · ${week.label} · 5 waktu makan · jumlah rujukan ${total.toLocaleString('ms-MY')} kcal sehari`;
  }

  function renderAll() {
    els.weekSelect.disabled = false;
    els.weekSelect.value = String(selectedWeek);
    if (officialState) {
      els.currentDateBadge.textContent = `Hari ini · ${formatMalayDate(officialState.date)} · Minggu ${officialState.week}`;
    } else {
      els.currentDateBadge.textContent = timeSyncFailed ? 'Waktu rasmi tidak tersedia' : 'Menyelaras waktu rasmi Malaysia…';
    }
    els.todayBtn.classList.toggle('is-today', isShowingToday() && !manualBrowse);
    els.todayBtn.setAttribute('aria-pressed', String(isShowingToday() && !manualBrowse));
    renderDayTabs();
    renderMeals();
    renderHero();
    renderSummary();
  }

  function renderTimeUnavailable() {
    if (els.heroMealTitle) els.heroMealTitle.textContent = timeSyncFailed ? 'Waktu rasmi tidak tersedia' : 'Menyelaras waktu…';
    if (els.heroDay) els.heroDay.textContent = timeSyncFailed ? 'Sambungan internet diperlukan untuk paparan automatik.' : 'Asia/Kuala_Lumpur';
    if (els.heroWeek) els.heroWeek.textContent = 'AUTO';
    if (els.heroStatus) {
      els.heroStatus.className = 'meal-status is-next';
      els.heroStatus.textContent = timeSyncFailed ? 'CUBA SEMULA' : 'MENYELARAS';
    }
    if (els.heroClock) els.heroClock.textContent = 'Waktu Malaysia · --:-- MYT';
    if (els.heroFoodPreview) els.heroFoodPreview.innerHTML = '<div class="hero-preview-more">Paparan aktif tidak menggunakan jam peranti. Sistem sedang mendapatkan masa rasmi daripada server.</div>';
    if (els.heroCalories) els.heroCalories.textContent = '—';
    if (els.heroDailyCalories) els.heroDailyCalories.textContent = 'Menu manual masih boleh diteroka di bawah.';
    if (els.heroRing) els.heroRing.style.setProperty('--ring', '10%');
  }

  function selectDay(day) {
    manualBrowse = true;
    selectedDay = day;
    renderAll();
  }

  function selectWeek(week) {
    manualBrowse = true;
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
  
  }

  function renderSearch(query) {
    const q = query.trim().toLowerCase();
    if (q.length < 2) {
      els.searchResults.innerHTML = '';
    
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
        manualBrowse = true;
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
    const sections = ['menu-hari-ini'].map((id) => document.getElementById(id));

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

  function clearLegacyPWA() {
    // Versi lama menggunakan Service Worker dan boleh menyebabkan app.js lama
    // kekal dalam cache. Website ini sengaja dinyah-cache supaya menu live sentiasa segar.
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations()
        .then((registrations) => registrations.forEach((registration) => registration.unregister()))
        .catch(() => {});
    }
    if ('caches' in window) {
      caches.keys()
        .then((keys) => Promise.all(keys.filter((key) => key.startsWith('menu-dm-kvsp1-')).map((key) => caches.delete(key))))
        .catch(() => {});
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

  async function startLiveClock() {
    renderTimeUnavailable();
    const synced = await syncOfficialTime({ silent: true });
    if (!synced) {
      // Tiada fallback kepada jam device. Menu manual kekal boleh digunakan.
      selectedWeek = 1;
      selectedDay = 0;
      renderAll();
    }

    setInterval(() => {
      if (!officialState) return;
      const fresh = getOfficialState();
      const dayChanged = fresh.daySerial !== officialState.daySerial;
      officialState = fresh;

      if (dayChanged) {
        if (!manualBrowse) {
          selectedWeek = fresh.week;
          selectedDay = fresh.dayIndex;
        }
        renderAll();
      } else {
        els.currentDateBadge.textContent = `Hari ini · ${formatMalayDate(officialState.date)} · Minggu ${officialState.week}`;
        renderHero();
      }
    }, 30 * 1000);

    setInterval(() => syncOfficialTime({ silent: true }), 2 * 60 * 1000);

    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) syncOfficialTime({ silent: true });
    });
  }

  hydrateIcons();
  setupTheme();
  renderAll();
  setupNavSpy();
  clearLegacyPWA();
  startLiveClock();
})();
