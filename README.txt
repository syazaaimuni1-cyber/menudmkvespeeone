MENU DM KVSP1 — Kolej Vokasional Sungai Petani 1  (Dark Cyber Pop)

FAIL
- index.html           : struktur halaman
- style.css            : reka bentuk dark (Cyber Pop), responsif
- data.js              : data Menu Standard Sekolah Menengah KPM Semakan 2018 (TIDAK DIUBAH)
- calendar.js          : logik tarikh Malaysia, minggu kalendar & pemadanan set menu (diuji)
- app.js               : paparan hari ini, esok & mingguan
- manifest.webmanifest : tetapan PWA
- sw.js                : cache (network-first). NAIKKAN CACHE_NAME setiap kali ubah fail.
- favicon.svg          : ikon sedia ada (rujukan ikon manifest)
- logo-kvsp1.jpg       : logo header (berasingan daripada ikon Add to Home Screen)

LOGIK MINGGU
- Minggu kalendar: Ahad–Sabtu, dikira semula setiap bulan (Minggu 1 hingga 6). Tarikh bulan lain tidak dipaparkan sebagai data bulan semasa.
- Set Menu: kitaran 4 minggu berterusan, minggu menu Isnin–Ahad (logik asal). Rujukan tunggal dalam calendar.js (CYCLE_REF):
  minggu menu yang bermula Isnin 24 Ogos 2026 = Set 2; kemudian 2 → 3 → 4 → 1.
- Hari Ahad mengikut set minggu menu sebelumnya (Isnin–Ahad), jadi Set Menu boleh bertukar di tengah minggu kalendar.
- Label "Minggu X (Kalendar)" dan "Set Menu N" dipaparkan berasingan.

UJIAN: node tests/run-tests.js
SUMBER DATA: Menu Makanan Asrama KPM & Resepi Standard, Semakan 2018, Menu Standard Sekolah Menengah.
