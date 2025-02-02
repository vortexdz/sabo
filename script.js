// القائمة الكاملة للسور
const quranData = {
    1: {name: "الفاتحة", englishName: "Al-Fatihah", number: 1, ayahs: [], type: 'مكية', versesCount: 7},
    2: {name: "البقرة", englishName: "Al-Baqarah", number: 2, ayahs: [], type: 'مدنية', versesCount: 286},
    3: {name: "آل عمران", englishName: "Aal Imran", number: 3, ayahs: [], type: 'مدنية', versesCount: 200},
    4: {name: "النساء", englishName: "An-Nisa'", number: 4, ayahs: [], type: 'مدنية', versesCount: 176},
    5: {name: "المائدة", englishName: "Al-Ma'idah", number: 5, ayahs: [], type: 'مدنية', versesCount: 120},
    6: {name: "الأنعام", englishName: "Al-An'am", number: 6, ayahs: [], type: 'مكية', versesCount: 165},
    7: {name: "الأعراف", englishName: "Al-A'raf", number: 7, ayahs: [], type: 'مكية', versesCount: 206},
    8: {name: "الأنفال", englishName: "Al-Anfal", number: 8, ayahs: [], type: 'مدنية', versesCount: 75},
    9: {name: "التوبة", englishName: "At-Tawbah", number: 9, ayahs: [], type: 'مدنية', versesCount: 129},
    10: {name: "يونس", englishName: "Yunus", number: 10, ayahs: [], type: 'مكية', versesCount: 109},
    11: {name: "هود", englishName: "Hud", number: 11, ayahs: [], type: 'مكية', versesCount: 123},
    12: {name: "يوسف", englishName: "Yusuf", number: 12, ayahs: [], type: 'مكية', versesCount: 111},
    13: {name: "الرعد", englishName: "Ar-Ra'd", number: 13, ayahs: [], type: 'مكية', versesCount: 43},
    14: {name: "إبراهيم", englishName: "Ibrahim", number: 14, ayahs: [], type: 'مكية', versesCount: 52},
    15: {name: "الحجر", englishName: "Al-Hijr", number: 15, ayahs: [], type: 'مكية', versesCount: 99},
    16: {name: "النحل", englishName: "An-Nahl", number: 16, ayahs: [], type: 'مكية', versesCount: 128},
    17: {name: "الإسراء", englishName: "Al-Isra'", number: 17, ayahs: [], type: 'مكية', versesCount: 111},
    18: {name: "الكهف", englishName: "Al-Kahf", number: 18, ayahs: [], type: 'مكية', versesCount: 110},
    19: {name: "مريم", englishName: "Maryam", number: 19, ayahs: [], type: 'مكية', versesCount: 98},
    20: {name: "طه", englishName: "Ta-Ha", number: 20, ayahs: [], type: 'مكية', versesCount: 135},
    21: {name: "الأنبياء", englishName: "Al-Anbiya'", number: 21, ayahs: [], type: 'مكية', versesCount: 112},
    22: {name: "الحج", englishName: "Al-Hajj", number: 22, ayahs: [], type: 'مكية', versesCount: 78},
    23: {name: "المؤمنون", englishName: "Al-Mu'minoon", number: 23, ayahs: [], type: 'مكية', versesCount: 118},
    24: {name: "النور", englishName: "An-Noor", number: 24, ayahs: [], type: 'مدنية', versesCount: 64},
    25: {name: "الفرقان", englishName: "Al-Furqan", number: 25, ayahs: [], type: 'مكية', versesCount: 77},
    26: {name: "الشعراء", englishName: "Ash-Shu'ara'", number: 26, ayahs: [], type: 'مكية', versesCount: 227},
    27: {name: "النمل", englishName: "An-Naml", number: 27, ayahs: [], type: 'مكية', versesCount: 93},
    28: {name: "القصص", englishName: "Al-Qasas", number: 28, ayahs: [], type: 'مكية', versesCount: 88},
    29: {name: "العنكبوت", englishName: "Al-'Ankabut", number: 29, ayahs: [], type: 'مكية', versesCount: 69},
    30: {name: "الروم", englishName: "Ar-Room", number: 30, ayahs: [], type: 'مكية', versesCount: 60},
    31: {name: "لقمان", englishName: "Luqman", number: 31, ayahs: [], type: 'مكية', versesCount: 34},
    32: {name: "السجدة", englishName: "As-Sajdah", number: 32, ayahs: [], type: 'مكية', versesCount: 30},
    33: {name: "الأحزاب", englishName: "Al-Ahzab", number: 33, ayahs: [], type: 'مدنية', versesCount: 73},
    34: {name: "سبأ", englishName: "Saba'", number: 34, ayahs: [], type: 'مكية', versesCount: 54},
    35: {name: "فاطر", englishName: "Fatir", number: 35, ayahs: [], type: 'مكية', versesCount: 45},
    36: {name: "يس", englishName: "Ya-Sin", number: 36, ayahs: [], type: 'مكية', versesCount: 83},
    37: {name: "الصافات", englishName: "As-Saffat", number: 37, ayahs: [], type: 'مكية', versesCount: 182},
    38: {name: "ص", englishName: "Sad", number: 38, ayahs: [], type: 'مكية', versesCount: 88},
    39: {name: "الزمر", englishName: "Az-Zumar", number: 39, ayahs: [], type: 'مكية', versesCount: 75},
    40: {name: "غافر", englishName: "Ghafir", number: 40, ayahs: [], type: 'مكية', versesCount: 85},
    41: {name: "فصلت", englishName: "Fussilat", number: 41, ayahs: [], type: 'مكية', versesCount: 54},
    42: {name: "الشورى", englishName: "Ash-Shura", number: 42, ayahs: [], type: 'مكية', versesCount: 53},
    43: {name: "الزخرف", englishName: "Az-Zukhruf", number: 43, ayahs: [], type: 'مكية', versesCount: 89},
    44: {name: "الدخان", englishName: "Ad-Dukhan", number: 44, ayahs: [], type: 'مكية', versesCount: 59},
    45: {name: "الجاثية", englishName: "Al-Jathiyah", number: 45, ayahs: [], type: 'مكية', versesCount: 37},
    46: {name: "الأحقاف", englishName: "Al-Ahqaf", number: 46, ayahs: [], type: 'مكية', versesCount: 35},
    47: {name: "محمد", englishName: "Muhammad", number: 47, ayahs: [], type: 'مدنية', versesCount: 38},
    48: {name: "الفتح", englishName: "Al-Fath", number: 48, ayahs: [], type: 'مدنية', versesCount: 29},
    49: {name: "الحجرات", englishName: "Al-Hujurat", number: 49, ayahs: [], type: 'مدنية', versesCount: 18},
    50: {name: "ق", englishName: "Qaf", number: 50, ayahs: [], type: 'مكية', versesCount: 45},
    51: {name: "الذاريات", englishName: "Adh-Dhariyat", number: 51, ayahs: [], type: 'مكية', versesCount: 60},
    52: {name: "الطور", englishName: "At-Tur", number: 52, ayahs: [], type: 'مكية', versesCount: 49},
    53: {name: "النجم", englishName: "An-Najm", number: 53, ayahs: [], type: 'مكية', versesCount: 62},
    54: {name: "القمر", englishName: "Al-Qamar", number: 54, ayahs: [], type: 'مكية', versesCount: 55},
    55: {name: "الرحمن", englishName: "Ar-Rahman", number: 55, ayahs: [], type: 'مدنية', versesCount: 78},
    56: {name: "الواقعة", englishName: "Al-Waqi'ah", number: 56, ayahs: [], type: 'مكية', versesCount: 96},
    57: {name: "الحديد", englishName: "Al-Hadid", number: 57, ayahs: [], type: 'مدنية', versesCount: 29},
    58: {name: "المجادلة", englishName: "Al-Mujadilah", number: 58, ayahs: [], type: 'مدنية', versesCount: 22},
    59: {name: "الحشر", englishName: "Al-Hashr", number: 59, ayahs: [], type: 'مدنية', versesCount: 24},
    60: {name: "الممتحنة", englishName: "Al-Mumtahanah", number: 60, ayahs: [], type: 'مدنية', versesCount: 13},
    61: {name: "الصف", englishName: "As-Saff", number: 61, ayahs: [], type: 'مدنية', versesCount: 14},
    62: {name: "الجمعة", englishName: "Al-Jumu'ah", number: 62, ayahs: [], type: 'مدنية', versesCount: 11},
    63: {name: "المنافقون", englishName: "Al-Munafiqun", number: 63, ayahs: [], type: 'مدنية', versesCount: 11},
    64: {name: "التغابن", englishName: "At-Taghabun", number: 64, ayahs: [], type: 'مدنية', versesCount: 18},
    65: {name: "الطلاق", englishName: "At-Talaq", number: 65, ayahs: [], type: 'مدنية', versesCount: 12},
    66: {name: "التحريم", englishName: "At-Tahrim", number: 66, ayahs: [], type: 'مدنية', versesCount: 12},
    67: {name: "الملك", englishName: "Al-Mulk", number: 67, ayahs: [], type: 'مكية', versesCount: 30},
    68: {name: "القلم", englishName: "Al-Qalam", number: 68, ayahs: [], type: 'مكية', versesCount: 52},
    69: {name: "الحاقة", englishName: "Al-Haqqah", number: 69, ayahs: [], type: 'مكية', versesCount: 52},
    70: {name: "المعارج", englishName: "Al-Ma'arij", number: 70, ayahs: [], type: 'مكية', versesCount: 44},
    71: {name: "نوح", englishName: "Nuh", number: 71, ayahs: [], type: 'مكية', versesCount: 28},
    72: {name: "الجن", englishName: "Al-Jinn", number: 72, ayahs: [], type: 'مكية', versesCount: 28},
    73: {name: "المزمل", englishName: "Al-Muzzammil", number: 73, ayahs: [], type: 'مكية', versesCount: 20},
    74: {name: "المدثر", englishName: "Al-Muddaththir", number: 74, ayahs: [], type: 'مكية', versesCount: 56},
    75: {name: "القيامة", englishName: "Al-Qiyamah", number: 75, ayahs: [], type: 'مكية', versesCount: 40},
    76: {name: "الإنسان", englishName: "Al-Insan", number: 76, ayahs: [], type: 'مدنية', versesCount: 31},
    77: {name: "المرسلات", englishName: "Al-Mursalat", number: 77, ayahs: [], type: 'مكية', versesCount: 50},
    78: {name: "النبأ", englishName: "An-Naba'", number: 78, ayahs: [], type: 'مكية', versesCount: 40},
    79: {name: "النازعات", englishName: "An-Nazi'at", number: 79, ayahs: [], type: 'مكية', versesCount: 46},
    80: {name: "عبس", englishName: "'Abasa", number: 80, ayahs: [], type: 'مكية', versesCount: 42},
    81: {name: "التكوير", englishName: "At-Takwir", number: 81, ayahs: [], type: 'مكية', versesCount: 29},
    82: {name: "الإنفطار", englishName: "Al-Infitar", number: 82, ayahs: [], type: 'مكية', versesCount: 19},
    83: {name: "المطففين", englishName: "Al-Mutaffifin", number: 83, ayahs: [], type: 'مكية', versesCount: 36},
    84: {name: "الإنشقاق", englishName: "Al-Inshiqaq", number: 84, ayahs: [], type: 'مكية', versesCount: 25},
    85: {name: "البروج", englishName: "Al-Buruj", number: 85, ayahs: [], type: 'مكية', versesCount: 22},
    86: {name: "الطارق", englishName: "At-Tariq", number: 86, ayahs: [], type: 'مكية', versesCount: 17},
    87: {name: "الأعلى", englishName: "Al-A'la", number: 87, ayahs: [], type: 'مكية', versesCount: 19},
    88: {name: "الغاشية", englishName: "Al-Ghashiyah", number: 88, ayahs: [], type: 'مكية', versesCount: 26},
    89: {name: "الفجر", englishName: "Al-Fajr", number: 89, ayahs: [], type: 'مكية', versesCount: 30},
    90: {name: "البلد", englishName: "Al-Balad", number: 90, ayahs: [], type: 'مكية', versesCount: 20},
    91: {name: "الشمس", englishName: "Ash-Shams", number: 91, ayahs: [], type: 'مكية', versesCount: 15},
    92: {name: "الليل", englishName: "Al-Layl", number: 92, ayahs: [], type: 'مكية', versesCount: 21},
    93: {name: "الضحى", englishName: "Ad-Duha", number: 93, ayahs: [], type: 'مكية', versesCount: 11},
    94: {name: "الشرح", englishName: "Ash-Sharh", number: 94, ayahs: [], type: 'مكية', versesCount: 8},
    95: {name: "التين", englishName: "At-Tin", number: 95, ayahs: [], type: 'مكية', versesCount: 8},
    96: {name: "العلق", englishName: "Al-'Alaq", number: 96, ayahs: [], type: 'مكية', versesCount: 19},
    97: {name: "القدر", englishName: "Al-Qadr", number: 97, ayahs: [], type: 'مكية', versesCount: 5},
    98: {name: "البينة", englishName: "Al-Bayyinah", number: 98, ayahs: [], type: 'مدنية', versesCount: 8},
    99: {name: "الزلزلة", englishName: "Az-Zalzalah", number: 99, ayahs: [], type: 'مدنية', versesCount: 8},
    100: {name: "العاديات", englishName: "Al-'Adiyat", number: 100, ayahs: [], type: 'مكية', versesCount: 11},
    101: {name: "القارعة", englishName: "Al-Qari'ah", number: 101, ayahs: [], type: 'مكية', versesCount: 11},
    102: {name: "التكاثر", englishName: "At-Takathur", number: 102, ayahs: [], type: 'مكية', versesCount: 8},
    103: {name: "العصر", englishName: "Al-'Asr", number: 103, ayahs: [], type: 'مكية', versesCount: 3},
    104: {name: "الهمزة", englishName: "Al-Humazah", number: 104, ayahs: [], type: 'مكية', versesCount: 9},
    105: {name: "الفيل", englishName: "Al-Fil", number: 105, ayahs: [], type: 'مكية', versesCount: 5},
    106: {name: "قريش", englishName: "Quraysh", number: 106, ayahs: [], type: 'مكية', versesCount: 4},
    107: {name: "الماعون", englishName: "Al-Ma'un", number: 107, ayahs: [], type: 'مكية', versesCount: 7},
    108: {name: "الكوثر", englishName: "Al-Kawthar", number: 108, ayahs: [], type: 'مكية', versesCount: 3},
    109: {name: "الكافرون", englishName: "Al-Kafirun", number: 109, ayahs: [], type: 'مكية', versesCount: 6},
    110: {name: "النصر", englishName: "An-Nasr", number: 110, ayahs: [], type: 'مدنية', versesCount: 3},
    111: {name: "المسد", englishName: "Al-Masad", number: 111, ayahs: [], type: 'مكية', versesCount: 5},
    112: {name: "الإخلاص", englishName: "Al-Ikhlas", number: 112, ayahs: [], type: 'مكية', versesCount: 4},
    113: {name: "الفلق", englishName: "Al-Falaq", number: 113, ayahs: [], type: 'مكية', versesCount: 5},
    114: {name: "الناس", englishName: "An-Nas", number: 114, ayahs: [], type: 'مكية', versesCount: 6}
};

// Cache names
const CACHE_NAME = 'quran-app-v1';
const API_CACHE = 'quran-api-cache-v1';

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    registerServiceWorker();
    setupEventListeners();
    checkOnlineStatus();
});

// Register Service Worker
async function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        try {
            const registration = await navigator.serviceWorker.register('service-worker.js');
            console.log('ServiceWorker registered:', registration);
        } catch (error) {
            console.error('ServiceWorker registration failed:', error);
        }
    }
}

// Check online status
function checkOnlineStatus() {
    function updateOnlineStatus() {
        const status = navigator.onLine;
        document.body.classList.toggle('offline', !status);
    }

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    updateOnlineStatus();
}

// Initialize app
async function initializeApp() {
    loadSurahList();
    setupThemeToggle();
    setupFontSizeControls();
}

// Setup event listeners
function setupEventListeners() {
    setupSearchFilter();
    setupCategoryFilter();
    setupSidebarToggle();
}

// Load Surah list
async function loadSurahList() {
    const surahListContainer = document.querySelector('.surah-list-container');
    surahListContainer.innerHTML = '';

    Object.values(quranData).forEach((surah, index) => {
        const surahElement = createSurahElement(surah, index + 1);
        surahListContainer.appendChild(surahElement);
    });
}

// Create Surah element
function createSurahElement(surah, number) {
    const div = document.createElement('div');
    div.className = 'surah-item';
    div.innerHTML = `
        <div class="surah-number">${number}</div>
        <div class="surah-details">
            <div class="surah-name">${surah.name}</div>
            <div class="surah-info">
                <span class="surah-type">${surah.type === 'مكية' ? 'مكية' : 'مدنية'}</span>
                <span class="verse-count">${surah.versesCount} آيات</span>
            </div>
        </div>
    `;

    div.addEventListener('click', () => loadSurah(number));
    return div;
}

// Load Surah content
async function loadSurah(surahNumber) {
    const surahContent = document.getElementById('surahContent');
    surahContent.innerHTML = '<div class="loading">جاري تحميل السورة...</div>';

    try {
        const surah = await fetchSurahVerses(surahNumber);
        displaySurah(surah);
        saveSurahToCache(surah);
    } catch (error) {
        console.error('Error loading surah:', error);
        const cachedSurah = await getSurahFromCache(surahNumber);
        
        if (cachedSurah) {
            displaySurah(cachedSurah);
            showOfflineNotification();
        } else {
            surahContent.innerHTML = '<div class="error">عذراً، حدث خطأ في تحميل السورة. يرجى المحاولة مرة أخرى.</div>';
        }
    }
}

// Fetch Surah verses
async function fetchSurahVerses(surahNumber) {
    const response = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}`);
    if (!response.ok) throw new Error('Failed to fetch surah');
    const data = await response.json();
    return data.data;
}

// Display Surah
function displaySurah(surah) {
    const surahContent = document.getElementById('surahContent');
    
    const container = document.createElement('div');
    container.className = 'verses-container';
    
    // Add Surah header
    container.innerHTML = `
        <div class="surah-header">
            <h1 class="surah-title">سورة ${surah.name}</h1>
            <div class="surah-metadata">
                <span class="surah-type">${surah.revelationType === 'Meccan' ? 'مكية' : 'مدنية'}</span>
                <span class="verse-count">${surah.numberOfAyahs} آيات</span>
            </div>
        </div>
    `;

    // Add Bismillah except for Surah At-Tawbah
    if (surah.number !== 9) {
        const bismillah = document.createElement('div');
        bismillah.className = 'bismillah';
        bismillah.textContent = 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ';
        container.appendChild(bismillah);
    }

    // Add verses with animation
    surah.ayahs.forEach((ayah, index) => {
        const verse = document.createElement('div');
        verse.className = 'verse';
        verse.innerHTML = `
            <div class="verse-number">${ayah.numberInSurah}</div>
            <div class="verse-text">${ayah.text}</div>
        `;
        
        // Add animation delay
        setTimeout(() => verse.classList.add('show'), index * 100);
        container.appendChild(verse);
    });

    surahContent.innerHTML = '';
    surahContent.appendChild(container);
}

// Cache functions
async function saveSurahToCache(surah) {
    try {
        const cache = await caches.open(API_CACHE);
        const response = new Response(JSON.stringify(surah));
        await cache.put(`surah-${surah.number}`, response);
    } catch (error) {
        console.error('Error saving to cache:', error);
    }
}

async function getSurahFromCache(surahNumber) {
    try {
        const cache = await caches.open(API_CACHE);
        const response = await cache.match(`surah-${surahNumber}`);
        if (response) {
            return await response.json();
        }
        return null;
    } catch (error) {
        console.error('Error reading from cache:', error);
        return null;
    }
}

// UI Functions
function showOfflineNotification() {
    const notification = document.createElement('div');
    notification.className = 'offline-notification';
    notification.textContent = 'أنت تقرأ من النسخة المحفوظة';
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Search filter
function setupSearchFilter() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const surahItems = document.querySelectorAll('.surah-item');
        
        surahItems.forEach(item => {
            const surahName = item.querySelector('.surah-name').textContent.toLowerCase();
            item.style.display = surahName.includes(searchTerm) ? 'flex' : 'none';
        });
    });
}

// Category filter
function setupCategoryFilter() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            filterSurahs(category);
            
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
}

function filterSurahs(category) {
    const surahItems = document.querySelectorAll('.surah-item');
    surahItems.forEach(item => {
        const surahType = item.querySelector('.surah-type').textContent;
        if (category === 'all' || 
            (category === 'makkah' && surahType === 'مكية') ||
            (category === 'madinah' && surahType === 'مدنية')) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

// Sidebar toggle
function setupSidebarToggle() {
    const toggleButton = document.getElementById('toggleSidebar');
    const sidebar = document.querySelector('.surah-sidebar');
    
    toggleButton.addEventListener('click', () => {
        sidebar.classList.toggle('show');
    });
}

// Theme toggle
function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    }
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggle.textContent = isDark ? '☀️' : '🌙';
    });
}

// Font size controls
function setupFontSizeControls() {
    const increase = document.getElementById('fontIncrease');
    const decrease = document.getElementById('fontDecrease');
    const root = document.documentElement;
    
    increase.addEventListener('click', () => adjustFontSize(2));
    decrease.addEventListener('click', () => adjustFontSize(-2));
}

function adjustFontSize(change) {
    const verses = document.querySelectorAll('.verse-text');
    verses.forEach(verse => {
        const currentSize = parseInt(window.getComputedStyle(verse).fontSize);
        verse.style.fontSize = `${currentSize + change}px`;
    });
}
