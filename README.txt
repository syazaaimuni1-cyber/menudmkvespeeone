MENU DM KVSP1
Kolej Vokasional Sungai Petani 1

Fail utama:
- index.html           : laman utama
- style.css            : semua reka bentuk responsif
- data.js              : data Menu Standard Sekolah Menengah KPM Semakan 2018
- app.js               : fungsi interaktif, carian, tema gelap, pilihan minggu/hari
- manifest.webmanifest : tetapan PWA
- sw.js                : sokongan cache/offline apabila dihoskan melalui HTTPS/localhost
- favicon.svg           : ikon laman

CARA BUKA CEPAT
1. Double-click index.html.
2. Untuk PWA/offline penuh, hos folder menggunakan localhost atau hosting HTTPS.

Contoh VS Code:
- Buka folder ini dalam VS Code.
- Guna extension Live Server dan tekan "Go Live".

FUNGSI
- Responsif untuk telefon, tablet, laptop dan desktop.
- Pilihan Minggu 1-4 dan Isnin-Ahad.
- Auto fokus hari semasa pada kali pertama.
- Paparan 5 waktu makan.
- Jumlah kalori mengikut jadual KPM.
- Carian menu seluruh 4 minggu (Ctrl/Cmd + K).
- Light/Dark mode.
- Print menu hari dipilih.
- PWA/offline apabila dihoskan.

NOTA LOGO
Reka bentuk sekarang menggunakan monogram KVSP1 supaya laman terus berfungsi tanpa fail imej luar.
Jika mahu logo rasmi KVSP1/KPM, letakkan fail logo dalam folder dan ubah bahagian .brand-mark dalam index.html.

SUMBER DATA
Menu Makanan Asrama Kementerian Pendidikan Malaysia & Resepi Standard, Semakan 2018,
bahagian Menu Standard Sekolah Menengah.

KEMAS KINI AUTO HARI / MINGGU
- Minggu bermula pada hari Ahad dan berakhir pada hari Sabtu.
- Kiraan minggu bermula semula pada Minggu 1 apabila bulan baharu bermula, dan dihadkan kepada Minggu 1 hingga 4.
- Contoh: 25 Oktober 2026 = Minggu 4; 1 November 2026 = Minggu 1.
- Pengguna masih boleh pilih minggu/hari lain secara manual. Butang "Hari Ini" kembali ke paparan automatik.
- Logo rasmi KVSP1 disimpan sebagai logo-kvsp1.jpg.


UPDATE PAPARAN AKTIF (WAKTU RASMI)
----------------------------------
- Deploy KESELURUHAN folder ini ke Vercel, termasuk folder /api.
- /api/time.js membekalkan timestamp server; paparan tidak menggunakan jam device untuk menentukan hari/waktu aktif.
- Zon masa paparan: Asia/Kuala_Lumpur (MYT, UTC+8).
- Jadual sesi: 06:30-07:15, 13:10-14:00, 17:00-17:30, 18:00-19:00, 22:00-22:30.
- Minggu dikira mengikut bulan (Ahad-Sabtu, maksimum Minggu 4).
- Paparan Aktif sentiasa ikut hari/minggu/waktu rasmi walaupun pengguna meneroka menu lain secara manual.
- Bahagian Menu Harian/Mingguan auto ke hari semasa apabila laman dibuka; pengguna masih boleh pilih hari/minggu lain.

FIX v5 – WAKTU RASMI
- Sistem cuba /api/time terlebih dahulu.
- Jika fungsi Vercel tidak tersedia, sistem membaca HTTP Date daripada server hosting.
- Jika masih gagal, sistem cuba WorldTimeAPI untuk zon Asia/Kuala_Lumpur.
- Tiada fallback kepada jam peranti pengguna.
- Cache PWA dinaik taraf ke v5 supaya app.js lama tidak melekat.
- Jika semua sumber masa rasmi gagal (cth. fail dibuka terus melalui file://), jam peranti digunakan sebagai pilihan terakhir tetapi tetap ditafsirkan dalam zon Asia/Kuala_Lumpur supaya kad PAPARAN AKTIF tidak kosong.
