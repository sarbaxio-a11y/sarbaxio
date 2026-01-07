// =====================================================
// SARBAXIO - Interactive JavaScript
// =====================================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== Mobile Navigation Toggle =====
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger
            const spans = hamburger.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(8px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
    
    // ===== Smooth Scrolling =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===== Navbar Background on Scroll =====
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(15, 23, 42, 1)';
            navbar.style.padding = '15px 0';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.padding = '20px 0';
        }
    });
    
    // ===== Animated Counter for Stats =====
    function animateCounter(element, target, duration = 2000) {
        let current = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }
    
    // ===== Intersection Observer for Animations =====
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
                
                // Trigger counter animation for stats
                if (entry.target.classList.contains('stat-item')) {
                    const numberElement = entry.target.querySelector('.stat-number');
                    const targetNumber = parseInt(numberElement.getAttribute('data-count'));
                    if (numberElement && !numberElement.classList.contains('counted')) {
                        numberElement.classList.add('counted');
                        animateCounter(numberElement, targetNumber);
                    }
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all elements with data-aos attribute
    document.querySelectorAll('[data-aos]').forEach(element => {
        observer.observe(element);
    });
    
    // Observe stat items
    document.querySelectorAll('.stat-item').forEach(element => {
        observer.observe(element);
    });
    
    // ===== Form Validation & Submission =====
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(contactForm);
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const phone = contactForm.querySelector('input[type="tel"]').value;
            const service = contactForm.querySelector('select').value;
            const message = contactForm.querySelector('textarea').value;
            
            // Basic validation
            if (!name || !email || !message || !service) {
                showNotification('Παρακαλώ συμπληρώστε όλα τα απαιτούμενα πεδία', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Παρακαλώ εισάγετε έγκυρη διεύθυνση email', 'error');
                return;
            }
            
            // Simulate form submission
            const submitBtn = contactForm.querySelector('.btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Αποστολή...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                showNotification('Το μήνυμά σας στάλθηκε επιτυχώς! Θα επικοινωνήσουμε σύντομα.', 'success');
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Log form data (in production, send to backend)
                console.log('Form submitted:', {
                    name,
                    email,
                    phone,
                    service,
                    message,
                    timestamp: new Date().toISOString()
                });
            }, 2000);
        });
    }
    
    // ===== Notification System =====
    function showNotification(message, type = 'success') {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close"><i class="fas fa-times"></i></button>
        `;
        
        // Add styles
        Object.assign(notification.style, {
            position: 'fixed',
            top: '100px',
            right: '20px',
            background: type === 'success' ? '#10b981' : '#ef4444',
            color: 'white',
            padding: '20px 25px',
            borderRadius: '10px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            zIndex: '10000',
            animation: 'slideInRight 0.5s ease',
            maxWidth: '400px'
        });
        
        document.body.appendChild(notification);
        
        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.style.cssText = 'background: none; border: none; color: white; cursor: pointer; font-size: 18px; padding: 0; margin-left: 10px;';
        closeBtn.addEventListener('click', () => {
            notification.style.animation = 'slideOutRight 0.5s ease';
            setTimeout(() => notification.remove(), 500);
        });
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.style.animation = 'slideOutRight 0.5s ease';
                setTimeout(() => notification.remove(), 500);
            }
        }, 5000);
    }
    
    // Add notification animations to document
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // ===== Parallax Effect for Hero =====
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-content');
        if (hero && scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            hero.style.opacity = 1 - (scrolled / 600);
        }
    });
    
    // ===== Service Card Hover Effect =====
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // ===== Loading Animation =====
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
    });
    
    // ===== Console Welcome Message =====
    console.log('%c🚀 SARBAXIO', 'font-size: 24px; font-weight: bold; color: #6366f1;');
    console.log('%cΚαλώς ήρθατε στο website μας!', 'font-size: 14px; color: #64748b;');
    console.log('%cΓια περισσότερες πληροφορίες: info@sarbaxio.com', 'font-size: 12px; color: #94a3b8;');
    
    // ===== Easter Egg: Konami Code =====
    let konamiCode = [];
    const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.key);
        konamiCode = konamiCode.slice(-10);
        
        if (konamiCode.join('') === konamiPattern.join('')) {
            showNotification('🎉 Βρήκατε το μυστικό! Είστε awesome! 🚀', 'success');
            document.body.style.animation = 'rainbow 3s ease infinite';
        }
    });
    
    const rainbowStyle = document.createElement('style');
    rainbowStyle.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(rainbowStyle);
});

// ===== Utility Functions =====

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Debounce function for performance
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Console ASCII Art (for fun!)
console.log(`
   _____ ___    ____  ____  ___  _  _______ ____ 
  / ___//   |  / __ \\/ __ )/ _ \\| |/ /  _/ // __ \\
  \\__ \\/ /| | / /_/ / __  / /_\\ \\  / / // // / / /
 ___/ / ___ |/ _, _/ /_/ / _, _/  /_/ // // /_/ / 
/____/_/  |_/_/ |_/_____/_/ |_/_/\\_\\___\\____/  
                                                  
`);
