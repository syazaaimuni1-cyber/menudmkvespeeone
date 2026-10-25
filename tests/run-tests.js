// Ujian untuk Menu DM KVSP1. Jalankan: node tests/run-tests.js   (guna fail sebenar projek)
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..');
const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');
let pass = 0, fail = 0;
const ok = (c, msg) => { if (c) pass++; else { fail++; console.log('GAGAL:', msg); } };
const section = (t) => console.log('\n== ' + t);

const C = require(path.join(ROOT, 'calendar.js'));
const D = (() => { const ctx = {}; vm.createContext(ctx); vm.runInContext(read('data.js') + ';this.MENU_DATA=MENU_DATA;', ctx); return ctx.MENU_DATA; })();
const dn = C.toDayNumber, f = (x) => { const t = C.fromDayNumber(x); return `${t.year}-${t.month}-${t.day}`; };

section('A. Pengiraan tarikh & minggu kalendar');
{
  const weeks = new Set(), dows = new Set(); let blocks = 0;
  for (let y = 2000; y <= 2100; y++) for (let m = 1; m <= 12; m++) {
    const n = C.daysInMonth(y, m), tot = C.calendarWeeksInMonth(y, m);
    weeks.add(tot); dows.add(C.weekday(dn(y, m, 1)));
    ok(tot >= 4 && tot <= 6, `jumlah blok ${y}-${m}`);
    let count = 0;
    for (let w = 1; w <= tot; w++) {
      const slots = C.weekSlots(y, m, w); blocks++;
      ok(slots.length === 7, 'tujuh slot');
      const real = slots.filter((x) => x !== null); count += real.length;
      ok(real.length > 0, `blok kosong ${y}-${m}-${w}`);
      real.forEach((x) => { ok(C.fromDayNumber(x).month === m, 'bocor bulan'); ok(C.calendarWeekOfMonth(x) === w, 'label minggu'); });
      slots.forEach((x, i) => { if (x !== null) ok(C.weekday(x) === i, `slot ${i} = hari ${i} (Ahad–Sabtu)`); });
      if (w > 1 && w < tot) ok(real.length === 7, 'blok tengah penuh');
      if (w === 1) ok(slots.indexOf(dn(y, m, 1)) === C.weekday(dn(y, m, 1)), '1hb dalam Minggu 1 pada slot hari betul');
    }
    ok(count === n, `semua hari dipetakan sekali ${y}-${m}`);
  }
  ok(weeks.has(4) && weeks.has(5) && weeks.has(6), 'wujud bulan 4/5/6 blok');
  ok(dows.size === 7, 'bulan bermula pada 7 hari berbeza');
  ok(C.calendarWeeksInMonth(2026, 2) === 4, 'Feb 2026 = 4 blok');
  ok(C.calendarWeeksInMonth(2026, 8) === 6, 'Ogos 2026 = 6 blok');
  ok(C.daysInMonth(2024, 2) === 29 && C.daysInMonth(2025, 2) === 28 && C.daysInMonth(2100, 2) === 28 && C.daysInMonth(2000, 2) === 29, 'tahun lompat');
  ok(f(dn(2026, 12, 31) + 1) === '2027-1-1', '31 Dis → 1 Jan');
  ok(f(dn(2024, 2, 28) + 1) === '2024-2-29' && f(dn(2024, 2, 29) + 1) === '2024-3-1' && f(dn(2025, 2, 28) + 1) === '2025-3-1', 'Februari');
  ok(f(C.todayMY(new Date('2026-12-31T17:00:00Z'))) === '2027-1-1', 'todayMY: 01:00 MYT 1 Jan');
  ok(f(C.todayMY(new Date('2026-12-31T15:59:00Z'))) === '2026-12-31', 'todayMY: 23:59 MYT 31 Dis');
  console.log(`   ${blocks} blok minggu diperiksa`);
}

section('B. Kitaran menu 4 minggu — regresi terhadap logik ASAL app.js (TZ Asia/Kuala_Lumpur)');
{
  // Salinan logik asal (app.js sebelum redesign) untuk perbandingan.
  const MENU_ANCHOR = new Date(2026, 7, 24, 12, 0, 0), ANCHOR_WEEK = 2, MS_PER_WEEK = 7 * 24 * 3600 * 1000;
  const original = (date) => {
    const s = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 0, 0);
    const jsDay = s.getDay(), dayIndex = jsDay === 0 ? 6 : jsDay - 1;
    const diff = Math.floor((s - MENU_ANCHOR) / MS_PER_WEEK);
    return { dayIndex, week: (((ANCHOR_WEEK - 1 + diff) % 4) + 4) % 4 + 1 };
  };
  const NO_DST = new Date(2026, 0, 1).getTimezoneOffset() === new Date(2026, 6, 1).getTimezoneOffset();
  if (!NO_DST) console.log('   (zon masa proses ada DST: logik ASAL berasaskan Date tempatan boleh tersasar; perbandingan dilangkau. Jalankan dengan TZ=Asia/Kuala_Lumpur)');
  let n = 0;
  for (let x = dn(2000, 1, 1); x <= dn(2100, 12, 31); x++) {
    const t = C.fromDayNumber(x), o = original(new Date(t.year, t.month - 1, t.day, 9, 30));
    n++;
    if (!NO_DST) continue;
    ok(C.menuSetOf(x) === o.week, `set sama dgn asal ${f(x)}`);
    ok(C.menuDayIndex(x) === o.dayIndex, `indeks hari sama dgn asal ${f(x)}`);
  }
  console.log(`   ${n} tarikh dibandingkan dengan logik asal (zon masa proses: ${process.env.TZ || 'lalai'})`);
  ok(C.menuSetOf(dn(2026, 8, 24)) === 2 && C.menuSetOf(dn(2026, 8, 31)) === 3 && C.menuSetOf(dn(2026, 9, 7)) === 4 && C.menuSetOf(dn(2026, 9, 14)) === 1, 'urutan 2→3→4→1');
  ok(C.menuSetOf(dn(2026, 8, 30)) === 2 && C.menuSetOf(dn(2026, 8, 23)) === 1, 'Ahad ikut minggu menu Isnin–Ahad sebelumnya');
  let prev = null;
  for (let x = dn(1990, 1, 1); x <= dn(2150, 12, 31); x++) {
    if (C.weekday(x) === 1) { const s = C.menuSetOf(x); if (prev !== null) ok(s === (prev % 4) + 1, `kesinambungan ${f(x)}`); prev = s; }
  }
  // Tiada 'reset' kitaran bila bulan/tahun bertukar
  ok(C.menuSetOf(dn(2026, 12, 28)) === C.menuSetOf(dn(2027, 1, 3)), 'minggu menu 28 Dis–3 Jan sama set');
}

section('C. Data menu & pemadanan (data.js sebenar)');
{
  const crc = require('crypto').createHash('sha256').update(fs.readFileSync(path.join(ROOT, 'data.js'))).digest('hex');
  console.log('   sha256 data.js:', crc.slice(0, 16) + '…');
  for (let s = 1; s <= 4; s++) { ok(D.weeks[s].menus.length === 7, `Set ${s}: 7 hari`);
    D.weeks[s].menus.forEach((d, i) => C.MEALS.forEach((m) => ok(Array.isArray(d[m]) && d[m].length > 0, `Set ${s} hari ${i} ${m}`))); }
  let n = 0;
  for (let x = dn(2024, 1, 1); x <= dn(2030, 12, 31); x++) {
    const e = C.menuFor(x, D); n++;
    ok(e !== null, 'menuFor tidak null');
    const direct = D.weeks[C.menuSetOf(x)].menus[C.menuDayIndex(x)];
    C.MEALS.forEach((m) => ok(JSON.stringify(e.meals[m]) === JSON.stringify(direct[m]), `kandungan ${f(x)} ${m}`));
    ok(D.days[e.dayIndex] === ['Ahad', 'Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat', 'Sabtu'][C.weekday(x)], `nama hari data.js sepadan ${f(x)}`);
  }
  console.log(`   ${n} tarikh dipadankan dengan data.js`);
  // Tarikh tanpa data → null, tidak diganti hari lain
  const broken = JSON.parse(JSON.stringify(D)); broken.weeks[2].menus[0].lunch = [];
  ok(C.menuFor(dn(2026, 8, 24), broken) === null, 'data tiada → null (bukan menu hari lain)');
  ok(C.menuFor(dn(2026, 8, 24), { weeks: {} }) === null, 'set tiada → null');
}

section('D. Aplikasi sebenar (app.js) dalam DOM tiruan — pelbagai tarikh Malaysia');
{
  const html = read('index.html');
  const ids = new Set([...html.matchAll(/id="([^"]+)"/g)].map((m) => m[1]));
  function run(isoUtc, dataOverride) {
    const FIXED = new Date(isoUtc).getTime();
    class FDate extends Date { constructor(...a) { a.length ? super(...a) : super(FIXED); } static now() { return FIXED; } }
    const els = {}, errors = [];
    const mk = (id) => els[id] || (els[id] = { id, innerHTML: '', textContent: '', hidden: false, dataset: {}, listeners: {}, classList: { toggle() {}, add() {}, remove() {} },
      addEventListener(t, fn) { (this.listeners[t] = this.listeners[t] || []).push(fn); }, scrollIntoView() {} });
    const doc = { hidden: false, listeners: {}, addEventListener(t, fn) { (this.listeners[t] = this.listeners[t] || []).push(fn); },
      querySelector(s) { if (s[0] === '#') { const id = s.slice(1); if (!ids.has(id)) { errors.push('id tiada dalam index.html: ' + id); return null; } return mk(id); } return null; },
      querySelectorAll() { return []; }, getElementById(id) { return ids.has(id) ? mk(id) : null; } };
    const timers = [];
    const win = { addEventListener() {} };
    const ctx = { document: doc, window: win, Date: FDate, Intl, console, setInterval: (fn) => timers.push(fn), navigator: {}, location: { protocol: 'https:' }, IntersectionObserver: undefined };
    ctx.self = ctx; vm.createContext(ctx);
    vm.runInContext(read('data.js'), ctx);   // sama seperti pelayar: const peringkat atas, BUKAN window.MENU_DATA
    if (dataOverride) dataOverride(vm.runInContext('MENU_DATA', ctx));
    vm.runInContext(read('calendar.js'), ctx);   // self=ctx → ctx.MenuCal
    win.MenuCal = ctx.MenuCal;
    vm.runInContext(read('app.js'), ctx);
    return { els, errors, timers, ctx };
  }
  const cases = [
    ['2026-10-25T04:00:00Z', 'Ahad, 25 Oktober 2026'],           // 12:00 MYT (tarikh app: Ahad 25 Okt 2026)
    ['2026-12-31T17:00:00Z', 'Jumaat, 1 Januari 2027'],          // 01:00 MYT → hari baharu
    ['2026-12-31T15:00:00Z', 'Khamis, 31 Disember 2026'],
    ['2028-02-28T16:30:00Z', 'Selasa, 29 Februari 2028'],        // lompat
    ['2027-02-27T20:00:00Z', 'Ahad, 28 Februari 2027'],
    ['2026-08-23T20:00:00Z', 'Isnin, 24 Ogos 2026']
  ];
  cases.forEach(([iso, expected]) => {
    const r = run(iso);
    ok(r.errors.length === 0, 'rujukan elemen: ' + r.errors.join(','));
    ok(r.els.heroDate.textContent === expected, `tarikh hero ${iso}: dapat "${r.els.heroDate.textContent}" jangka "${expected}"`);
    ok((r.els.mealGrid.innerHTML.match(/class="meal-card"/g) || []).length === 5, `5 kad waktu makan ${iso}`);
    ok(/Moreh/.test(r.els.mealGrid.innerHTML) && /Minum Malam/.test(r.els.mealGrid.innerHTML), 'label Moreh (Minum Malam)');
    ok(/Menu Hari Ini/.test(r.els.menuTitle.textContent), 'tajuk hari ini');
    ok(r.els.todayBtn.hidden === true, 'butang kembali tersembunyi pada hari ini');
    // kandungan sama dengan data.js untuk tarikh itu
    const today = C.todayMY(new Date(iso)), e = C.menuFor(today, D);
    ok(r.els.mealGrid.innerHTML.includes(e.meals.breakfast[0].replace(/&/g, '&amp;')), `sarapan hari ini sepadan data ${iso}`);
    const tm = C.menuFor(today + 1, D);
    ok(r.els.tomorrowCard.innerHTML.includes(tm.meals.lunch[0].replace(/&/g, '&amp;')), `menu esok sepadan data ${iso}`);
    ok(r.els.tomorrowSub.textContent.length > 8 && !r.els.tomorrowCard.innerHTML.includes('belum tersedia'), 'pratonton esok ada');
    ok((r.els.dayGrid.innerHTML.match(/<button/g) || []).length + (r.els.dayGrid.innerHTML.match(/day-cell off/g) || []).length === 7, `7 sel Ahad–Sabtu ${iso}`);
    ok(r.els.dayGrid.innerHTML.indexOf('Ahd') < r.els.dayGrid.innerHTML.indexOf('Isn') && r.els.dayGrid.innerHTML.lastIndexOf('Sab') > r.els.dayGrid.innerHTML.lastIndexOf('Jum'), 'Ahad dahulu, Sabtu akhir');
    ok(/Minggu \d \(Kalendar\)/.test(r.els.heroChips.innerHTML) && /Set Menu [1-4]/.test(r.els.heroChips.innerHTML), 'label kalendar & set berasingan');
    ok(!/kcal|kalori/i.test(r.els.mealGrid.innerHTML + r.els.tomorrowCard.innerHTML), 'tiada kalori dipaparkan');
  });
  // Interaksi: buka esok, kembali hari ini, klik hari, navigasi bulan
  {
    const r = run('2026-12-31T05:00:00Z'); const { els } = r;
    els.tomorrowBtn.listeners.click[0]();
    ok(/Menu Esok/.test(els.menuTitle.textContent) && els.todayBtn.hidden === false, 'buka paparan penuh esok');
    ok(/1 Januari 2027/.test(els.menuSub.textContent), 'esok = 1 Jan 2027');
    ok(/Januari 2027/.test(els.monthLabel.textContent), 'paparan mingguan beralih ke Jan 2027');
    els.todayBtn.listeners.click[0]();
    ok(/Menu Hari Ini/.test(els.menuTitle.textContent) && els.todayBtn.hidden === true, 'kembali ke hari ini');
    els.nextMonth.listeners.click[0]();
    ok(/Januari 2027/.test(els.monthLabel.textContent), 'bulan seterusnya merentas tahun');
    els.prevMonth.listeners.click[0](); els.prevMonth.listeners.click[0]();
    ok(/November 2026/.test(els.monthLabel.textContent), 'bulan sebelumnya');
    const target = C.toDayNumber(2026, 11, 10);
    els.dayGrid.listeners.click[0]({ target: { closest: () => ({ dataset: { dn: String(target) } }) } });
    ok(/Selasa/.test(els.menuTitle.textContent) && /10 November 2026/.test(els.menuSub.textContent), 'klik hari dalam paparan mingguan');
    els.weekTabs.listeners.click[0]({ target: { closest: () => ({ dataset: { week: '1' } }) } });
    ok(/week-tab active/.test(els.weekTabs.innerHTML), 'tukar minggu kalendar');
  }
  // Pertukaran tengah malam (tick)
  {
    let now = new Date('2026-12-31T15:30:00Z').getTime();
    const r = run('2026-12-31T15:30:00Z');
    ok(/31 Disember 2026/.test(r.els.heroDate.textContent), 'sebelum tengah malam MYT');
    // Cipta semula dengan masa baharu menggunakan konteks sama tidak mungkin; sahkan melalui larian baharu 1 minit selepas
    const r2 = run('2026-12-31T16:01:00Z');
    ok(/1 Januari 2027/.test(r2.els.heroDate.textContent), 'selepas tengah malam MYT');
    ok(r.timers.length === 1, 'pemasa semakan tarikh didaftarkan');
  }
  // Data tiada → mesej jelas, tiada menu diganti
  {
    const r = run('2026-10-25T04:00:00Z', (d) => { Object.values(d.weeks).forEach((w) => { w.menus[6].lunch = []; }); });
    ok(/belum tersedia/.test(r.els.mealGrid.innerHTML) && !/meal-card/.test(r.els.mealGrid.innerHTML), 'mesej menu tidak tersedia');
  }
}

section('E. Fail, pautan & PWA (semakan statik)');
{
  const html = read('index.html');
  const refs = [...html.matchAll(/(?:src|href)="([^"#][^"]*)"/g)].map((m) => m[1]).filter((u) => !/^https?:/.test(u));
  refs.forEach((u) => ok(fs.existsSync(path.join(ROOT, u)), 'fail dirujuk wujud: ' + u));
  const idsHtml = [...html.matchAll(/id="([^"]+)"/g)].map((m) => m[1]);
  ok(new Set(idsHtml).size === idsHtml.length, 'id HTML unik');
  const man = JSON.parse(read('manifest.webmanifest'));
  ok(man.name && man.short_name && man.start_url && man.display === 'standalone', 'manifest sah');
  man.icons.forEach((i) => ok(fs.existsSync(path.join(ROOT, i.src)), 'ikon manifest wujud: ' + i.src));
  ok(man.theme_color === '#101020' && man.background_color === '#101020', 'warna manifest Cyber Pop');
  const sw = read('sw.js'); const assets = [...sw.matchAll(/'\.\/([^']*)'/g)].map((m) => m[1]).filter(Boolean);
  assets.forEach((a) => ok(fs.existsSync(path.join(ROOT, a)), 'aset sw.js wujud: ' + a));
  ['index.html', 'style.css', 'data.js', 'calendar.js', 'app.js', 'manifest.webmanifest', 'favicon.svg', 'logo-kvsp1.jpg'].forEach((a) => ok(assets.includes(a), 'sw.js cache ' + a));
  ok(/CACHE_NAME = 'menu-dm-kvsp1-v3'/.test(sw) && !/menu-dm-kvsp1-v2/.test(sw), 'versi cache dinaikkan');
  const css = read('style.css'), js = read('app.js') + read('index.html');
  ok(!/prefers-color-scheme: light|data-theme/.test(css + js), 'tiada light mode / toggle tema');
  ok(!/searchModal|searchBtn|printBtn|themeBtn|kcal|localStorage/.test(js), 'carian/cetak/tema/kalori/localStorage dibuang');
  ok(/#101020/.test(css) && /#17172B/i.test(css) && /#20203A/i.test(css) && /#6D5DFB/i.test(css) && /#58D9FF/i.test(css) && /#F5F5FF/i.test(css) && /#A6A6C7/i.test(css) && /#343451/i.test(css), 'palet Cyber Pop lengkap');
  ok(/logo-kvsp1\.jpg/.test(html) && !/icon-192|icon-512/.test(html), 'logo header KVSP1 kekal; tiada ikon rekaan');
}

console.log(`\nJUMLAH: LULUS ${pass}  GAGAL ${fail}`);
process.exit(fail ? 1 : 0);
