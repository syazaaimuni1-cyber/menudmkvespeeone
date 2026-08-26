const MENU_DATA = {
  source: {
    title: "Menu Makanan Asrama Kementerian Pendidikan Malaysia & Resepi Standard",
    edition: "Semakan 2018",
    section: "Menu Standard Sekolah Menengah"
  },
  days: ["Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu", "Ahad"],
  mealMeta: {
    breakfast: { label: "Sarapan Pagi", short: "Sarapan", icon: "sunrise" },
    lunch: { label: "Makan Tengah Hari", short: "Tengah Hari", icon: "utensils" },
    tea: { label: "Minum Petang", short: "Petang", icon: "coffee" },
    dinner: { label: "Makan Malam", short: "Malam", icon: "moon" },
    supper: { label: "Minum Malam", short: "Minum Malam", icon: "cup" }
  },
  weeks: {
    1: {
      label: "Minggu 1",
      calories: {
        breakfast: [370, 570, 520, 370, 440, 500, 440],
        lunch: [750, 595, 610, 750, 550, 640, 670],
        tea: [320, 330, 240, 440, 360, 340, 360],
        dinner: [790, 550, 585, 550, 515, 590, 630],
        supper: [395, 375, 450, 360, 430, 360, 480],
        total: [2625, 2420, 2405, 2470, 2295, 2430, 2580]
      },
      menus: [
        {
          breakfast: ["Bihun Soto", "Sambal Kicap", "Minuman Bermalta"],
          lunch: ["Nasi Putih", "Ikan Tenggiri Asam Pedas", "Sambal Goreng Jawa", "Sayur Campur", "Oren", "Air Kosong"],
          tea: ["Karipap Berinti Daging", "Kopi O"],
          dinner: ["Nasi Tomato", "Ayam Goreng Rempah", "Dalca", "Papadom", "Tembikai Merah", "Air Kosong"],
          supper: ["Mini Pizza", "Minuman Susu Bercoklat"]
        },
        {
          breakfast: ["Nasi Goreng Kampung", "Minuman Bermalta"],
          lunch: ["Nasi Putih", "Daging Masak Black Pepper", "Tauhu Goreng Berlada", "Kacang Buncis Goreng", "Betik", "Air Kosong"],
          tea: ["Cucur Badak", "Minuman Susu Bermalta"],
          dinner: ["Nasi Putih", "Ikan Kembung Goreng Tepung", "Sup Sayur", "Jambu Batu", "Air Kosong"],
          supper: ["Sandwich Sardin", "Air Soya"]
        },
        {
          breakfast: ["Bijirin Sarapan", "Susu Penuh Krim UHT", "Kismis", "Minuman Bermalta"],
          lunch: ["Nasi Putih", "Ikan Selar Goreng", "Sotong Goreng Kunyit", "Labu Masak Lemak", "Pisang Berangan", "Air Kosong"],
          tea: ["Pisang Goreng", "Teh O"],
          dinner: ["Chicken Chop + Sos Black Pepper", "Coleslaw", "Isi Jagung Kukus", "Bun Kosong", "Lai", "Air Kosong"],
          supper: ["Makaroni Goreng", "Minuman Bermalta"]
        },
        {
          breakfast: ["Roti Bijirin Penuh", "Telur Hancur", "Kacang Panggang", "Minuman Susu Bercoklat"],
          lunch: ["Nasi Ayam", "Ayam Goreng", "Sup Ayam", "Sayur (Salad + Timun + Tomato)", "Kuah Cili Nasi Ayam", "Anggur", "Air Kosong"],
          tea: ["Muffin (Vanila / Pisang / Coklat)", "Minuman Bermalta"],
          dinner: ["Nasi Putih", "Ikan Tenggiri Goreng Masak Kicap", "Taugeh Goreng", "Tembikai Susu", "Air Kosong"],
          supper: ["Roti Paun / Benggali", "Kari Ayam", "Minuman Bermalta"]
        },
        {
          breakfast: ["Spaghetti Goreng", "Minuman Susu Bercoklat"],
          lunch: ["Nasi Putih", "Ikan Bawal Goreng", "Tom Yam Campur", "Jambu Batu", "Air Kosong"],
          tea: ["Kuih Keria", "Air Soya"],
          dinner: ["Nasi Putih", "Daging Masak Kicap", "Kangkung Goreng", "Epal Hijau", "Air Kosong"],
          supper: ["Egg Benjo", "Minuman Bermalta"]
        },
        {
          breakfast: ["Nasi Impit", "Rendang Daging", "Kuah Kacang", "Minuman Bermalta"],
          lunch: ["Nasi Putih", "Ikan Merah Masak Kari", "Telur Dadar", "Kacang Panjang Goreng + Lobak Merah", "Tembikai Susu", "Air Kosong"],
          tea: ["Cakoi + Kaya", "Minuman Susu Bermalta"],
          dinner: ["Nasi Putih", "Sup Ayam", "Sawi Putih Goreng", "Epal Merah", "Air Kosong"],
          supper: ["Bun Kacang Merah", "Minuman Bermalta"]
        },
        {
          breakfast: ["Mi Goreng", "Minuman Susu Bercoklat"],
          lunch: ["Nasi Putih", "Ikan Talapia Goreng Berlada", "Sotong Goreng Kunyit", "Pucuk Manis Masak Lemak", "Tembikai Merah", "Air Kosong", "Ais Krim Perisa Vanila"],
          tea: ["Masala Vadai", "Teh O"],
          dinner: ["Nasi Putih", "Ayam Masak Halia", "Bayam Tumis Air", "Pisang Berangan", "Air Kosong"],
          supper: ["Roti Canai", "Dalca", "Minuman Bermalta"]
        }
      ]
    },
    2: {
      label: "Minggu 2",
      calories: {
        breakfast: [570, 440, 480, 500, 450, 590, 630],
        lunch: [670, 540, 720, 700, 840, 590, 750],
        tea: [440, 320, 230, 330, 420, 350, 200],
        dinner: [630, 590, 570, 670, 560, 770, 500],
        supper: [375, 470, 320, 350, 360, 360, 370],
        total: [2685, 2360, 2320, 2550, 2630, 2660, 2450]
      },
      menus: [
        {
          breakfast: ["Nasi Goreng Cina", "Telur Mata", "Minuman Bermalta"],
          lunch: ["Nasi Putih", "Ikan Bawal Hitam Masak Taucu", "Sup Sayur", "Sambal Goreng Jawa", "Betik", "Air Kosong"],
          tea: ["Karipap Pusing", "Minuman Bermalta"],
          dinner: ["Nasi Putih", "Ayam Goreng Berempah", "Sayur Campur", "Sambal Belacan + Ulam", "Tembikai Susu", "Air Kosong"],
          supper: ["Sandwich Sardin", "Air Soya"]
        },
        {
          breakfast: ["Roti Putih", "Telur Hancur", "Kacang Panggang", "Minuman Susu Bercoklat"],
          lunch: ["Nasi Putih", "Sup Daging", "Sotong Goreng Kunyit", "Sayur Kangkung Goreng", "Tembikai Merah", "Air Kosong"],
          tea: ["Cucur Udang", "Kopi O"],
          dinner: ["Nasi Putih", "Ikan Tenggiri Masak Kari", "Buncis + Taugeh + Lobak Merah Goreng", "Epal Hijau", "Air Kosong"],
          supper: ["Mi Hailam", "Minuman Bermalta"]
        },
        {
          breakfast: ["Roti Canai", "Dalca", "Minuman Bermalta"],
          lunch: ["Nasi Putih", "Rendang Daging", "Telur Dadar", "Sawi Putih Goreng", "Anggur", "Air Kosong"],
          tea: ["Keledek Goreng", "Air Soya"],
          dinner: ["Nasi Putih", "Ikan Siakap 3 Rasa", "Kacang Panjang Goreng + Lobak Merah", "Pisang Berangan", "Air Kosong"],
          supper: ["Pau Kacang Merah", "Minuman Susu Bermalta"]
        },
        {
          breakfast: ["Bihun Goreng Putih", "Minuman Susu Bercoklat"],
          lunch: ["Nasi Putih", "Daging Paprik", "Sotong Goreng Bercili", "Labu Air Masak Tumis", "Jambu Batu", "Air Kosong"],
          tea: ["Kuih Kasturi", "Minuman Bermalta"],
          dinner: ["Nasi Putih", "Ayam Masak Kicap", "Kubis Goreng", "Epal Merah", "Air Kosong"],
          supper: ["Roti Bun Kosong", "Sup Ayam", "Minuman Bermalta"]
        },
        {
          breakfast: ["Makaroni Goreng", "Minuman Bermalta"],
          lunch: ["Nasi Briyani", "Ayam Tandoori Goreng", "Dalca", "Papadom", "Tembikai Merah", "Air Kosong"],
          tea: ["Cucur Pisang", "Minuman Susu Bermalta"],
          dinner: ["Nasi Putih", "Ikan Merah Masak Sup", "Kailan Goreng Belacan", "Lai", "Air Kosong"],
          supper: ["Bubur Jagung", "Roti Putih", "Teh O"]
        },
        {
          breakfast: ["Nasi Goreng Kampung", "Minuman Susu Bermalta"],
          lunch: ["Nasi Putih", "Ikan Kembung Goreng Kicap", "Udang Sweet Sour", "Kacang Buncis Goreng", "Tembikai Susu", "Air Kosong"],
          tea: ["Kek Pisang", "Air Soya"],
          dinner: ["Nasi Putih", "Ayam Goreng Masak Merah", "Kubis Panjang Tumis Air + Lobak Merah", "Epal Hijau", "Air Kosong"],
          supper: ["Bihun Soto", "Sambal Kicap", "Minuman Bermalta"]
        },
        {
          breakfast: ["Nasi Lemak", "Minuman Bermalta"],
          lunch: ["Nasi Putih", "Rendang Daging", "Telur Dadar", "Cendawan Tumis", "Betik", "Air Kosong"],
          tea: ["Cucur Ikan Bilis", "Kopi O"],
          dinner: ["Nasi Putih", "Udang Goreng Kunyit", "Sup Sayur", "Oren", "Air Kosong"],
          supper: ["Sup Cendawan Berkrim", "Roti Bijirin Penuh", "Minuman Susu Bercoklat"]
        }
      ]
    },
    3: {
      label: "Minggu 3",
      calories: {
        breakfast: [440, 520, 440, 520, 340, 500, 380],
        lunch: [800, 505, 870, 610, 675, 755, 575],
        tea: [340, 510, 305, 440, 280, 350, 460],
        dinner: [600, 680, 565, 720, 500, 610, 715],
        supper: [425, 420, 355, 370, 460, 450, 265],
        total: [2605, 2635, 2535, 2660, 2255, 2665, 2395]
      },
      menus: [
        {
          breakfast: ["Kuetiau Goreng", "Minuman Susu Bercoklat"],
          lunch: ["Nasi Putih", "Ayam Masak Kari", "Kacang Buncis Goreng", "Sambal Goreng Jawa", "Tembikai Susu", "Air Kosong"],
          tea: ["Karipap Sardin", "Teh O"],
          dinner: ["Nasi Putih", "Ikan Tenggiri Goreng Masak Kicap", "Sayur Campur", "Epal Hijau", "Air Kosong"],
          supper: ["Bubur Cha Cha", "Biskut Krim Kraker", "Minuman Bermalta"]
        },
        {
          breakfast: ["Nasi Goreng", "Minuman Bermalta"],
          lunch: ["Nasi Putih", "Sup Daging", "Udang Goreng Berempah", "Betik", "Air Kosong"],
          tea: ["Masala Vadai", "Minuman Susu Bermalta"],
          dinner: ["Nasi Putih", "Ikan Tenggiri Masak Lemak Cili Api", "Taugeh Goreng", "Jambu Batu", "Air Kosong"],
          supper: ["Egg Benjo", "Air Soya"]
        },
        {
          breakfast: ["Mi Goreng", "Minuman Bermalta"],
          lunch: ["Nasi Jagung", "Ayam Goreng Masak Merah", "Dalca", "Papadom", "Anggur", "Air Kosong"],
          tea: ["Ubi Kayu Rebus + Sambal", "Minuman Bermalta"],
          dinner: ["Fish & Corn", "Coleslaw", "Isi Jagung Kukus", "Bun Kosong", "Oren", "Air Kosong"],
          supper: ["Mini Pizza", "Minuman Susu Bercoklat"]
        },
        {
          breakfast: ["Bijirin Sarapan", "Susu Penuh Krim UHT", "Kismis", "Minuman Bermalta"],
          lunch: ["Nasi Putih", "Ikan Selar Goreng", "Udang Sweet Sour", "Bayam Goreng", "Lai", "Air Kosong"],
          tea: ["Muffin (Vanila / Pisang / Coklat)", "Minuman Bermalta"],
          dinner: ["Nasi Ayam", "Ayam Goreng", "Sup Ayam", "Sayur (Salad + Timun + Tomato)", "Kuah Cili Nasi Ayam", "Tembikai Merah", "Air Kosong"],
          supper: ["Sup Cendawan Berkrim", "Roti Bijirin Penuh", "Minuman Bermalta"]
        },
        {
          breakfast: ["Spaghetti Bolognese", "Minuman Bermalta"],
          lunch: ["Nasi Putih", "Daging Masak Kurma", "Sotong Goreng Bercili", "Kangkung Goreng", "Betik", "Air Kosong"],
          tea: ["Apam Gula Hangus", "Air Soya"],
          dinner: ["Nasi Putih", "Ikan Keli Goreng Berlada", "Labu Masak Lemak", "Pisang Berangan", "Air Kosong"],
          supper: ["Roti Canai", "Dalca", "Minuman Susu Bermalta"]
        },
        {
          breakfast: ["Nasi Impit", "Rendang Daging", "Kuah Kacang", "Minuman Susu Bercoklat"],
          lunch: ["Nasi Putih", "Ikan Cencaru Goreng Sumbat Cili", "Air Asam / Kicap", "Udang Goreng Kunyit", "Kubis Masak Lemak", "Jambu Batu", "Air Kosong", "Ais Krim Perisa Coklat"],
          tea: ["Pau Goreng Sambal", "Teh O"],
          dinner: ["Nasi Putih", "Ayam Masak Kari", "Buncis + Taugeh + Lobak Merah Goreng", "Epal Merah", "Air Kosong"],
          supper: ["Makaroni Goreng", "Minuman Bermalta"]
        },
        {
          breakfast: ["Bihun Soto", "Sambal Kicap", "Minuman Susu Bermalta"],
          lunch: ["Nasi Putih", "Ikan Selar Goreng", "Sambal Udang", "Tom Yam Sayur", "Tembikai Merah", "Air Kosong"],
          tea: ["Kek Coklat", "Minuman Bermalta"],
          dinner: ["Nasi Goreng", "Ayam Goreng", "Sup Sayur", "Tembikai Susu", "Air Kosong"],
          supper: ["Sandwich Sardin", "Minuman Bermalta"]
        }
      ]
    },
    4: {
      label: "Minggu 4",
      calories: {
        breakfast: [520, 490, 480, 355, 630, 520, 360],
        lunch: [670, 665, 710, 690, 600, 550, 760],
        tea: [300, 440, 240, 360, 200, 450, 340],
        dinner: [585, 670, 580, 680, 610, 550, 670],
        supper: [270, 380, 265, 475, 360, 280, 360],
        total: [2345, 2645, 2275, 2560, 2400, 2350, 2490]
      },
      menus: [
        {
          breakfast: ["Roti Bijirin Penuh", "Telur Hancur", "Kacang Panggang", "Minuman Susu Bermalta"],
          lunch: ["Nasi Putih", "Daging Masak Asam Pedas", "Telur Dadar", "Bayam Goreng", "Anggur", "Air Kosong"],
          tea: ["Pau Kacang Merah", "Minuman Bermalta"],
          dinner: ["Nasi Putih", "Ikan Siakap 3 Rasa", "Kailan Goreng Belacan", "Betik", "Air Kosong"],
          supper: ["Cucur Pisang", "Teh O"]
        },
        {
          breakfast: ["Bihun Goreng", "Minuman Susu Bermalta"],
          lunch: ["Nasi Putih", "Udang Masak Paprik", "Sambal Goreng Jawa", "Kangkung Goreng", "Jambu Batu", "Air Kosong"],
          tea: ["Karipap Berinti Daging", "Minuman Bermalta"],
          dinner: ["Nasi Putih", "Ayam Masak Kicap", "Sayur Campur", "Sambal Belacan + Ulam", "Oren", "Air Kosong"],
          supper: ["Roti Putih", "Telur Hancur", "Timun", "Salad", "Air Soya"]
        },
        {
          breakfast: ["Roti Canai", "Dalca", "Minuman Susu Bercoklat"],
          lunch: ["Nasi Putih", "Ayam Goreng Berempah", "Sambal Udang", "Kubis Masak Lemak", "Tembikai Susu", "Air Kosong"],
          tea: ["Keledek Goreng", "Minuman Bermalta"],
          dinner: ["Nasi Putih", "Ikan Jenahak Masak Kari", "Sawi Jepun Goreng Sos Tiram", "Jambu Batu", "Air Kosong"],
          supper: ["Sandwich Sardin", "Kopi O"]
        },
        {
          breakfast: ["Bubur Nasi", "Sambal Cili Kicap", "Sayur Kangkung Goreng", "Minuman Bermalta"],
          lunch: ["Nasi Putih", "Ikan Tenggiri Goreng Kicap", "Taugeh Goreng", "Sambal Belacan + Ulam", "Tembikai Merah", "Air Kosong"],
          tea: ["Pulut Panggang", "Minuman Susu Bermalta"],
          dinner: ["Nasi Briyani", "Ayam Masak Kurma", "Dalca", "Papadom", "Epal Hijau", "Air Kosong"],
          supper: ["Bubur Kacang Hijau", "Biskut Krim Kraker", "Minuman Bermalta"]
        },
        {
          breakfast: ["Nasi Lemak", "Minuman Susu Bercoklat"],
          lunch: ["Nasi Jagung", "Ayam Goreng Masak Sambal", "Sayur Campur", "Tembikai Susu", "Air Kosong"],
          tea: ["Kuih Kasturi", "Teh O"],
          dinner: ["Nasi Putih", "Ikan Kembung Goreng Berlada", "Sawi Putih Goreng", "Betik", "Air Kosong"],
          supper: ["Roti Paun / Benggali", "Kari Ayam", "Minuman Bermalta"]
        },
        {
          breakfast: ["Nasi Goreng Cendawan", "Minuman Susu Bercoklat"],
          lunch: ["Nasi Putih", "Ikan Senangin Masak Kari", "Udang Goreng Kunyit", "Sawi Jepun Goreng", "Betik", "Air Kosong"],
          tea: ["Kek Chiffon", "Minuman Susu Bermalta"],
          dinner: ["Nasi Putih", "Sup Ayam", "Kubis Goreng", "Epal Merah", "Air Kosong"],
          supper: ["Pau Ayam", "Minuman Bermalta"]
        },
        {
          breakfast: ["Kuetiau Goreng", "Minuman Bermalta"],
          lunch: ["Nasi Putih", "Ayam Masak Lemak Cili Api", "Sambal Goreng Jawa", "Kubis Goreng", "Buah Lai", "Air Kosong"],
          tea: ["Samosa", "Minuman Bermalta"],
          dinner: ["Nasi Putih", "Ikan Kembung Masak Sambal", "Kacang Panjang Goreng + Lobak Merah", "Pisang Berangan", "Air Kosong"],
          supper: ["Ban Manis", "Minuman Bermalta"]
        }
      ]
    }
  }
};
