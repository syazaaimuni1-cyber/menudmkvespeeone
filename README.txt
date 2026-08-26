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
- Website dibuka terus pada menu hari semasa mengikut tarikh peranti.
- Anchor kitaran: Isnin 24 Ogos 2026 = Minggu 2.
- Minggu bertukar automatik setiap Isnin: 2 → 3 → 4 → 1 → berulang.
- Pengguna masih boleh pilih minggu/hari lain secara manual. Butang “Hari Ini” kembali ke paparan automatik.
- Logo rasmi KVSP1 disimpan sebagai logo-kvsp1.jpg.
