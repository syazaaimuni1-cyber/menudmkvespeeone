/* calendar.js — logik tarikh & pemadanan set menu untuk Menu DM KVSP1.
   - Semua pengiraan guna "nombor hari" (integer, berasaskan UTC) supaya bebas daripada zon masa/DST peranti.
   - Minggu KALENDAR: Ahad–Sabtu, dikira semula setiap bulan (Minggu 1 … Minggu 6).
   - SET MENU: kitaran 4 minggu berterusan, minggu menu Isnin–Ahad (logik asal projek dikekalkan).
   Label minggu kalendar TIDAK sama dengan nombor set menu. */
(function (root) {
  'use strict';

  // Satu-satunya titik rujukan kitaran menu (daripada logik asal app.js & README):
  // minggu menu yang bermula Isnin 24 Ogos 2026 = Set Menu 2; kemudian 2 → 3 → 4 → 1.
  var CYCLE_REF = { year: 2026, month: 8, day: 24, set: 2 };
  var CYCLE_LENGTH = 4;
  var MEALS = ['breakfast', 'lunch', 'tea', 'dinner', 'supper'];

  function toDayNumber(y, m, d) { return Math.floor(Date.UTC(y, m - 1, d) / 86400000); }
  function fromDayNumber(dn) {
    var t = new Date(dn * 86400000);
    return { year: t.getUTCFullYear(), month: t.getUTCMonth() + 1, day: t.getUTCDate() };
  }
  function mod(n, m) { return ((n % m) + m) % m; }
  function weekday(dn) { return mod(dn + 4, 7); }            // 0 = Ahad … 6 = Sabtu
  function daysInMonth(y, m) { return new Date(Date.UTC(y, m, 0)).getUTCDate(); }

  // Tarikh semasa di Malaysia, tidak bergantung pada zon masa peranti.
  function todayMY(now) {
    var p = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kuala_Lumpur', year: 'numeric', month: '2-digit', day: '2-digit' })
      .formatToParts(now || new Date()).reduce(function (a, x) { a[x.type] = x.value; return a; }, {});
    return toDayNumber(+p.year, +p.month, +p.day);
  }

  // ---- Minggu kalendar (Ahad–Sabtu) dalam bulan ----
  function calendarWeekOfMonth(dn) {
    var t = fromDayNumber(dn);
    return Math.floor((t.day - 1 + weekday(toDayNumber(t.year, t.month, 1))) / 7) + 1;
  }
  function calendarWeeksInMonth(y, m) {
    return Math.floor((daysInMonth(y, m) - 1 + weekday(toDayNumber(y, m, 1))) / 7) + 1;
  }
  // 7 slot Ahad→Sabtu bagi blok minggu; hari di luar bulan = null (bukan data bulan ini).
  function weekSlots(y, m, w) {
    var first = toDayNumber(y, m, 1), n = daysInMonth(y, m);
    var sunday = first - weekday(first) + (w - 1) * 7, out = [];
    for (var i = 0; i < 7; i++) {
      var dn = sunday + i, t = fromDayNumber(dn);
      out.push(t.year === y && t.month === m && t.day >= 1 && t.day <= n ? dn : null);
    }
    return out;
  }

  // ---- Set menu (kitaran 4 minggu, minggu menu Isnin–Ahad) ----
  function mondayOf(dn) { return dn - mod(weekday(dn) - 1, 7); }
  function menuSetOf(dn) {
    var ref = toDayNumber(CYCLE_REF.year, CYCLE_REF.month, CYCLE_REF.day);
    var weeks = Math.floor((mondayOf(dn) - mondayOf(ref)) / 7);
    return mod(CYCLE_REF.set - 1 + weeks, CYCLE_LENGTH) + 1;
  }
  function menuDayIndex(dn) { return mod(weekday(dn) - 1, 7); }   // data.js: Isnin=0 … Ahad=6

  // Satu-satunya fungsi pemadanan tarikh → data menu (digunakan oleh hari ini, esok & mingguan).
  // Pulangkan null jika data tiada; tidak sekali-kali menggantikan dengan hari lain.
  function menuFor(dn, data) {
    var set = menuSetOf(dn), idx = menuDayIndex(dn);
    var wk = data && data.weeks && data.weeks[set];
    var day = wk && wk.menus && wk.menus[idx];
    if (!day) return null;
    var meals = {};
    for (var i = 0; i < MEALS.length; i++) {
      var items = day[MEALS[i]];
      if (!Array.isArray(items) || !items.length) return null;
      meals[MEALS[i]] = items;
    }
    return { set: set, dayIndex: idx, meals: meals };
  }

  var api = {
    CYCLE_REF: CYCLE_REF, MEALS: MEALS, toDayNumber: toDayNumber, fromDayNumber: fromDayNumber, weekday: weekday,
    daysInMonth: daysInMonth, todayMY: todayMY, calendarWeekOfMonth: calendarWeekOfMonth,
    calendarWeeksInMonth: calendarWeeksInMonth, weekSlots: weekSlots, menuSetOf: menuSetOf,
    menuDayIndex: menuDayIndex, menuFor: menuFor
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.MenuCal = api;
})(typeof self !== 'undefined' ? self : this);
