// =============================
// GLOBAL VARIABLES (Wajib di Paling Atas)
// =============================
// Agar bisa diakses dan dimatikan dari fungsi manapun
let therapyInterval;   // Untuk Timer Mundur
let breathingInterval; // Untuk Animasi Napas
const breatheAudio = new Audio("assets/audio/nafas-manual.mp3"); // Audio Global
breatheAudio.volume = 0.3;


// =============================
// 1. DATA TIM AHLI (Psikolog & Konselor)
// =============================
const doctors = [
  {
    name: "Karina Anindya, M.Psi, Psikolog",
    specialist: "Spesialis Trauma & Trust Issue",
    schedule: "Senin - Jumat • 09.00–15.00",
    room: "Ruang Konseling A",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Budi Santoso, S.Psi, C.Ht",
    specialist: "Hipnoterapi & Relaksasi",
    schedule: "Selasa & Kamis • 13.00–18.00",
    room: "Ruang Hipnoterapi",
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Sarah Wijaya, M.Psi",
    specialist: "Konselor Pernikahan & Keluarga",
    schedule: "Rabu & Sabtu • 10.00–16.00",
    room: "Family Room",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Dr. Rian Pratama, Sp.KJ",
    specialist: "Psikiater (Manajemen Kecemasan)",
    schedule: "Jumat & Minggu • 15.00–20.00",
    room: "Klinik Psikiatri",
    photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=200&auto=format&fit=crop",
  },
];
// =============================
// 2. DATA LAYANAN (Pemulihan Mental & Trauma)
// =============================
const services = [
  {
    id: "trauma",
    name: "Trauma Healing Program",
    category: "Pemulihan Duka",
    price: 450000,
    icon: "fa-solid fa-heart-crack",
    benefits: [
      "Konseling Mendalam (60 Menit)",
      "Terapi Penerimaan Diri (Self-Acceptance)",
      "Jurnal Emosi Digital",
      "Akses Grup Support Wanita",
    ],
  },
  {
    id: "anxiety",
    name: "Manajemen Kecemasan",
    category: "Mental Health",
    price: 350000,
    icon: "fa-solid fa-wind",
    benefits: [
      "Teknik Grounding 5-4-3-2-1",
      "Terapi Kognitif Perilaku (CBT)",
      "Audio Relaksasi Khusus",
      "Panduan Tidur Nyenyak",
    ],
  },
  {
    id: "couple",
    name: "Konseling Pasangan",
    category: "Hubungan",
    price: 600000,
    icon: "fa-solid fa-user-group",
    benefits: [
      "Sesi Mediasi Pasangan (90 Menit)",
      "Analisis Pola Komunikasi",
      "Membangun Ulang Kepercayaan",
      "PR Latihan Komunikasi di Rumah",
    ],
  },
  {
    id: "hypno",
    name: "Hipnoterapi Relaksasi",
    category: "Bawah Sadar",
    price: 400000,
    icon: "fa-solid fa-stopwatch",
    benefits: [
      "Akses ke Memori Bawah Sadar",
      "Pelepasan Emosi Terpendam",
      "Sugesti Positif & Confidence",
      "Rekaman Sesi untuk Diulang",
    ],
  },
  {
    id: "art",
    name: "Art Therapy Session",
    category: "Ekspresi",
    price: 300000,
    icon: "fa-solid fa-palette",
    benefits: [
      "Melukis Emosi (Tanpa Skill Gambar)",
      "Analisis Psikologis Karya",
      "Pelepasan Stres Non-Verbal",
      "Alat Lukis Disediakan",
    ],
  },
  {
    id: "checkup",
    name: "Screening Mental Lengkap",
    category: "Diagnosis",
    price: 550000,
    icon: "fa-solid fa-clipboard-list",
    benefits: [
      "Tes MMPI / Kepribadian",
      "Tes Tingkat Stres & Depresi",
      "Laporan Analisis Lengkap",
      "Rekomendasi Terapi Personal",
    ],
  },
];

const formatRupiah = (value) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
};

// =============================
// 3. RENDER FUNCTIONS
// =============================
const renderDoctors = () => {
  const list = document.getElementById("doctorList");
  if (!list) return;
  list.innerHTML = "";
  doctors.forEach((doc) => {
    const card = document.createElement("article");

    card.className =
      "flex items-start gap-4 p-5 rounded-2xl bg-white/80 border border-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group";

    card.innerHTML = `
            <div class="relative">
                <div class="h-16 w-16 rounded-2xl overflow-hidden bg-sage-100 ring-2 ring-white shadow-md">
                    <img src="${doc.photo}" class="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></div>
            </div>
            <div class="flex-1 min-w-0">
                <h4 class="font-bold text-sage-900 group-hover:text-sage-700 transition-colors">${doc.name}</h4>
                <p class="text-xs font-medium text-sage-600 mb-2">${doc.specialist}</p>
                <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-sage-50 border border-sage-100 text-[10px] text-sage-500">
                    <i class="fa-regular fa-clock"></i> ${doc.schedule}
                </div>
            </div>`;
    list.appendChild(card);
  });
};

const renderServices = () => {
  const container = document.getElementById("servicesContainer");
  // Hapus referensi ke select karena elemennya sudah kita buang di HTML

  if (!container) return;

  container.innerHTML = "";

  services.forEach((s) => {
    // Render List Benefits
    const benefitsHTML = s.benefits
      .map(
        (item) => `
            <li class="flex items-start gap-2 text-[11px] text-gray-500 leading-snug">
                <i class="fa-solid fa-check text-sage-500 mt-0.5 shrink-0 text-[10px]"></i>
                <span>${item}</span>
            </li>
        `
      )
      .join("");

    const card = document.createElement("div");
    // Tambahkan data-attributes untuk memudahkan pengambilan data saat kalkulasi
    card.dataset.id = s.id;
    card.dataset.price = s.price;
    card.dataset.name = s.name;

    // Tambahkan class indentifier 'service-card'
    card.className =
      "service-card flex flex-col p-5 rounded-2xl border border-sage-100 bg-white hover:border-sage-300 hover:shadow-lg transition-all duration-200 cursor-pointer group h-full relative overflow-hidden select-none";

    // Logika Klik Multi-Select
    card.onclick = () => {
      // Toggle Class Active
      card.classList.toggle("selected-service");
      card.classList.toggle("ring-4"); // Border Tebal
      card.classList.toggle("ring-sage-500"); // Warna Sage
      card.classList.toggle("bg-sage-50"); // Background agak gelap dikit

      // Trigger Event agar Kalkulator menghitung ulang otomatis
      const event = new Event("serviceChanged");
      document.getElementById("servicesContainer").dispatchEvent(event);
    };

    card.innerHTML = `
            <div class="absolute top-0 right-0 w-24 h-24 bg-sage-50 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:bg-sage-100 transition-colors"></div>

            <div class="flex justify-between items-start mb-3 relative z-10">
                <div class="h-10 w-10 rounded-xl bg-sage-50 flex items-center justify-center text-sage-600 group-hover:bg-sage-600 group-hover:text-white transition-colors shadow-sm">
                    <i class="${s.icon} text-lg"></i>
                </div>
                <span class="text-[10px] font-bold tracking-wide text-nexus-teal bg-teal-50 px-2 py-1 rounded-lg border border-teal-100">
                    ${s.category}
                </span>
            </div>

            <div class="mb-4 relative z-10">
                <h4 class="font-bold text-sage-900 text-sm mb-1">${s.name}</h4>
                <p class="text-lg font-bold text-sage-700">${formatRupiah(
      s.price
    )}</p>
            </div>

            <div class="h-px w-full bg-sage-100 mb-4"></div>

            <div class="flex-1 relative z-10">
                <p class="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Paket Termasuk:</p>
                <ul class="space-y-2">
                    ${benefitsHTML}
                </ul>
            </div>
            
            <div class="absolute top-3 right-3 z-20 opacity-0 transform scale-50 transition-all duration-200 check-indicator">
                <div class="bg-sage-600 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md">
                    <i class="fa-solid fa-check text-xs"></i>
                </div>
            </div>
        `;
    container.appendChild(card);
  });
};

// =============================================
// 4. SPA SYSTEM
// =============================================
const setupTabSwitching = () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".spa-section");

  const updateDOM = (targetId) => {
    sections.forEach((sec) => {
      if (sec.id === targetId) {
        sec.classList.remove("hidden");
      } else {
        sec.classList.add("hidden");
      }
    });

    navLinks.forEach((link) => {
      const isActive = link.dataset.target === targetId;
      link.classList.toggle("tab-active", isActive);

      if (isActive) {
        link.classList.remove("text-sage-600");
        const icon = link.querySelector("i");
        if (icon) icon.classList.remove("text-sage-600");
      } else {
        link.classList.add("text-sage-600");
      }
    });

    window.scrollTo(0, 0);
  };

  const showSection = (targetId) => {
    if (!document.startViewTransition) {
      updateDOM(targetId);
      return;
    }
    document.startViewTransition(() => {
      updateDOM(targetId);
    });
  };

  window.showSection = showSection;

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const btn = link.closest("button");
      if (btn) showSection(btn.dataset.target);
    });
  });

  updateDOM("beranda");
};

// =============================
// 5. CALCULATOR LOGIC
// =============================
const setupCostEstimator = () => {
  const els = {
    // select: document.getElementById("serviceSelect"), // SUDAH DIHAPUS
    container: document.getElementById("servicesContainer"),
    qty: document.getElementById("quantityInput"),
    payment: document.getElementById("paymentType"),
    check: document.getElementById("followUpCheck"),
    btn: document.getElementById("calculateBtn"),
    total: document.getElementById("estimateTotal"),
    detail: document.getElementById("estimateDetail"),
  };

  // Gak perlu cek els.select lagi
  if (!els.btn || !els.container) return;

  const calculate = () => {
    // 1. Cari semua kartu yang dipilih (ada class 'selected-service')
    const selectedCards = document.querySelectorAll(
      ".service-card.selected-service"
    );

    // 2. Jika tidak ada yang dipilih
    if (selectedCards.length === 0) {
      els.total.textContent = "Rp0";
      els.detail.textContent = "Silakan pilih minimal satu layanan.";
      return;
    }

    // 3. Hitung Total Dasar (Sum Price)
    let totalBasePrice = 0;
    let selectedNames = [];

    selectedCards.forEach((card) => {
      totalBasePrice += parseInt(card.dataset.price);
      selectedNames.push(card.dataset.name);
    });

    // 4. Kalikan dengan Jumlah (Pax)
    // Asumsi: Quantity berlaku untuk paket yang dipilih (misal: 2 orang ambil paket A+B)
    const qty = parseInt(els.qty.value) || 1;
    let subtotal = totalBasePrice * qty;

    // 5. Logika Diskon / Asuransi
    let note = "";
    if (els.payment.value === "bpjs") {
      subtotal *= 0.15; // Bayar 15% aja
      note = "Cover BPJS (Bayar Admin 15%)";
    } else if (els.payment.value === "asuransi") {
      subtotal *= 0.5; // Bayar 50%
      note = "Cover Asuransi 50%";
    } else {
      note = "Pembayaran Tunai/QRIS";
    }

    // 6. Tambahan Kontrol Lanjutan (Opsional)
    // Logika: Biaya kontrol (misal 100rb fix) atau persentase?
    // Kita pakai logika lama: nambah biaya dari total
    if (els.check.checked) {
      // Misal biaya kontrol flat 50rb per layanan yg dipilih
      const controlCost = 50000 * selectedCards.length * qty;
      subtotal += controlCost;
      note += " + Kontrol Lanjutan";
    }

    // Update UI
    els.total.textContent = formatRupiah(subtotal);

    // Tampilkan detail ringkas
    const namesStr =
      selectedNames.length > 2
        ? `${selectedNames.length} Layanan Terpilih`
        : selectedNames.join(" + ");

    els.detail.textContent = `${namesStr} (${qty} Pax). ${note}`;
  };

  // Event Listeners
  els.btn.addEventListener("click", calculate);

  // Listen perubahan pada input form
  [els.qty, els.payment, els.check].forEach((e) =>
    e.addEventListener("change", calculate)
  );

  // Listen custom event dari renderServices (saat kartu diklik)
  els.container.addEventListener("serviceChanged", calculate);
};
// =============================
// SISTEM AKSES KONSELING (REDESIGN SOULVAYA)
// =============================
const SESSION_DURATION = 10 * 1000; // waktu sesi: 3 menit (untuk demo ubah menjadi 10 * 1000)

// --- 1. LOGIKA MODAL ---
function openQueueModal() {
  const status = localStorage.getItem("sessionStatus");
  if (status === "sedang_terapi") {
    alert("Sesi konseling Anda masih aktif. Mohon selesaikan terlebih dahulu.");
    if (window.showSection) window.showSection("terapi");
    return;
  }

  const modal = document.getElementById("queueModal");
  if (modal) {
    modal.classList.remove("hidden");
    setTimeout(() => {
      modal.classList.remove("opacity-0");
      modal.querySelector("div").classList.remove("scale-95");
      modal.querySelector("div").classList.add("scale-100");
    }, 10);
  }
}

function closeQueueModal() {
  const modal = document.getElementById("queueModal");
  if (modal) {
    modal.classList.add("opacity-0");
    modal.querySelector("div").classList.remove("scale-100");
    modal.querySelector("div").classList.add("scale-95");
    setTimeout(() => {
      modal.classList.add("hidden");
    }, 300);
  }
}

// --- 2. LOGIKA KODE JALUR (Somatik vs Psikologis) ---
function generateQueueNumber(type) {
  // Somatik (S) = Keluhan Fisik akibat Trauma
  // Psikologis (P) = Keluhan Mental/Emosional
  const storageKey = type === 'somatik' ? 'queueCounterS' : 'queueCounterP';
  const prefix = type === 'somatik' ? 'S-' : 'P-';

  let lastNumber = localStorage.getItem(storageKey);
  let currentNumber = lastNumber ? parseInt(lastNumber) : 0;

  currentNumber += 1;
  localStorage.setItem(storageKey, currentNumber);

  return prefix + String(currentNumber).padStart(3, '0');
}

// --- 3. PROSES UTAMA ---
// GANTI NOMOR WA DOKTER DISINI
const DOCTOR_WA_NUMBER = "6281234567890"; 

function processQueue(type) {
  // 1. Generate Kode
  const queueNumber = generateQueueNumber(type);

  // 2. Simpan Tipe Jalur
  localStorage.setItem("myQueueType", type);

  // 3. Mulai Sesi
  startSession(queueNumber);
  updateQueueUI(queueNumber, type);

  // 4. Tutup Modal & Pindah ke Ruang Tenang
  closeQueueModal();
  if (window.showSection) window.showSection("terapi");

  // 5. Jalankan Mesin (Timer & Napas)
  startTherapyTimer();
  
  // RESET dulu napas biar bersih, baru mulai
  resetBreathingUI(); 
  startBreathing(); 

  // 6. Update Judul Halaman
  const terapiTitle = document.getElementById("terapiTitle");
  if (terapiTitle) {
    terapiTitle.textContent = `Sesi Pemulihan ${queueNumber} - Ruang Tenang Anda.`;
  }

  // 7. SIAPKAN LINK WHATSAPP (Tapi tombolnya masih hidden)
  const waBtn = document.getElementById("connectDoctorBtn");
  if (waBtn) {
      let message = "";
      if (type === 'somatik') {
          message = `Halo Admin Soulvaya, saya nomor antrean *${queueNumber}*. Saya ada keluhan *Fisik/Somatik* (nyeri, maag, berdebar). Mohon arahannya.`;
      } else {
          message = `Halo Admin Soulvaya, saya nomor antrean *${queueNumber}*. Saya butuh *Konseling Psikologis* (cemas, stres, trauma). Mohon bantuannya.`;
      }
      waBtn.href = `https://wa.me/${DOCTOR_WA_NUMBER}?text=${encodeURIComponent(message)}`;
  }
}

function startSession(queueNumber) {
  const now = Date.now();
  localStorage.setItem("sessionStatus", "sedang_terapi");
  localStorage.setItem("sessionStartTime", now);
  localStorage.setItem("currentQueue", queueNumber);
}

// --- 4. UPDATE TAMPILAN (REBRANDING SOULVAYA) ---
function updateQueueUI(queueNumber, type) {
  const num = document.getElementById("queueNumberCard");
  const statusCard = document.getElementById("queueStatusCard");
  const navbarBtn = document.getElementById("navbarQueueBtn");
  const queueBtn = document.getElementById("takeQueueBtn");

  // --- PERUBAHAN TEKS DI SINI ---
  let typeText = "Menunggu";
  let statusClass = "text-xs font-medium bg-gray-100 text-gray-600 inline-block px-3 py-1 rounded-full";

  if (type === 'somatik') {
    typeText = "Konseling Somatik (Fisik)";
    // Warna Teal (Tetap sama, menenangkan)
    statusClass = "text-xs font-medium text-teal-700 bg-teal-100 inline-block px-3 py-1 rounded-full border border-teal-200";
  } else if (type === 'psikologis') {
    typeText = "Konseling Psikologis (Mental)";
    // Warna Ungu
    statusClass = "text-xs font-medium text-purple-700 bg-purple-100 inline-block px-3 py-1 rounded-full border border-purple-200";
  }

  // Update Angka
  if (num) {
    num.textContent = queueNumber;
    num.classList.add("queue-pulse");
    setTimeout(() => num.classList.remove("queue-pulse"), 600);
  }

  // Update Label Status
  if (statusCard) {
    statusCard.textContent = typeText;
    statusCard.className = statusClass;
  }

  // Update Tombol Navbar (Terkunci)
  if (navbarBtn) {
    navbarBtn.textContent = `Sesi Aktif: ${queueNumber}`;
    navbarBtn.disabled = true;
    navbarBtn.classList.add("opacity-50", "cursor-not-allowed");
  }

  // Update Tombol Hero (Terkunci)
  if (queueBtn) {
    queueBtn.textContent = "Sesi Pemulihan Sedang Berlangsung";
    queueBtn.disabled = true;
    queueBtn.classList.add("opacity-50", "cursor-not-allowed", "bg-gray-400");
  }
}

// --- 5. CEK STATUS (ANTI REFRESH) ---
function checkSessionStatus() {
  const status = localStorage.getItem("sessionStatus");
  const startTime = localStorage.getItem("sessionStartTime");
  const queueNumber = localStorage.getItem("currentQueue");
  const queueType = localStorage.getItem("myQueueType");

  if (status === "sedang_terapi" && startTime) {
    const now = Date.now();
    const elapsed = now - parseInt(startTime);
    const remainingMs = SESSION_DURATION - elapsed;

    if (remainingMs > 0) {
      // Restore Tampilan
      updateQueueUI(queueNumber, queueType);

      // Lanjut Timer
      const remainingSeconds = Math.ceil(remainingMs / 1000);
      startTherapyTimer(remainingSeconds);

      const terapiTitle = document.getElementById("terapiTitle");
      if (terapiTitle) {
        terapiTitle.textContent = `Sesi Pemulihan ${queueNumber} - Lanjutkan Ketenangan Anda.`;
      }
    } else {
      finishSession();
    }
  }
}

// =============================
// FIX FINAL: FUNGSI BATALKAN SESI (CLEANUP TOTAL)
// =============================
function finishSession() {
  // 1. MATIKAN SEMUA TIMER & INTERVAL
  if (therapyInterval) {
    clearInterval(therapyInterval);
    therapyInterval = null;
  }
  if (breathingInterval) {
    clearInterval(breathingInterval);
    breathingInterval = null;
  }
  
  // 2. MATIKAN AUDIO & RESET NAPAS
  breatheAudio.pause();
  breatheAudio.currentTime = 0;
  resetBreathingUI(); // (Fungsi baru, nanti kita buat di bawah)

  // 3. HAPUS DATA SESI DARI MEMORI
  localStorage.removeItem("sessionStatus");
  localStorage.removeItem("sessionStartTime");
  localStorage.removeItem("currentQueue");
  localStorage.removeItem("myQueueType");

  // 4. SEMBUNYIKAN UI TERAPI
  const timerDisplay = document.getElementById("timerDisplay");
  const waBtn = document.getElementById("connectDoctorBtn");
  const finishBtn = document.getElementById("finishSessionBtn");
  const terapiTitle = document.getElementById("terapiTitle");

  if (timerDisplay) timerDisplay.classList.add("hidden");
  if (finishBtn) finishBtn.classList.add("hidden");
  
  // Solusi tombol WA masih muncul:
  if (waBtn) {
      waBtn.classList.add("hidden"); 
      waBtn.classList.remove("animate-bounce"); 
  }

  // 5. RESET KARTU ANTREAN BERANDA
  const num = document.getElementById("queueNumberCard");
  const statusCard = document.getElementById("queueStatusCard");

  if (num) num.textContent = "--";
  if (statusCard) {
      statusCard.textContent = "Siap untuk Sesi Baru";
      statusCard.className = "text-xs font-medium text-sage-600 bg-sage-100 inline-block px-3 py-1 rounded-full";
  }
  if (terapiTitle) {
    terapiTitle.textContent = "Ruang Tenang Digital";
  }

  // 6. BUKA KUNCI TOMBOL
  enableQueueButtons();

  // 7. LEMPAR KE BERANDA
  setTimeout(() => {
      if (typeof window.showSection === "function") {
          window.showSection("beranda");
      }
      // Reset dropdown form di beranda (opsional)
      const pInput = document.getElementById("physicalSymptom");
      const mInput = document.getElementById("mentalSymptom");
      const rBox = document.getElementById("recommendationResult");
      if(pInput) pInput.value = "";
      if(mInput) mInput.value = "";
      if(rBox) rBox.classList.add("hidden");
  }, 100);
}

// =============================
// 2. REVISI ENABLE BUTTONS (Update untuk tombol AI juga)
// =============================
function enableQueueButtons() {
  const navbarBtn = document.getElementById("navbarQueueBtn");
  const queueBtn = document.getElementById("takeQueueBtn");
  const autoBtn = document.getElementById("autoQueueBtn"); // Tombol di hasil Analisis AI

  if (navbarBtn) {
    navbarBtn.disabled = false;
    navbarBtn.textContent = "Akses Sesi Privat";
    navbarBtn.classList.remove("opacity-50", "cursor-not-allowed");
  }

  if (queueBtn) {
    queueBtn.disabled = false;
    queueBtn.textContent = "Mulai Konseling Privat";
    queueBtn.classList.remove("opacity-50", "cursor-not-allowed", "bg-gray-400");
  }

  // Tambahan: Reset tombol di hasil AI juga
  if (autoBtn) {
    autoBtn.disabled = false;
    autoBtn.textContent = "Mulai Konseling Privat";
    autoBtn.classList.remove("opacity-50", "cursor-not-allowed");
  }
}

// =============================
// REVISI LOGIKA TIMER (Fase Menunggu -> Fase Siap)
// =============================

function startTherapyTimer(remainingSeconds) {
  const timerDisplay = document.getElementById("timerDisplay");
  const timerText = document.getElementById("timerText");
  const waBtn = document.getElementById("connectDoctorBtn"); // Tombol WA
  const finishBtn = document.getElementById("finishSessionBtn"); // Tombol Batal

  // 1. KONDISI AWAL (RESET)
  // Sembunyikan tombol WA dulu biar user nunggu!
  if (waBtn) waBtn.classList.add("hidden");

  // Tampilkan Timer & Tombol Batal Kecil
  if (finishBtn) finishBtn.classList.remove("hidden");
  if (timerDisplay) {
    timerDisplay.classList.remove("hidden");
    // Reset tampilan jadi abu-abu lagi
    timerDisplay.className = "text-sm font-medium text-gray-500 bg-sage-50 inline-block px-4 py-2 rounded-lg border border-sage-200";
    // Ganti teks biar lebih logis kenapa harus nunggu
    timerDisplay.innerHTML = `<i class="fa-solid fa-file-medical text-sage-500 mr-2 animate-pulse"></i> Psikolog sedang mempelajari data Anda... <span id="timerText" class="font-bold text-sage-800 ml-1">03:00</span>`;
  }

  // Set Waktu (Default 3 menit)
  // TIPS: Ubah SESSION_DURATION di atas jadi 10000 (10 detik) kalau mau tes cepat!
  let remaining = remainingSeconds || SESSION_DURATION / 1000;

  if (therapyInterval) clearInterval(therapyInterval);

  const updateDisplay = () => {
    const minutes = Math.floor(remaining / 60);
    const seconds = Math.floor(remaining % 60);
    const currentTimerText = document.getElementById("timerText");
    if (currentTimerText) {
      currentTimerText.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }
  };

  updateDisplay();

  therapyInterval = setInterval(() => {
    remaining--;
    updateDisplay();
    // === SAAT WAKTU HABIS (00:00) ===
    if (remaining <= 0) {
      clearInterval(therapyInterval);

      // 1. REVISI STATUS: Gunakan kata "Giliran Tiba" & "Akses Dibuka"
      // (Agar tidak menjanjikan dokter standby, tapi menjanjikan akses)
      if (timerDisplay) {
        timerDisplay.innerHTML = `<i class="fa-solid fa-bell text-green-600 text-lg mr-2 animate-swing"></i> Giliran Anda Tiba! Akses Dibuka.`;
        timerDisplay.className = "text-sm font-bold text-green-700 bg-green-50 inline-block px-6 py-3 rounded-xl border border-green-200 shadow-sm";
      }

      // 2. Munculkan Tombol WA
      if (waBtn) {
        waBtn.classList.remove("hidden");
        waBtn.classList.add("animate-bounce");
      }

      // 3. REVISI TOMBOL BATAL: Jangan disembunyikan!
      // Ubah teksnya jadi "Akhiri Sesi" agar user tetap bisa keluar
      if (finishBtn) {
        finishBtn.classList.remove("hidden");
        finishBtn.innerHTML = '<i class="fa-solid fa-arrow-right-from-bracket mr-1"></i> Akhiri Sesi';
      }
    }
  }, 1000);
}

// =============================
// 6. TERAPI NAPAS LOGIC (Auto-Start & Reset)
// =============================

// Fungsi Memulai Napas (Dipanggil Otomatis saat masuk)
function startBreathing() {
  const text = document.getElementById("breathe-text");
  const sub = document.getElementById("breathe-sub");
  const circle = document.getElementById("breathe-circle");
  
  if (!text || !circle) return;

  // Pastikan audio nyala
  breatheAudio.play().catch(e => console.log("Audio perlu interaksi user dulu"));

  // Definisi Loop Animasi (Tarik - Hembus)
  const breatheLoop = () => {
    // 1. Fase TARIK (0s - 4s)
    text.textContent = "Tarik...";
    sub.textContent = "Lewat Hidung";
    // Membesar
    circle.className = "absolute inset-0 bg-sage-500 rounded-full opacity-30 transform scale-150 transition-all duration-[4000ms] ease-in-out"; 
    
    // 2. Fase HEMBUS (4s - 8s)
    setTimeout(() => {
      text.textContent = "Hembus...";
      sub.textContent = "Lewat Mulut";
      // Mengecil
      circle.className = "absolute inset-0 bg-sage-500 rounded-full opacity-30 transform scale-100 transition-all duration-[4000ms] ease-in-out"; 
    }, 4000);
  };

  // Jalankan Loop Pertama Langsung
  breatheLoop();
  
  // Set Interval untuk pengulangan (8 detik total siklus)
  if (breathingInterval) clearInterval(breathingInterval);
  breathingInterval = setInterval(breatheLoop, 8000);
}

// Fungsi Reset (Dipanggil saat Batal/Keluar)
function resetBreathingUI() {
  const text = document.getElementById("breathe-text");
  const sub = document.getElementById("breathe-sub");
  const circle = document.getElementById("breathe-circle");

  // Matikan Interval
  if (breathingInterval) {
    clearInterval(breathingInterval);
    breathingInterval = null;
  }

  // Kembalikan Tampilan ke Awal
  if (text) text.textContent = "Mulai";
  if (sub) sub.textContent = "Sentuh Lingkaran";
  if (circle) {
      // Hapus class animasi, kembalikan ke statis
      circle.className = "breathe-transition absolute inset-0 bg-sage-500 rounded-full opacity-30 transform scale-100";
  }
}

// =============================
// 7. SMART TRIAGE & QUEUE
// =============================
function analyzeSymptoms() {
  const physicalEl = document.getElementById("physicalSymptom");
  const mentalEl = document.getElementById("mentalSymptom");
  const resultBox = document.getElementById("recommendationResult");

  if (!physicalEl || !mentalEl || !resultBox) return;
  const physical = physicalEl.value;
  const mental = mentalEl.value;

  if (!physical || !mental) {
    resultBox.classList.remove("hidden");
    resultBox.innerHTML = `
            <div class="p-3 rounded-xl border border-red-200 bg-red-50 text-xs text-red-800 flex items-center gap-2 animate-pulse">
                <i class="fa-solid fa-circle-exclamation"></i>
                <span>Mohon lengkapi data fisik dan mental.</span>
            </div>`;
    return;
  }

  // ==========================================
  // LOGIC ANALISIS BARU (SOULVAYA STYLE)
  // ==========================================

  // Default Values (Jika tidak masuk kategori khusus)
  let diagnosis = "General Anxiety (Kecemasan Umum)";
  let desc = "Tubuh merespons beban pikiran yang menumpuk dengan sinyal waspada terus-menerus.";
  let riskText = "Rendah";
  let riskClass = "bg-sage-100 text-sage-600 border-sage-200";
  let recommendation = "Manajemen Kecemasan";
  let doctorType = "Konselor Mental";

  // Skenario 1: Maag + Stres/Cemas (Sangat umum di korban trauma)
  if (physical === "maag" && (mental === "stres" || mental === "cemas")) {
    diagnosis = "Psychosomatic Gastritis";
    desc = "Stres emosional memicu asam lambung. Ini tanda alam bawah sadar Anda sedang 'mencerna' kenyataan pahit yang sulit diterima.";
    riskText = "Sedang";
    riskClass = "bg-yellow-100 text-yellow-700 border-yellow-200";
    recommendation = "Hipnoterapi Relaksasi";
    doctorType = "Hipnoterapis";
  }
  // Skenario 2: Gigi/Kepala + Stres (Tanda kemarahan terpendam)
  else if ((physical === "gigi" || physical === "headache") && mental === "stres") {
    diagnosis = "Suppressed Anger (Amarah Terpendam)";
    desc = "Otot rahang dan kepala menegang karena ada kata-kata atau emosi marah yang Anda tahan dan tidak tersalurkan.";
    riskText = "Menengah";
    riskClass = "bg-orange-100 text-orange-700 border-orange-200";
    recommendation = "Art Therapy Session";
    doctorType = "Psikolog Klinis";
  }
  // Skenario 3: Jantung + Cemas/Burnout (Panic Attack)
  else if (physical === "jantung" && (mental === "cemas" || mental === "burnout")) {
    diagnosis = "Panic Disorder Symptoms";
    desc = "Jantung berdebar kencang adalah respons trauma (Fight or Flight). Tubuh merasa sedang dalam bahaya besar meski situasi sebenarnya aman.";
    riskText = "Tinggi";
    riskClass = "bg-red-100 text-red-700 border-red-200";
    recommendation = "Trauma Healing Program";
    doctorType = "Psikiater & Psikolog";
  }

  // Render Hasil ke HTML
  // Render Hasil ke HTML (Versi Tanpa Judul "Analisis AI")
  resultBox.classList.remove("hidden");
  resultBox.innerHTML = `
        <div class="mt-4 border border-sage-200 rounded-2xl overflow-hidden shadow-sm bg-white animate-fade-in-up">
            
            <div class="bg-sage-50 p-3 border-b border-sage-100 flex justify-end items-center">
                <span class="text-[10px] px-2 py-0.5 rounded border font-bold ${riskClass}">
                    Urgensi: ${riskText}
                </span>
            </div>

            <div class="p-4 space-y-3">
                <div>
                    <p class="text-xs text-gray-400 mb-1">Indikasi Psikologis:</p>
                    <h4 class="text-sm font-bold text-sage-900 leading-tight">${diagnosis}</h4>
                    <p class="text-xs text-gray-600 mt-1 leading-relaxed border-l-2 border-sage-300 pl-2">
                        "${desc}"
                    </p>
                </div>
                <div class="h-px bg-sage-100 w-full"></div>
                <div class="flex justify-between items-end gap-2">
                    <div>
                        <p class="text-xs text-gray-400 mb-1">Rekomendasi Pemulihan:</p>
                        <p class="text-sm font-semibold text-nexus-teal">${recommendation}</p>
                        <p class="text-[10px] text-gray-500">${doctorType}</p>
                    </div>
                    
                    <button type="button" id="autoQueueBtn" class="bg-sage-600 hover:bg-sage-700 text-white text-[10px] px-3 py-2 rounded-lg transition shadow-lg shadow-sage-200 shrink-0">
                        Mulai Konseling Privat
                    </button>
                </div>
            </div>
            <div class="mt-3 pt-3 border-t border-sage-100">
                <p class="text-[10px] text-gray-400 italic text-center">
                    *Analisis ini adalah simulasi awal berdasarkan algoritma trauma.
                </p>
            </div>
        </div>
    `;

  // --- GANTI BAGIAN SETTIMEOUT LAMA DENGAN INI ---
  setTimeout(() => {
    const autoBtn = document.getElementById("autoQueueBtn");

    // Kita tidak butuh 'queueBtn' lagi karena tidak perlu scroll
    if (autoBtn) {
      autoBtn.addEventListener("click", () => {
        openQueueModal(); // <--- Langsung panggil fungsi Modal!
      });
    }
  }, 100);
}

// =============================
// INIT
// =============================
document.addEventListener("DOMContentLoaded", () => {
  renderDoctors();
  renderServices();
  setupTabSwitching();
  setupCostEstimator();
  checkSessionStatus(); // Cek status antrean saat load

  const queueBtn = document.getElementById("takeQueueBtn");
  const navbarQueueBtn = document.getElementById("navbarQueueBtn");

  // === BAGIAN YANG DIPERBAIKI ===
  // Mengganti 'handleTakeQueue' menjadi 'openQueueModal'

  if (queueBtn) {
    queueBtn.addEventListener("click", openQueueModal);
  }

  if (navbarQueueBtn) {
    navbarQueueBtn.addEventListener("click", openQueueModal);
  }
  // ==============================

  const analyzeBtn = document.getElementById("analyzeBtn");
  if (analyzeBtn) {
    analyzeBtn.addEventListener("click", analyzeSymptoms);
  }
});

// =============================
// REVISI: DATA ANATOMI (5 TITIK)
// =============================
// =============================
// REVISI: DATA ANATOMI (TRAUMA MAPPING)
// =============================
const anatomyData = {
  kepala: {
    title: "The Overthinking Mind",
    desc: "Sakit kepala tegang seringkali muncul dari pikiran yang tidak bisa berhenti (ruminasi). Mungkin Anda terus memutar ulang kejadian menyakitkan atau mencari jawaban yang tidak pernah ada.",
    tip: "Lakukan 'Brain Dumping' (tulis semua isi pikiran) sebelum tidur.",
    icon: '<i class="fa-solid fa-brain text-nexus-teal"></i>',
    color: "border-nexus-teal"
  },
  bahu: {
    title: "Beban Tanggung Jawab",
    desc: "Bahu yang berat dan kaku adalah tanda Anda merasa harus menanggung segalanya sendirian. Sering dialami oleh mereka yang mencoba 'kuat' demi orang lain di tengah badai masalah.",
    tip: "Izinkan diri Anda untuk rapuh. Minta bantuan bukan tanda kelemahan.",
    icon: '<i class="fa-solid fa-person-walking-luggage text-orange-500"></i>',
    color: "border-orange-400"
  },
  jantung: {
    title: "Emotional Heartbreak",
    desc: "Dada sesak atau nyeri bukan selalu masalah jantung. Dalam psikologi, ini adalah 'Broken Heart Syndrome'—manifestasi fisik dari duka mendalam, pengkhianatan, atau kehilangan.",
    tip: "Latihan napas 4-7-8 untuk menenangkan saraf vagus di area dada.",
    icon: '<i class="fa-solid fa-heart-crack text-red-500"></i>', // Icon hati retak
    color: "border-red-500"
  },
  paru: {
    title: "Napas yang Tertahan",
    desc: "Merasa sesak napas? Ini sering terjadi saat kita 'menahan' emosi atau takut untuk berbicara (speak up). Tubuh masuk mode waspada karena merasa tidak aman.",
    tip: "Bernyanyi atau berteriak di tempat aman untuk melepas sumbatan energi.",
    icon: '<i class="fa-solid fa-lungs text-blue-400"></i>',
    color: "border-blue-400"
  },
  lambung: {
    title: "Gut Feeling (Intuisi)",
    desc: "Mual atau GERD sering muncul saat kita mengabaikan insting. Mungkin firasat Anda sudah lama berkata 'ada yang salah', tapi logika mencoba menyangkalnya, membuat lambung bereaksi.",
    tip: "Percayai intuisi Anda. Makan makanan hangat dan mudah dicerna.",
    icon: '<i class="fa-solid fa-fire-burner text-yellow-500"></i>',
    color: "border-yellow-500"
  },
  leher: {
    title: "The Unspoken Truth",
    desc: "Rasa ganjal di tenggorokan (Globus Sensation) muncul saat Anda menelan kembali kata-kata yang ingin diucapkan. Ada kebenaran atau rasa sakit yang takut Anda suarakan.",
    tip: "Cobalah bersenandung (humming) atau menulis surat yang tidak perlu dikirim.",
    icon: '<i class="fa-solid fa-bullhorn text-purple-500"></i>',
    color: "border-purple-500"
  },
  lutut: {
    title: "Fear of Moving Forward",
    desc: "Lutut mewakili kebanggaan dan kemampuan kita untuk melangkah. Nyeri di sini sering muncul saat Anda takut menghadapi masa depan atau merasa 'tidak kuat' menopang perubahan hidup yang besar.",
    tip: "Fokus pada satu langkah kecil hari ini. Anda tidak harus langsung berlari.",
    icon: '<i class="fa-solid fa-person-walking text-sky-600"></i>', // Icon orang berjalan
    color: "border-sky-500"
  },
  tangan: {
    title: "Grasping Control",
    desc: "Tangan gemetar atau sering mengepal menandakan amarah yang ditahan atau keinginan kuat untuk mengendalikan situasi yang kacau. Tubuh bersiap untuk 'Fight'.",
    tip: "Remas stress ball atau lakukan progressive muscle relaxation pada telapak tangan.",
    icon: '<i class="fa-solid fa-hand-fist text-indigo-500"></i>',
    color: "border-indigo-500"
  }
};

function showAnatomyInfo(part) {
  const data = anatomyData[part];
  const box = document.getElementById("anatomyInfoBox");
  const defaultContent = document.getElementById("defaultAnatomyContent");
  const dynamicContent = document.getElementById("dynamicAnatomyContent");

  if (!data || !box) return;

  // Elements
  document.getElementById("anatomyTitle").textContent = data.title;
  document.getElementById("anatomyDesc").textContent = data.desc;
  document.getElementById("anatomyTip").textContent = data.tip;
  document.getElementById("anatomyIcon").innerHTML = data.icon;

  // Transition Logic
  defaultContent.classList.add("hidden");
  dynamicContent.classList.remove("hidden");

  // Reset Animation
  dynamicContent.classList.remove("animate-fade-in-up");
  void dynamicContent.offsetWidth; // Trigger Reflow
  dynamicContent.classList.add("animate-fade-in-up");

  // Dynamic Border Color
  box.className = `bg-white/90 p-8 rounded-3xl border-l-8 shadow-lg min-h-[300px] flex flex-col justify-center transition-all duration-300 ${data.color}`;
}

// ============================================
// 8. FITUR SLIDER (AUTO + MANUAL DRAG) & MODAL
// ============================================

const eduSlides = [
  {
    img: "assets/img/slide-1.jpg",
    title: "Teknik Grounding 5-4-3-2-1",
    category: "Mental Health",
    desc: "Saat cemas menyerang, gunakan panca indera untuk kembali ke saat ini. Cari 5 benda yang bisa dilihat, 4 diraba, 3 didengar, 2 dicium, dan 1 dirasakan. Teknik ini memutus siklus panik di otak secara instan.",
    tips: "Lakukan latihan ini kapan saja kamu merasa jantung berdebar tanpa sebab yang jelas."
  },
  {
    img: "assets/img/slide-2.jpg",
    title: "Sakit Kepala? Cek Minummu!",
    category: "Fisik",
    desc: "Kurang minum bukan hanya membuat haus, tapi menurunkan konsentrasi dan memicu sakit kepala tegang (Tension Headache). Otak kita terdiri dari 75% air, kehilangan sedikit saja cairan akan membuat emosi tidak stabil.",
    tips: "Minum segelas air putih hangat setiap bangun tidur untuk rehidrasi otak."
  },
  {
    img: "assets/img/slide-3.jpg",
    title: "Makanan Penjaga Mood",
    category: "Nutrisi",
    desc: "Apa yang kamu makan mempengaruhi perasaanmu (Gut-Brain Axis). Makanan tinggi gula bisa memberikan energi instan tapi menyebabkan 'sugar crash' yang bikin lemas. Sayuran hijau kaya magnesium yang menenangkan saraf.",
    tips: "Ganti camilan manis dengan buah potong, kacang almond, atau dark chocolate."
  },
  {
    img: "assets/img/slide-4.jpg",
    title: "Susah Tidur? Matikan Layar",
    category: "Lifestyle",
    desc: "Paparan cahaya biru (blue light) dari HP menekan hormon melatonin, membuatmu susah tidur nyenyak. Kualitas tidur yang buruk adalah pemicu utama stres kronis, burnout, dan kecemasan berlebih.",
    tips: "Terapkan 'No Screen Rule' 1 jam sebelum tidur. Ganti dengan membaca buku."
  },
  {
    img: "assets/img/slide-5.jpg",
    title: "Jurnal untuk Kesehatan Mental",
    category: "Emosi",
    desc: "Menuangkan isi kepala ke atas kertas (Journaling) terbukti ampuh mengurai benang kusut di pikiran. Menulis tentang perasaan dan pengalaman membantu memproses emosi serta mengurangi stres.",
    tips: "Luangkan 10 menit setiap malam untuk menulis tiga hal yang kamu syukuri hari ini."
  }
];

// --- [BAGIAN INI DITAMBAHKAN/BARU] ---
let currentSlideIndex = 0;
let slideInterval;
let isDown = false;      // Cek klik mouse
let startX;              // Posisi awal kursor
let scrollLeft;          // Posisi awal scroll
let isDragging = false;  // Cek sedang geser atau tidak

// --- [BAGIAN INI DIREVISI TOTAL] ---
function initEduSlider() {
  const sliderContainer = document.getElementById('eduSlider');
  const track = document.getElementById('eduSlidesTrack');
  const indicators = document.getElementById('slideIndicators');

  if (!sliderContainer || !track || !indicators) return;

  // Bersihkan & Render Ulang
  track.innerHTML = '';
  indicators.innerHTML = '';

  eduSlides.forEach((slide, index) => {
    // Gambar
    const imgDiv = document.createElement('div');
    imgDiv.className = "min-w-full h-full bg-cover bg-center snap-center shrink-0 pointer-events-none"; // pointer-events-none biar gambar gak ke-drag browser
    imgDiv.style.backgroundImage = `url('${slide.img}')`;
    track.appendChild(imgDiv);

    // Titik Indikator
    const dot = document.createElement('div');
    dot.className = `h-1.5 rounded-full transition-all duration-300 bg-white/50 w-2 opacity-60 cursor-pointer`;
    dot.onclick = (e) => {
      e.stopPropagation();
      scrollToSlide(index);
    };
    indicators.appendChild(dot);
  });

  // === LOGIKA DRAG MOUSE (LAPTOP) ===

  // 1. Mouse Ditekan
  sliderContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    isDragging = false;
    sliderContainer.classList.add('cursor-grabbing');
    sliderContainer.classList.remove('snap-x', 'scroll-smooth'); // Matikan snap biar gerakan mulus
    startX = e.pageX - sliderContainer.offsetLeft;
    scrollLeft = sliderContainer.scrollLeft;
    clearInterval(slideInterval); // Stop auto play
  });

  // 2. Mouse Keluar Area
  sliderContainer.addEventListener('mouseleave', () => {
    isDown = false;
    sliderContainer.classList.remove('cursor-grabbing');
    sliderContainer.classList.add('snap-x', 'scroll-smooth');
    startSlideInterval();
  });

  // 3. Mouse Dilepas (Selesai Klik)
  sliderContainer.addEventListener('mouseup', (e) => {
    isDown = false;
    sliderContainer.classList.remove('cursor-grabbing');
    sliderContainer.classList.add('snap-x', 'scroll-smooth');
    startSlideInterval();

    // KUNCI: Cek apakah user tadi menggeser?
    if (!isDragging) {
      openEduModal(); // Kalau TIDAK geser, berarti KLIK -> Buka Modal
    }
  });

  // 4. Mouse Bergerak
  sliderContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();

    const x = e.pageX - sliderContainer.offsetLeft;
    const walk = (x - startX) * 2; // Kecepatan geser

    // Kalau geser lebih dari 5px, anggap sebagai Dragging
    if (Math.abs(walk) > 5) {
      isDragging = true;
    }

    sliderContainer.scrollLeft = scrollLeft - walk;
  });

  // === LOGIKA SCROLL NORMAL ===
  sliderContainer.addEventListener('scroll', () => {
    const scrollPos = sliderContainer.scrollLeft;
    const slideWidth = sliderContainer.offsetWidth;
    const newIndex = Math.round(scrollPos / slideWidth);

    if (newIndex !== currentSlideIndex) {
      currentSlideIndex = newIndex;
      updateSlideInfo(currentSlideIndex);
    }
  });

  startSlideInterval();
  updateSlideInfo(0);
}

// --- [FUNGSI DI BAWAH INI TETAP/SAMA SEPERTI SEBELUMNYA] ---

function updateSlideInfo(index) {
  const safeIndex = index % eduSlides.length;
  const titleEl = document.getElementById('slideTitleDisplay');
  const catEl = document.getElementById('slideCategoryDisplay');
  const dots = document.getElementById('slideIndicators').children;

  if (titleEl) titleEl.textContent = eduSlides[safeIndex].title;
  if (catEl) catEl.textContent = eduSlides[safeIndex].category;

  Array.from(dots).forEach((dot, i) => {
    if (i === safeIndex) {
      dot.className = "h-1.5 rounded-full transition-all duration-300 bg-white w-6 opacity-100 shadow-md";
    } else {
      dot.className = "h-1.5 rounded-full transition-all duration-300 bg-white/50 w-2 opacity-60";
    }
  });
}

function scrollToSlide(index) {
  const sliderContainer = document.getElementById('eduSlider');
  if (sliderContainer) {
    sliderContainer.scrollTo({
      left: sliderContainer.offsetWidth * index,
      behavior: 'smooth'
    });
  }
  currentSlideIndex = index;
  updateSlideInfo(index);
}

function startSlideInterval() {
  if (slideInterval) clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    let nextIndex = (currentSlideIndex + 1);
    if (nextIndex >= eduSlides.length) nextIndex = 0;
    scrollToSlide(nextIndex);
  }, 5000);
}

function openEduModal() {
  const modal = document.getElementById('eduModal');
  const data = eduSlides[currentSlideIndex];

  if (!data) return;

  document.getElementById('modalImg').src = data.img;
  document.getElementById('modalCategory').textContent = data.category;
  document.getElementById('modalTitle').textContent = data.title;
  document.getElementById('modalDesc').textContent = data.desc;
  document.getElementById('modalTips').textContent = data.tips;

  modal.classList.remove('hidden');
  clearInterval(slideInterval);
}

window.closeEduModal = function () {
  const modal = document.getElementById('eduModal');
  modal.classList.add('hidden');
  startSlideInterval();
}

document.addEventListener('DOMContentLoaded', () => {
  initEduSlider();
});

// ==========================================
// 10. REVISI ANATOMI: GAMBAR & ANIMASI POP
// ==========================================

// Fungsi Wrapper: Menangani Klik Titik
function triggerAnatomyAnim(event, part, iconClass) {
  // 1. Tampilkan Info (Fungsi Lama)
  showAnatomyInfo(part);

  // 2. Jalankan Animasi Pop-out
  createFloatingIcon(event, iconClass);
}

// Fungsi Membuat Ikon Melayang
function createFloatingIcon(event, iconClass) {
  const container = document.getElementById('animContainer');
  if (!container) return;

  // Buat elemen Ikon
  const icon = document.createElement('i');
  // Gabungkan class FontAwesome dengan class animasi kita
  icon.className = `fa-solid ${iconClass} text-4xl absolute animate-float-up`;

  // Tentukan Warna berdasarkan icon (Opsional, biar cantik)
  if (iconClass.includes('heart')) icon.classList.add('text-red-500');
  else if (iconClass.includes('brain')) icon.classList.add('text-sage-600');
  else if (iconClass.includes('fire')) icon.classList.add('text-yellow-500');
  else icon.classList.add('text-nexus-teal');

  // Posisi Ikon (Mengikuti posisi klik mouse relative terhadap container)
  // Kita ambil posisi tombol yang diklik, bukan posisi mouse, agar akurat di tengah tombol
  const rect = event.currentTarget.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  // Hitung posisi relatif di dalam container gambar
  const left = rect.left - containerRect.left + (rect.width / 2);
  const top = rect.top - containerRect.top;

  icon.style.left = `${left}px`;
  icon.style.top = `${top}px`;

  // Masukkan ke DOM
  container.appendChild(icon);

  // Hapus elemen setelah animasi selesai (1 detik)
  setTimeout(() => {
    icon.remove();
  }, 1000);
}