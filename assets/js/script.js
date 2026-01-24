// =============================
// 1. DATA TIM AHLI (UPDATED & LOKAL)
// =============================
const doctors = [
  {
    id: 1,
    name: "Karina Anindya, M.Psi, Psikolog",
    role: "Spesialis Trauma & Trust Issue",
    description: "Berpengalaman menangani trauma mendalam dan membangun kembali kepercayaan diri pasca-konflik.",
    contact: {
      email: "karina@soulvaja.id", 
      phone: "0812-0000-0001",    
      location: "Jakarta"
    },
    // FOTO LOKAL (Pastikan file ada di folder assets/img/)
    photo: "assets/img/dokter_1.avif",
  },
  {
    id: 2,
    name: "Budi Santoso, S.Psi, C.Ht",
    role: "Hipnoterapi & Relaksasi",
    description: "Praktisi hipnoterapi klinis untuk manajemen stres, fobia, dan relaksasi pikiran bawah sadar.",
    contact: {
      email: "budi@soulvaja.id",   
      phone: "0812-0000-0002",    
      location: "Jakarta"
    },
    photo: "assets/img/dokter_2.avif",
  },
  {
    id: 3,
    name: "Sarah Wijaya, M.Psi",
    role: "Konselor Pernikahan & Keluarga",
    description: "Membantu pasangan dan keluarga menemukan solusi komunikasi dan keharmonisan rumah tangga.",
    contact: {
      email: "sarah@soulvaja.id",  
      phone: "0812-0000-0003",    
      location: "Jakarta"
    },
    photo: "assets/img/dokter_3.avif",
  },
  {
    id: 4,
    name: "Dr. Rian Pratama, Sp.KJ",
    role: "Psikiater (Manajemen Kecemasan)",
    description: "Pendekatan medis dan terapi untuk menangani gangguan kecemasan klinis dan kesehatan mental.",
    contact: {
      email: "rian@soulvaja.id",   
      phone: "0812-0000-0004",    
      location: "Jakarta"
    },
    photo: "assets/img/dokter_4.avif",
  },
];
// =============================
// 2. DATA LAYANAN
// =============================
const services = [
  {
    id: "burnout",
    name: "Integrasi Umum & Burnout",
    category: "Fisik & Mental",
    price: 120000,
    icon: "fa-solid fa-battery-quarter",
    benefits: [
      "Konsultasi Dokter Umum (30 Menit)",
      "Screening Tingkat Stres Digital",
      "Obat: Vitamin B-Complex & Penenang Herbal",
      "Akses Ruang Hening 1 Jam",
    ],
  },
  {
    id: "gerd",
    name: "Lambung & Kecemasan (GERD)",
    category: "Internal Medicine",
    price: 300000,
    icon: "fa-solid fa-fire-burner",
    benefits: [
      "Pemeriksaan Fisik Lambung",
      "Sesi Hypnotherapy Singkat (Relaxation)",
      "Obat: PPI (Lambung) & Anti-Cemas Dosis Rendah",
      "Panduan Diet Anti-Inflamasi",
    ],
  },
  {
    id: "dental",
    name: "Dental Stress Relief",
    category: "Gigi & Mulut",
    price: 250000,
    icon: "fa-solid fa-tooth",
    benefits: [
      "Pijat Relaksasi Otot Rahang (TMJ)",
      "Cek Kondisi Gigi Gemeretak (Bruxism)",
      "Therapy Music saat tindakan",
      "Resep Muscle Relaxant (Jika perlu)",
    ],
  },
  {
    id: "migrain",
    name: "Terapi Migrain & Leher",
    category: "Fisioterapi",
    price: 200000,
    icon: "fa-solid fa-brain",
    benefits: [
      "Fisioterapi Leher & Pundak (Ultrasound)",
      "Akupresur Titik Fokus Sakit Kepala",
      "Krim Analgesik Khusus",
      "Edukasi Postur Kerja Ergonomis",
    ],
  },
  {
    id: "mind",
    name: "Mind & Breath Therapy",
    category: "Mental Wellness",
    price: 150000,
    icon: "fa-solid fa-wind",
    benefits: [
      "Dipandu Praktisi Mindfulness Bersertifikat",
      "Ruang Aromaterapi Lavender",
      "Teh Herbal Penenang (Chamomile)",
      "Rekaman Audio untuk Latihan di Rumah",
    ],
  },
  {
    id: "mcu",
    name: "Holistic Check-Up Lengkap",
    category: "Paket Lengkap",
    price: 650000,
    icon: "fa-solid fa-heart-pulse",
    benefits: [
      "Cek Darah Lengkap & Tensi",
      "Konsultasi Psikolog Klinis (60 Menit)",
      "Laporan Kesehatan Fisik & Mental",
      "Voucher Terapi Lanjutan 20%",
    ],
  },
  {
    id: "sleep",
    name: "Sleep Recovery Program",
    category: "Konsultasi",
    price: 280000,
    icon: "fa-solid fa-moon",
    benefits: [
      "Analisa Pola Tidur (Sleep Hygiene)",
      "Terapi Cahaya (Light Therapy)",
      "Suplemen Melatonin Alami",
      "Jurnal Tidur Digital",
    ],
  },
  {
    id: "nutrisi",
    name: "Nutrisi Mood & Energi",
    category: "Gizi Klinik",
    price: 175000,
    icon: "fa-solid fa-apple-whole",
    benefits: [
      "Analisa Komposisi Tubuh",
      "Meal Plan Pengatur Emosi (Mood Food)",
      "Suplemen Gut-Health (Probiotik)",
      "Resep Smoothie Anti-Stres",
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

    // Layout kartu kita perbarui agar muat deskripsi
    card.className =
      "flex flex-col sm:flex-row items-start gap-4 p-5 rounded-2xl bg-white/80 border border-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group";

    card.innerHTML = `
            <div class="relative shrink-0">
                <div class="h-20 w-20 rounded-2xl overflow-hidden bg-sage-100 ring-2 ring-white shadow-md">
                    <img src="${doc.photo}" class="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" alt="${doc.name}" />
                </div>
                <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full" title="Available"></div>
            </div>
            
            <div class="flex-1 min-w-0">
                <h4 class="font-bold text-sage-900 text-lg leading-tight group-hover:text-sage-700 transition-colors">
                    ${doc.name}
                </h4>
                
                <p class="text-[10px] font-bold text-nexus-teal uppercase tracking-wider mb-2 mt-1">
                    ${doc.role}
                </p>
                
                <p class="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-2">
                    ${doc.description}
                </p>
                
                <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-sage-50 border border-sage-100 text-[10px] text-sage-500 font-medium">
                    <i class="fa-solid fa-location-dot text-sage-400"></i> ${doc.contact.location}
                </div>
            </div>`;
            
    list.appendChild(card);
  });
};

const renderServices = () => {
  const container = document.getElementById("servicesContainer");
  if (!container) return;
  container.innerHTML = "";
  services.forEach((s) => {
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
    card.dataset.id = s.id;
    card.dataset.price = s.price;
    card.dataset.name = s.name;
    card.className =
      "service-card flex flex-col p-5 rounded-2xl border border-sage-100 bg-white hover:border-sage-300 hover:shadow-lg transition-all duration-200 cursor-pointer group h-full relative overflow-hidden select-none";
    card.onclick = () => {
      card.classList.toggle("selected-service");
      card.classList.toggle("ring-4");
      card.classList.toggle("ring-sage-500");
      card.classList.toggle("bg-sage-50");
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
                <p class="text-lg font-bold text-sage-700">${formatRupiah(s.price)}</p>
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

// =============================
// 4. SPA SYSTEM
// =============================
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
    container: document.getElementById("servicesContainer"),
    qty: document.getElementById("quantityInput"),
    payment: document.getElementById("paymentType"),
    check: document.getElementById("followUpCheck"),
    btn: document.getElementById("calculateBtn"),
    total: document.getElementById("estimateTotal"),
    detail: document.getElementById("estimateDetail"),
  };
  if (!els.btn || !els.container) return;
  const calculate = () => {
    const selectedCards = document.querySelectorAll(".service-card.selected-service");
    if (selectedCards.length === 0) {
      els.total.textContent = "Rp0";
      els.detail.textContent = "Silakan pilih minimal satu layanan.";
      return;
    }
    let totalBasePrice = 0;
    let selectedNames = [];
    selectedCards.forEach((card) => {
      totalBasePrice += parseInt(card.dataset.price);
      selectedNames.push(card.dataset.name);
    });
    const qty = parseInt(els.qty.value) || 1;
    let subtotal = totalBasePrice * qty;
    let note = "";
    if (els.payment.value === "bpjs") {
      subtotal *= 0.15;
      note = "Cover BPJS (Bayar Admin 15%)";
    } else if (els.payment.value === "asuransi") {
      subtotal *= 0.5;
      note = "Cover Asuransi 50%";
    } else {
      note = "Pembayaran Tunai/QRIS";
    }
    if (els.check.checked) {
      const controlCost = 50000 * selectedCards.length * qty;
      subtotal += controlCost;
      note += " + Kontrol Lanjutan";
    }
    els.total.textContent = formatRupiah(subtotal);
    const namesStr = selectedNames.length > 2 ? `${selectedNames.length} Layanan Terpilih` : selectedNames.join(" + ");
    els.detail.textContent = `${namesStr} (${qty} Pax). ${note}`;
  };
  els.btn.addEventListener("click", calculate);
  [els.qty, els.payment, els.check].forEach((e) => e.addEventListener("change", calculate));
  els.container.addEventListener("serviceChanged", calculate);
};

// =============================
// SISTEM ANTREAN DENGAN LOCKING & MODAL
// =============================
const SESSION_DURATION = 3 * 60 * 1000;
function openQueueModal() {
    const status = localStorage.getItem("sessionStatus");
    if (status === "sedang_terapi") {
        alert("Anda masih memiliki sesi antrean yang aktif! Selesaikan terapi dahulu.");
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
function generateQueueNumber(type) {
    const storageKey = type === 'fisik' ? 'queueCounterF' : 'queueCounterM';
    const prefix = type === 'fisik' ? 'F-' : 'M-';
    let lastNumber = localStorage.getItem(storageKey);
    let currentNumber = lastNumber ? parseInt(lastNumber) : 0;
    currentNumber += 1;
    localStorage.setItem(storageKey, currentNumber);
    return prefix + String(currentNumber).padStart(3, '0');
}
function processQueue(type) {
    const queueNumber = generateQueueNumber(type);
    localStorage.setItem("myQueueType", type);
    startSession(queueNumber);
    updateQueueUI(queueNumber, type);
    closeQueueModal();
    if (window.showSection) window.showSection("terapi");
    startTherapyTimer();
    startBreathing();
    const terapiTitle = document.getElementById("terapiTitle");
    if (terapiTitle) {
         terapiTitle.textContent = `Sesi Terapi ${queueNumber} - Rileks dan Ikuti Instruksi.`;
    }
}
function startSession(queueNumber) {
  const now = Date.now();
  localStorage.setItem("sessionStatus", "sedang_terapi");
  localStorage.setItem("sessionStartTime", now);
  localStorage.setItem("currentQueue", queueNumber);
}
function updateQueueUI(queueNumber, type) {
    const num = document.getElementById("queueNumberCard");
    const statusCard = document.getElementById("queueStatusCard");
    const navbarBtn = document.getElementById("navbarQueueBtn");
    const queueBtn = document.getElementById("takeQueueBtn");
    let typeText = "Menunggu";
    let statusClass = "text-xs font-medium bg-gray-100 text-gray-600 inline-block px-3 py-1 rounded-full";
    if (type === 'fisik') {
        typeText = "Poli Umum (Fisik)";
        statusClass = "text-xs font-medium text-teal-700 bg-teal-100 inline-block px-3 py-1 rounded-full border border-teal-200";
    } else if (type === 'mental') {
        typeText = "Konseling (Mental)";
        statusClass = "text-xs font-medium text-purple-700 bg-purple-100 inline-block px-3 py-1 rounded-full border border-purple-200";
    }
    if (num) {
        num.textContent = queueNumber;
        num.classList.add("queue-pulse");
        setTimeout(() => num.classList.remove("queue-pulse"), 600);
    }
    if (statusCard) {
        statusCard.textContent = typeText;
        statusCard.className = statusClass;
    }
    if (navbarBtn) {
        navbarBtn.textContent = `Antrean: ${queueNumber}`;
        navbarBtn.disabled = true;
        navbarBtn.classList.add("opacity-50", "cursor-not-allowed");
    }
    if (queueBtn) {
        queueBtn.textContent = "Sesi Terapi Sedang Berlangsung";
        queueBtn.disabled = true;
        queueBtn.classList.add("opacity-50", "cursor-not-allowed", "bg-gray-400");
    }
}
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
      updateQueueUI(queueNumber, queueType);
      const remainingSeconds = Math.ceil(remainingMs / 1000);
      startTherapyTimer(remainingSeconds);
      const terapiTitle = document.getElementById("terapiTitle");
      if (terapiTitle) {
        terapiTitle.textContent = `Sesi Terapi ${queueNumber} - Lanjutkan Rileksasi Anda.`;
      }
    } else {
      finishSession();
    }
  }
}
function finishSession() {
  localStorage.removeItem("sessionStatus");
  localStorage.removeItem("sessionStartTime");
  localStorage.removeItem("currentQueue");
  localStorage.removeItem("myQueueType");
  enableQueueButtons();
  const num = document.getElementById("queueNumberCard");
  const statusCard = document.getElementById("queueStatusCard");
  const terapiTitle = document.getElementById("terapiTitle");
  if (num) num.textContent = "--";
  if (statusCard) {
      statusCard.textContent = "Menunggu Check-in";
      statusCard.className = "text-xs font-medium text-sage-600 bg-sage-100 inline-block px-3 py-1 rounded-full";
  }
  if (terapiTitle) {
    terapiTitle.textContent = "Ruang Tenang Digital";
  }
  const timerDisplay = document.getElementById("timerDisplay");
  const finishBtn = document.getElementById("finishSessionBtn");
  if (timerDisplay) timerDisplay.classList.add("hidden");
  if (finishBtn) finishBtn.classList.add("hidden");
}
function enableQueueButtons() {
    const navbarBtn = document.getElementById("navbarQueueBtn");
    const queueBtn = document.getElementById("takeQueueBtn");
    if (navbarBtn) {
        navbarBtn.disabled = false;
        navbarBtn.textContent = "Ambil Antrean";
        navbarBtn.classList.remove("opacity-50", "cursor-not-allowed");
    }
    if (queueBtn) {
        queueBtn.disabled = false;
        queueBtn.textContent = "Ambil Antrean Sekarang";
        queueBtn.classList.remove("opacity-50", "cursor-not-allowed", "bg-gray-400");
    }
}
let therapyInterval;
function startTherapyTimer(remainingSeconds) {
  const timerDisplay = document.getElementById("timerDisplay");
  const timerText = document.getElementById("timerText");
  const finishBtn = document.getElementById("finishSessionBtn");
  if (timerDisplay) timerDisplay.classList.remove("hidden");
  if (finishBtn) finishBtn.classList.add("hidden");
  let remaining = remainingSeconds || SESSION_DURATION / 1000;
  if (therapyInterval) clearInterval(therapyInterval);
  const updateDisplay = () => {
    const minutes = Math.floor(remaining / 60);
    const seconds = Math.floor(remaining % 60);
    if (timerText) {
      timerText.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }
  };
  updateDisplay();
  therapyInterval = setInterval(() => {
    remaining--;
    updateDisplay();
    if (remaining <= 0) {
      clearInterval(therapyInterval);
      if (timerDisplay) timerDisplay.classList.add("hidden");
      if (finishBtn) {
        finishBtn.classList.remove("hidden");
        finishBtn.replaceWith(finishBtn.cloneNode(true));
        document.getElementById("finishSessionBtn").addEventListener("click", finishSession);
      }
    }
  }, 1000);
}

// =============================
// 6. TERAPI NAPAS LOGIC
// =============================
let isBreathing = false;
let breatheInterval;
const breatheAudio = new Audio("assets/audio/nafas-manual.mp3");
breatheAudio.volume = 0.3;
function startBreathing() {
  const circle = document.getElementById("breathe-circle");
  const text = document.getElementById("breathe-text");
  const sub = document.getElementById("breathe-sub");
  if (isBreathing) {
    clearInterval(breatheInterval);
    isBreathing = false;
    text.innerText = "Mulai";
    sub.innerText = "Sentuh Lingkaran";
    circle.style.transform = "scale(1)";
    circle.style.opacity = "0.2";
    text.classList.remove("text-white");
    text.classList.add("text-sage-800");
    breatheAudio.pause();
    breatheAudio.currentTime = 0;
    return;
  }
  isBreathing = true;
  text.innerText = "Tarik...";
  sub.innerText = "Lewat Hidung";
  circle.style.transform = "scale(1.5)";
  circle.style.opacity = "0.6";
  breatheAudio.play();
  let phase = "inhale";
  breatheInterval = setInterval(() => {
    breatheAudio.pause();
    breatheAudio.currentTime = 0;
    breatheAudio.play();
    if (phase === "inhale") {
      text.innerText = "Hembus...";
      sub.innerText = "Lewat Mulut";
      circle.style.transform = "scale(1)";
      phase = "exhale";
    } else {
      text.innerText = "Tarik...";
      sub.innerText = "Lewat Hidung";
      circle.style.transform = "scale(1.5)";
      phase = "inhale";
    }
  }, 4000);
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
  let diagnosis = "Gangguan Psikosomatis Umum";
  let desc = "Terdeteksi ketidakseimbangan antara respons tubuh terhadap beban pikiran.";
  let riskText = "Rendah";
  let riskClass = "bg-sage-100 text-sage-600 border-sage-200";
  let recommendation = "Konsultasi Screening Umum";
  let doctorType = "Dokter Umum";
  if (physical === "maag" && (mental === "stres" || mental === "cemas")) {
    diagnosis = "Gastritis Psikosomatis";
    desc = "Stres memicu saraf vagus meningkatkan asam lambung secara drastis.";
    riskText = "Sedang";
    riskClass = "bg-yellow-100 text-yellow-700 border-yellow-200";
    recommendation = "Paket Gastric-Calm";
    doctorType = "Internis + Hypnotherapy";
  } else if ((physical === "gigi" || physical === "headache") && mental === "stres") {
    diagnosis = "Tension & Bruxism";
    desc = "Otot rahang dan leher menegang akibat penekanan emosi bawah sadar.";
    riskText = "Menengah";
    riskClass = "bg-orange-100 text-orange-700 border-orange-200";
    recommendation = "Terapi Dental-Relief";
    doctorType = "Dokter Gigi (TMJ)";
  } else if (physical === "jantung" && (mental === "cemas" || mental === "burnout")) {
    diagnosis = "Cardiac Anxiety";
    desc = "Respons 'fight or flight' memacu jantung berlebih. Butuh penanganan segera.";
    riskText = "Tinggi";
    riskClass = "bg-red-100 text-red-700 border-red-200";
    recommendation = "Pemeriksaan Jantung & Pikiran";
    doctorType = "Kardiolog + Psikiater";
  }
  resultBox.classList.remove("hidden");
  resultBox.innerHTML = `
        <div class="mt-4 border border-sage-200 rounded-2xl overflow-hidden shadow-sm bg-white animate-fade-in-up">
            <div class="bg-sage-50 p-3 border-b border-sage-100 flex justify-between items-center">
                <p class="text-[10px] font-bold text-sage-600 uppercase tracking-widest">
                    <i class="fa-solid fa-microchip mr-1"></i> Analisis AI
                </p>
                <span class="text-[10px] px-2 py-0.5 rounded border font-bold ${riskClass}">
                    Urgensi: ${riskText}
                </span>
            </div>
            <div class="p-4 space-y-3">
                <div>
                    <p class="text-xs text-gray-400 mb-1">Indikasi Diagnosis:</p>
                    <h4 class="text-sm font-bold text-sage-900 leading-tight">${diagnosis}</h4>
                    <p class="text-xs text-gray-600 mt-1 leading-relaxed border-l-2 border-sage-300 pl-2">
                        "${desc}"
                    </p>
                </div>
                <div class="h-px bg-sage-100 w-full"></div>
                <div class="flex justify-between items-end gap-2">
                    <div>
                        <p class="text-xs text-gray-400 mb-1">Saran Tindakan:</p>
                        <p class="text-sm font-semibold text-nexus-teal">${recommendation}</p>
                        <p class="text-[10px] text-gray-500">${doctorType}</p>
                    </div>
                    <button type="button" id="autoQueueBtn" class="bg-sage-600 hover:bg-sage-700 text-white text-[10px] px-3 py-2 rounded-lg transition shadow-lg shadow-sage-200 shrink-0">
                        Ambil Antrean
                    </button>
                </div>
            </div>
            <div class="mt-3 pt-3 border-t border-sage-100">
                <p class="text-[10px] text-gray-400 italic text-center">
                    *Analisis ini adalah simulasi berdasarkan algoritma logika, bukan pengganti diagnosis medis profesional. Segera hubungi dokter jika gejala berlanjut.
                </p>
            </div>
        </div>
    `;
  setTimeout(() => {
    const autoBtn = document.getElementById("autoQueueBtn");
    const queueBtn = document.getElementById("takeQueueBtn");
    if (autoBtn && queueBtn) {
      autoBtn.addEventListener("click", () => {
        queueBtn.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => {
          queueBtn.click();
          queueBtn.classList.add("ring-2", "ring-sage-500");
          setTimeout(() => queueBtn.classList.remove("ring-2", "ring-sage-500"), 1000);
        }, 600);
      });
    }
  }, 100);
}

// =============================
// 8. FITUR SLIDER & REVISI ANATOMI
// =============================

// === SLIDER DATA ===
const eduSlides = [
    {
        img: "assets/img/slide-1.jpg", 
        title: "Patah Hati = Patah Tulang?",
        category: "Neuroscience",
        myth: "Ah, itu cuma perasaanmu saja. Jangan lebay.",
        fact: "Scan fMRI membuktikan otak tidak bisa membedakan sakit hati (penolakan sosial) dan patah tulang. Keduanya mengaktifkan bagian otak yang sama.",
        tips: "Minum air hangat bisa sedikit meredakan sensasi nyeri fisik ini karena menenangkan saraf vagus."
    },
    {
        img: "assets/img/slide-2.jpg",
        title: "Siapa Lebih Sering Selingkuh?",
        category: "Statistik Psikologi",
        myth: "Pria pasti selingkuh karena nafsu, wanita karena perasaan.",
        fact: "Riset terbaru menunjukkan celah gender makin menipis. Alasan utama kini adalah Micro-Cheating (selingkuh emosional) untuk validasi instan.",
        tips: "Cek 'Screen Time' pasangan bukan untuk memata-matai, tapi untuk evaluasi kualitas waktu bersama."
    },
    {
        img: "assets/img/slide-3.jpg",
        title: "Sekali Selingkuh, Tetap Selingkuh?",
        category: "Perilaku Manusia",
        myth: "Pelaku selingkuh tidak akan pernah berubah (Once a cheater, always a cheater).",
        fact: "Tidak selalu! Pelaku yang melakukan 'Pengakuan Radikal' (jujur tanpa ditanya) memiliki peluang sukses 70% untuk pulih.",
        tips: "Lihat usahanya: Apakah dia transparan sukarela atau hanya saat didesak?"
    },
    {
        img: "assets/img/slide-4.jpg",
        title: "Kamu Tidak Gila, Kamu Dimanipulasi",
        category: "Manipulasi",
        myth: "Aku pelupa banget ya? Kok aku selalu salah ingat kejadian?",
        fact: "Jika pasangan sering berkata 'Itu nggak pernah terjadi', itu teknik Gaslighting. Tujuannya membuatmu meragukan kewarasanmu sendiri.",
        tips: "Mulai catat kejadian penting di jurnal/notes HP sebagai bukti realitasmu."
    },
    {
        img: "assets/img/slide-5.jpg",
        title: "Waktu Menyembuhkan Luka?",
        category: "Healing",
        myth: "Time heals all wounds (Waktu menyembuhkan segalanya).",
        fact: "Salah. Waktu hanya memudarkan ingatan. Trauma yang didiamkan akan menjadi 'Luka Bernanah' di alam bawah sadar.",
        tips: "Jangan cuma menunggu. Lakukan aksi aktif seperti konseling atau journaling."
    }
];

// === ANATOMI DATA ===
const anatomyData = {
    kepala: {
        title: "Tension-Type Headache",
        desc: "Sakit kepala yang terasa seperti 'diikat'. Secara psikosomatis, ini manifestasi dari overthinking dan emosi yang ditahan (suppressed anger) yang menegangkan otot leher.",
        tip: "Lakukan teknik 'Progressive Muscle Relaxation' pada area wajah & leher.",
        icon: '<i class="fa-solid fa-brain text-nexus-teal"></i>',
        color: "border-teal-400"
    },
    bahu: {
        title: "Atlas Syndrome",
        desc: "Sensasi beban berat di pundak. Sering dialami oleh 'tulang punggung keluarga' atau perfeksionis yang merasa bertanggung jawab atas segalanya sendirian.",
        tip: "Delegasikan tugas & stretching trapezius tiap 2 jam.",
        icon: '<i class="fa-solid fa-person-walking-luggage text-orange-500"></i>',
        color: "border-orange-400"
    },
    jantung: {
        title: "Cardiac Neurosis",
        desc: "Jantung berdebar (Palpitasi) tanpa kelainan organ. Ini adalah sinyal 'Fight or Flight' palsu akibat kecemasan bawah sadar yang kronis.",
        tip: "Terapi 'Grounding 5-4-3-2-1' saat serangan panik muncul.",
        icon: '<i class="fa-solid fa-heart-pulse text-red-500"></i>',
        color: "border-red-500"
    },
    paru: {
        title: "Psychogenic Dyspnea",
        desc: "Merasa sesak atau 'lapar udara' padahal saturasi oksigen normal. Tubuh sedang hiperventilasi karena otak mendeteksi ancaman emosional.",
        tip: "Bernapas dalam kantong kertas atau teknik 'Box Breathing'.",
        icon: '<i class="fa-solid fa-lungs text-blue-400"></i>',
        color: "border-blue-400"
    },
    lambung: {
        title: "Emotional Indigestion",
        desc: "Lambung bereaksi terhadap apa yang 'masuk'. Maag/GERD seringkali adalah tanda resistensi (penolakan) terhadap situasi baru atau rasa jengkel yang tidak bisa Anda 'telan'.",
        tip: "Makan perlahan (mindful eating) & hindari topik berat saat makan.",
        icon: '<i class="fa-solid fa-fire-burner text-yellow-500"></i>',
        color: "border-yellow-500"
    },
    tenggorokan: {
        title: "Globus Pharyngis", 
        desc: "Sensasi ada ganjalan di leher atau susah menelan. Seringkali ini tanda ada ucapan atau emosi yang ingin disampaikan tapi tertahan (repressed expression).",
        tip: "Latihan bernyanyi (humming) atau menulis jurnal untuk melepas emosi.",
        icon: '<i class="fa-solid fa-head-side-cough text-purple-500"></i>',
        color: "border-purple-400"
    },
    usus: {
        title: "Deep Anxiety Center",
        desc: "Pusat 'Gut Feeling'. Jika lambung soal menerima, usus soal melepaskan. Masalah usus (IBS/Sembelit) sering mencerminkan ketakutan kehilangan kontrol atau sulit memaafkan masa lalu.",
        tip: "Lakukan pijatan perut memutar searah jarum jam & perbanyak serat.",
        icon: '<i class="fa-solid fa-bacteria text-stone-500"></i>',
        color: "border-stone-500"
    },
    lutut: {
        title: "Psychosomatic Knee Pain", 
        desc: "Lutut mewakili kemampuan kita untuk membungkuk dan bergerak. Sakit lutut tanpa cedera bisa menandakan ketakutan akan masa depan atau ego yang terlalu kaku.",
        tip: "Lakukan peregangan kaki ringan dan afirmasi positif: 'Saya aman untuk melangkah maju'.",
        icon: '<i class="fa-solid fa-person-walking-arrow-right text-blue-600"></i>',
        color: "border-blue-600"
    }
};

// === GLOBAL VARIABLES ===
let currentSlideIndex = 0;
let slideInterval;
let isDown = false;      
let startX;              
let scrollLeft;          
let isDragging = false;  

// === SLIDER INIT FUNCTION ===
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
        imgDiv.className = "min-w-full h-full bg-cover bg-center snap-center shrink-0 pointer-events-none"; 
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

    // Event Listeners Slider
    sliderContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        isDragging = false;
        sliderContainer.classList.add('cursor-grabbing');
        sliderContainer.classList.remove('snap-x', 'scroll-smooth'); 
        startX = e.pageX - sliderContainer.offsetLeft;
        scrollLeft = sliderContainer.scrollLeft;
        clearInterval(slideInterval); 
    });

    sliderContainer.addEventListener('mouseleave', () => {
        isDown = false;
        sliderContainer.classList.remove('cursor-grabbing');
        sliderContainer.classList.add('snap-x', 'scroll-smooth');
        startSlideInterval();
    });

    sliderContainer.addEventListener('mouseup', (e) => {
        isDown = false;
        sliderContainer.classList.remove('cursor-grabbing');
        sliderContainer.classList.add('snap-x', 'scroll-smooth');
        startSlideInterval();
        if (!isDragging) {
            openEduModal(); 
        }
    });

    sliderContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - sliderContainer.offsetLeft;
        const walk = (x - startX) * 2; 
        if (Math.abs(walk) > 5) {
            isDragging = true;
        }
        sliderContainer.scrollLeft = scrollLeft - walk;
    });

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

// === SLIDER HELPER FUNCTIONS ===
function updateSlideInfo(index) {
    const safeIndex = index % eduSlides.length;
    const titleEl = document.getElementById('slideTitleDisplay');
    const catEl = document.getElementById('slideCategoryDisplay');
    const dots = document.getElementById('slideIndicators').children;
    
    if(titleEl) titleEl.textContent = eduSlides[safeIndex].title;
    if(catEl) catEl.textContent = eduSlides[safeIndex].category;

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
    if(sliderContainer) {
        sliderContainer.scrollTo({
            left: sliderContainer.offsetWidth * index,
            behavior: 'smooth'
        });
    }
    currentSlideIndex = index;
    updateSlideInfo(index);
}

function startSlideInterval() {
    if(slideInterval) clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        let nextIndex = (currentSlideIndex + 1);
        if (nextIndex >= eduSlides.length) nextIndex = 0;
        scrollToSlide(nextIndex);
    }, 5000);
}

function openEduModal() {
    const modal = document.getElementById('eduModal');
    const data = eduSlides[currentSlideIndex];
    if(!data) return;
    document.getElementById('modalImg').src = data.img;
    document.getElementById('modalCategory').textContent = data.category;
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalMyth').textContent = `"${data.myth}"`;
    document.getElementById('modalFact').textContent = data.fact;
    document.getElementById('modalTips').textContent = data.tips;
    modal.classList.remove('hidden');
    clearInterval(slideInterval);
}

window.closeEduModal = function() {
    const modal = document.getElementById('eduModal');
    modal.classList.add('hidden');
    startSlideInterval();
}

// === ANATOMI HELPER FUNCTIONS ===
function showAnatomyInfo(part) {
    const data = anatomyData[part];
    const box = document.getElementById("anatomyInfoBox");
    const defaultContent = document.getElementById("defaultAnatomyContent");
    const dynamicContent = document.getElementById("dynamicAnatomyContent");

    if (!data || !box) return;

    document.getElementById("anatomyTitle").textContent = data.title;
    document.getElementById("anatomyDesc").textContent = data.desc;
    document.getElementById("anatomyTip").textContent = data.tip;
    document.getElementById("anatomyIcon").innerHTML = data.icon;

    defaultContent.classList.add("hidden");
    dynamicContent.classList.remove("hidden");
    dynamicContent.classList.remove("animate-fade-in-up");
    void dynamicContent.offsetWidth; 
    dynamicContent.classList.add("animate-fade-in-up");

    box.className = `bg-white/90 p-8 rounded-3xl border-l-8 shadow-lg min-h-[300px] flex flex-col justify-center transition-all duration-300 ${data.color}`;
}

window.triggerAnatomyAnim = function(event, part, iconClass) {
    showAnatomyInfo(part);
    createFloatingIcon(event, iconClass);
}

function createFloatingIcon(event, iconClass) {
    const container = document.getElementById('animContainer');
    if (!container) return;
    const icon = document.createElement('i');
    icon.className = `fa-solid ${iconClass} text-4xl absolute animate-float-up`;
    if (iconClass.includes('heart')) icon.classList.add('text-red-500');
    else if (iconClass.includes('brain')) icon.classList.add('text-sage-600');
    else if (iconClass.includes('fire')) icon.classList.add('text-yellow-500');
    else icon.classList.add('text-nexus-teal');
    const rect = event.currentTarget.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const left = rect.left - containerRect.left + (rect.width / 2);
    const top = rect.top - containerRect.top;
    icon.style.left = `${left}px`;
    icon.style.top = `${top}px`;
    container.appendChild(icon);
    setTimeout(() => {
        icon.remove();
    }, 1000);
}

// =============================
// INIT (SINGLE ENTRY POINT)
// =============================
document.addEventListener("DOMContentLoaded", () => {
  renderDoctors();
  renderServices();
  setupTabSwitching();
  setupCostEstimator();
  checkSessionStatus(); 
  initEduSlider(); // Slider diinisialisasi di sini juga

  const queueBtn = document.getElementById("takeQueueBtn");
  const navbarQueueBtn = document.getElementById("navbarQueueBtn");
  if (queueBtn) queueBtn.addEventListener("click", openQueueModal);
  if (navbarQueueBtn) navbarQueueBtn.addEventListener("click", openQueueModal);

  const analyzeBtn = document.getElementById("analyzeBtn");
  if (analyzeBtn) analyzeBtn.addEventListener("click", analyzeSymptoms);
});

// ==========================================
// 11. FITUR ARTIKEL MODAL (READ MORE)
// ==========================================

// Data Lengkap Artikel (Bisa kamu edit isinya sesuka hati)
const fullArticles = [
    {
        title: "Bukan 'Baper', Ini PISD: Sains di Balik Trauma Perselingkuhan",
        category: "Neuroscience",
        img: "assets/img/artikel1.avif",
        content: `
            <p class="font-bold text-sage-800">Hook: Pernahkah dada Anda sesak mendadak hanya karena melihat notifikasi HP? Itu bukan lebay. Itu adalah respons biologis otak terhadap ancaman.</p>
            <br>
            <p>Banyak korban perselingkuhan menyalahkan diri sendiri karena merasa terlalu sensitif atau sulit *move on*. Namun, studi klinis terbaru dalam bidang neuroscience menyebut kondisi ini sebagai <strong>Post-Infidelity Stress Disorder (PISD)</strong>.</p>
            <p>Secara medis, otak korban perselingkuhan menunjukkan aktivitas yang mirip dengan tentara yang mengalami PTSD (Gangguan Stres Pasca Trauma). Amigdala (pusat rasa takut) menjadi hiperaktif, membuat Anda selalu dalam mode waspada (*hyper-vigilance*).</p>
            <ul class="list-disc pl-5 space-y-1 bg-red-50 p-4 rounded-xl border border-red-100">
                <li>Insomnia parah atau mimpi buruk.</li>
                <li>Flashback mendadak saat melihat pemicu (tempat, lagu, tanggal).</li>
                <li>Gejala fisik: Maag, sakit kepala tegang, hingga sesak napas.</li>
            </ul>
            <p>Di Soulvaya, kami tidak hanya meminta Anda untuk "sabar". Kami menggunakan metode berbasis riset untuk menenangkan sistem saraf Anda terlebih dahulu, memvalidasi rasa sakit Anda secara medis, baru kemudian melangkah ke pemulihan hati.</p>
        `
    },
    {
        title: "Takut Aib Terbongkar? Kenapa Konseling Anonim Lebih Aman",
        category: "Privasi",
        img: "assets/img/artikel2.avif",
        content: `
            <p class="font-bold text-sage-800">"Mau cerita tapi takut teman ember?" atau "Takut pasangan tahu Anda ke psikolog?"</p>
            <br>
            <p>Hambatan terbesar korban perselingkuhan atau masalah rumah tangga untuk pulih bukanlah biaya, melainkan <strong>Rasa Malu (Shame)</strong>. Budaya kita seringkali menempatkan "menjaga aib keluarga" di atas kesehatan mental individu.</p>
            <p>Soulvaya memecahkan masalah ini dengan sistem <strong>Enkripsi Tingkat Tinggi & Anonimitas Total</strong>:</p>
            <ul class="list-disc pl-5 space-y-1">
                <li><strong>No Real Name Required:</strong> Anda bisa menggunakan nama samaran saat sesi konseling online.</li>
                <li><strong>End-to-End Encryption:</strong> Chat dan sesi video tidak direkam dan terhapus otomatis setelah sesi selesai.</li>
                <li><strong>Data Terpisah:</strong> Rekam medis Anda tidak terhubung dengan data administrasi publik.</li>
            </ul>
            <p>Anda bisa bercerita sebebas-bebasnya, menangis, marah, atau menumpahkan segala kekesalan tentang konflik rumah tangga tanpa takut data bocor atau dihakimi lingkungan sosial. Ruang aman Anda ada di sini.</p>
        `
    },
    {
        title: "P3K Emosional: Teknik 2 Menit Redakan Panik di Kantor",
        category: "Self-Help",
        img: "assets/img/artikel3.jpg",
        content: `
            <p class="font-bold text-sage-800">Serangan panik tidak menunggu jam pulang kerja. Ia bisa datang saat meeting penting atau di tengah kemacetan.</p>
            <br>
            <p>Saat ingatan buruk (*flashback*) datang, otak logika Anda (Prefrontal Cortex) 'dibajak' oleh emosi. Akibatnya, Anda tidak bisa berpikir jernih, tangan gemetar, dan ingin kabur.</p>
            <p>Gunakan fitur Panduan Self-Help kami yang dirancang untuk kondisi darurat:</p>
            <div class="space-y-4">
                <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h4 class="font-bold text-blue-800 mb-1">1. Butterfly Hug</h4>
                    <p class="text-xs">Silangkan tangan di dada, tepuk pundak kiri dan kanan bergantian secara perlahan seperti kepakan sayap kupu-kupu. Ini menyeimbangkan otak kiri dan kanan.</p>
                </div>
                <div class="bg-green-50 p-4 rounded-xl border border-green-100">
                    <h4 class="font-bold text-green-800 mb-1">2. Teknik Grounding 5-4-3-2-1</h4>
                    <p class="text-xs">Sebutkan 5 benda yang dilihat, 4 yang bisa diraba, 3 suara yang didengar, 2 bau yang dicium, 1 rasa di lidah. Ini memaksa otak kembali ke "saat ini".</p>
                </div>
            </div>
            <p class="mt-4">Latihan praktis ini dirancang fleksibel untuk dilakukan kapan saja dan di mana saja guna mengembalikan kendali diri Anda dalam hitungan menit.</p>
        `
    }
];

function openArticleModal(index) {
    const modal = document.getElementById('articleModal');
    const data = fullArticles[index];
    
    if(!data) return;

    // Isi konten ke dalam elemen HTML modal
    document.getElementById('artModalImg').src = data.img;
    document.getElementById('artModalBadge').textContent = data.category;
    document.getElementById('artModalTitle').textContent = data.title;
    document.getElementById('artModalContent').innerHTML = data.content; // Pakai innerHTML biar bisa render paragraf & list

    // Tampilkan modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Matikan scroll body belakang
}

function closeArticleModal() {
    const modal = document.getElementById('articleModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto'; // Hidupkan scroll body kembali
}