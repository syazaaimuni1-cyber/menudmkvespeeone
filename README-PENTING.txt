MENU DM KVSP1 - ULTRAFIX MASA RASMI

PENTING:
1. Upload ISI folder ini terus sebagai ROOT project Vercel.
   index.html mesti berada di root, bukan di dalam folder kedua.
2. Pastikan folder api/ turut diupload.
3. vercel.json turut perlu berada di root.
4. Selepas deploy, buka deployment baru. Versi ini mempunyai cache-busting dan akan membuang Service Worker lama secara automatik.

Masa rasmi dicuba dalam turutan:
- HTTP Date daripada hosting Vercel sendiri (utama)
- /api/time Vercel Function
- TimeAPI.io Asia/Kuala_Lumpur
- WorldTimeAPI Asia/Kuala_Lumpur

Jam device hanya digunakan sebagai pilihan TERAKHIR (ditafsir dalam Asia/Kuala_Lumpur) jika semua sumber masa rasmi gagal.
