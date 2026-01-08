// =====================================================
// SARBAXIO - Main JavaScript (Multilingual + Lensora Style)
// =====================================================

// ===== BULLETPROOF GLOBAL FUNCTIONS WITH DEBUG OVERLAY =====
window.toggleLanguageDropdown = function(e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
    const dropdown = document.getElementById('langDropdown');
    if (!dropdown) {
        console.error('❌ Dropdown not found!');
        showDebug('ERROR: Dropdown element not found!');
        return false;
    }
    
    const isOpen = dropdown.classList.contains('show');
    dropdown.classList.toggle('show');
    
    const status = isOpen ? 'CLOSED' : 'OPENED';
    const emoji = isOpen ? '🔴' : '🟢';
    console.log(`${emoji} Dropdown ${status}`);
    showDebug(`${emoji} Dropdown ${status}<br>Classes: ${dropdown.className}`);
    
    return false;
};

// Debug overlay helper
function showDebug(message) {
    let debug = document.getElementById('debugOverlay');
    if (!debug) {
        debug = document.createElement('div');
        debug.id = 'debugOverlay';
        debug.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: rgba(0,0,0,0.9);
            color: #4ade80;
            padding: 15px 20px;
            border-radius: 8px;
            border: 2px solid #667eea;
            font-family: monospace;
            font-size: 12px;
            z-index: 9999999;
            max-width: 300px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.5);
        `;
        document.body.appendChild(debug);
    }
    debug.innerHTML = `<strong>DEBUG:</strong><br>${message}`;
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
        if (debug && debug.parentNode) {
            debug.style.opacity = '0';
            setTimeout(() => debug.remove(), 300);
        }
    }, 3000);
}

window.selectLanguage = function(lang, e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
    console.log('🌍 Language selected:', lang);
    
    const dropdown = document.getElementById('langDropdown');
    if (dropdown) {
        dropdown.classList.remove('show');
    }
    
    // Use global currentLang variable
    if (typeof switchLanguage === 'function') {
        switchLanguage(lang);
    }
    
    return false;
};

window.toggleMobileMenu = function(e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
    const hamburger = document.getElementById('hamburgerMenu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!hamburger || !navMenu) {
        console.error('❌ Menu elements not found!');
        return false;
    }
    
    const isOpen = navMenu.classList.contains('show');
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('show');
    
    console.log(isOpen ? '🔴 Menu CLOSED' : '🟢 Menu OPENED');
    
    return false;
};

console.log('✅ Global inline handlers registered');

// Close dropdowns when clicking outside
document.addEventListener('click', function(e) {
    const dropdown = document.getElementById('langDropdown');
    const hamburger = document.getElementById('hamburgerMenu');
    const navMenu = document.querySelector('.nav-menu');
    
    // Close language dropdown if clicked outside
    if (dropdown && !dropdown.contains(e.target)) {
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
            console.log('❌ Language dropdown closed (outside click)');
        }
    }
    
    // Close mobile menu if clicked outside
    if (hamburger && navMenu && !hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        if (hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('show');
            console.log('❌ Mobile menu closed (outside click)');
        }
    }
});

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize everything
    initLanguage();
    initMobileMenu();
    initSmoothScroll();
    initNavbarScroll();
    initAnimations();
    initStats();
    initContactForm();
    
    // Remove loading state
    document.body.classList.add('loaded');
});

// ===== MULTILINGUAL SYSTEM =====
let currentLang = localStorage.getItem('language') || 'en';

// Language flag mapping
const langFlags = {
    'en': { flag: '🇺🇸', code: 'EN', name: 'English' },
    'gr': { flag: '🇬🇷', code: 'GR', name: 'Ελληνικά' },
    'es': { flag: '🇪🇸', code: 'ES', name: 'Español' }
};

function initLanguage() {
    const dropdown = document.querySelector('.language-dropdown');
    const currentBtn = document.querySelector('.lang-current');
    const options = document.querySelectorAll('.lang-option');
    
    if (!dropdown || !currentBtn || !options.length) {
        console.warn('Language dropdown elements not found');
        return;
    }
    
    console.log('✅ Language dropdown initialized');
    
    // Set initial language display
    updateCurrentLanguageDisplay();
    
    // Use pointerdown for universal compatibility (works on mouse, touch, pen)
    currentBtn.addEventListener('pointerdown', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const wasActive = dropdown.classList.contains('active');
        dropdown.classList.toggle('active');
        
        console.log('🔄 Language dropdown toggled:', !wasActive);
        console.log('📋 Classes:', dropdown.className);
    });
    
    // Close dropdown when clicking outside (with delay)
    setTimeout(() => {
        document.addEventListener('pointerdown', function(e) {
            if (!dropdown.contains(e.target)) {
                const wasActive = dropdown.classList.contains('active');
                dropdown.classList.remove('active');
                if (wasActive) {
                    console.log('❌ Language dropdown closed (outside click)');
                }
            }
        });
    }, 100);
    
    // Language option clicks
    options.forEach(option => {
        // Mark active option
        if (option.dataset.lang === currentLang) {
            option.classList.add('active');
        }
        
        option.addEventListener('pointerdown', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('🌍 Language selected:', option.dataset.lang);
            switchLanguage(option.dataset.lang);
            dropdown.classList.remove('active');
        });
    });
    
    // Apply initial language
    updateLanguage();
    
    // Update external links with current language
    updateExternalLinks();
}

function updateCurrentLanguageDisplay() {
    const currentBtn = document.querySelector('.lang-current');
    if (!currentBtn) return;
    
    const langInfo = langFlags[currentLang];
    currentBtn.querySelector('.lang-flag').textContent = langInfo.flag;
    currentBtn.querySelector('.lang-code').textContent = langInfo.code;
}

function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update dropdown display
    updateCurrentLanguageDisplay();
    
    // Update active option
    document.querySelectorAll('.lang-option').forEach(option => {
        option.classList.remove('active');
        if (option.dataset.lang === lang) {
            option.classList.add('active');
        }
    });
    
    // Update all text
    updateLanguage();
    
    // Reload dynamic content
    updateContactFormServices();
    
    // Update external links with language parameter
    updateExternalLinks();
}

function updateExternalLinks() {
    // Update AI Application link
    const aiLink = document.querySelector('a[href*="ai-chatbot.html"]');
    if (aiLink) {
        if (currentLang !== 'en') {
            aiLink.href = `ai-chatbot.html?lang=${currentLang}`;
        } else {
            aiLink.href = 'ai-chatbot.html';
        }
    }
    
    // Update Landing Page link
    const demosLink = document.querySelector('a[href*="demos/index.html"]');
    if (demosLink) {
        if (currentLang !== 'en') {
            demosLink.href = `demos/index.html?lang=${currentLang}`;
        } else {
            demosLink.href = 'demos/index.html';
        }
    }
}

function updateLanguage() {
    const lang = translations[currentLang];
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const value = getNestedValue(lang, key);
        
        if (value) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = value;
            } else {
                element.textContent = value;
            }
        }
    });
    
    // Update document language
    document.documentElement.lang = currentLang === 'gr' ? 'el' : currentLang;
}

function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, part) => {
        // Handle array notation like features[0]
        const match = part.match(/(\w+)\[(\d+)\]/);
        if (match) {
            return acc && acc[match[1]] ? acc[match[1]][parseInt(match[2])] : undefined;
        }
        return acc && acc[part];
    }, obj);
}

// ===== MOBILE MENU =====
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!hamburger || !navMenu) {
        console.warn('Mobile menu elements not found');
        return;
    }
    
    console.log('✅ Mobile menu initialized');
    
    // Use pointerdown for universal compatibility
    hamburger.addEventListener('pointerdown', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const wasActive = hamburger.classList.contains('active');
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        console.log('🍔 Hamburger menu toggled:', !wasActive);
        console.log('📋 Hamburger:', hamburger.className);
        console.log('📋 Menu:', navMenu.className);
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('pointerdown', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            console.log('🔗 Menu closed (link clicked)');
        });
    });
    
    // Close menu when clicking outside (with delay)
    setTimeout(() => {
        document.addEventListener('pointerdown', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                const wasActive = hamburger.classList.contains('active');
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                if (wasActive) {
                    console.log('❌ Menu closed (outside click)');
                }
            }
        });
    }, 100);
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
    // Detect if mobile
    const isMobile = window.innerWidth <= 768;
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const targetPosition = target.offsetTop - offset;
                
                // Use instant scroll on mobile for better performance
                window.scrollTo({
                    top: targetPosition,
                    behavior: isMobile ? 'auto' : 'smooth'
                });
            }
        });
    });
}

// ===== NAVBAR SCROLL EFFECT =====
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ===== ANIMATIONS (AOS Alternative) =====
function initAnimations() {
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('aos-animate');
                }, entry.target.dataset.aosDelay || 0);
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(element => observer.observe(element));
}

// ===== ANIMATED STATS =====
function initStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    let animated = false;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                statNumbers.forEach(stat => animateCounter(stat));
            }
        });
    }, { threshold: 0.5 });
    
    if (statNumbers.length > 0) {
        observer.observe(statNumbers[0].parentElement.parentElement);
    }
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
}

// ===== TEAM SECTION (Dynamic Developer Profiles) =====
// ===== CONTACT FORM =====
function initContactForm() {
    const form = document.querySelector('.contact-form');
    
    // Populate service dropdown
    updateContactFormServices();
    
    // Web3Forms will handle the actual submission
    // We only validate before submission
    form.addEventListener('submit', (e) => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;
        
        // Basic validation (HTML5 required attributes handle most of this)
        if (!isValidEmail(email)) {
            e.preventDefault();
            showNotification(
                translations[currentLang].contact.notifications?.emailError || 'Please enter a valid email address.',
                'error'
            );
            return false;
        }
        
        // If validation passes, form will submit to Web3Forms
        console.log('✅ Form validated, submitting to Web3Forms...');
    });
}

function updateContactFormServices() {
    const serviceSelect = document.getElementById('service');
    if (!serviceSelect) return;
    
    const lang = translations[currentLang];
    serviceSelect.innerHTML = '';
    
    lang.contact.form.services.forEach(service => {
        const option = document.createElement('option');
        option.value = service.value;
        option.textContent = service.text;
        serviceSelect.appendChild(option);
    });
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ===== NOTIFICATIONS =====
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const icon = type === 'success' 
        ? '<i class="fas fa-check-circle notification-icon"></i>'
        : '<i class="fas fa-exclamation-circle notification-icon"></i>';
    
    notification.innerHTML = `
        ${icon}
        <div class="notification-content">${message}</div>
        <button class="notification-close"><i class="fas fa-times"></i></button>
    `;
    
    document.body.appendChild(notification);
    
    // Close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.animation = 'slideIn 0.4s ease reverse';
        setTimeout(() => notification.remove(), 400);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideIn 0.4s ease reverse';
            setTimeout(() => notification.remove(), 400);
        }
    }, 5000);
}

// ===== PARALLAX EFFECT =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / 600);
    }
});

// ===== CONSOLE EASTER EGG =====
console.log(`
%c
╔═══════════════════════════════════════╗
║                                       ║
║          SARBAXIO                     ║
║   Expert Developer Network            ║
║                                       ║
║   Built with ❤️ by the SARBAXIO Team  ║
║                                       ║
╚═══════════════════════════════════════╝
`, 'color: #667eea; font-weight: bold; font-size: 14px;');

console.log('%cInterested in joining our team? Contact us at info@sarbaxio.com', 
    'color: #667eea; font-size: 12px;');

// ===== KONAMI CODE EASTER EGG =====
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            showNotification('🎉 Konami Code Activated! You found the secret!', 'success');
            document.body.style.animation = 'rainbow 2s ease-in-out';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 2000);
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

// Rainbow animation for easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        50% { filter: hue-rotate(180deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);
