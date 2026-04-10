/* 
  Global Script for Kantipur Montessori
  Handles: Sticky Nav, Active Links, Reveal Animations, Gallery Lightbox, and Form Validation
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Language Toggle Logic
    const langBtns = document.querySelectorAll('.lang-btn');
    const currentLangPreference = localStorage.getItem('preferredLang') || 'en';

    function updateLanguage(lang) {
        if (typeof translations === 'undefined') return;
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });

        // Update active button state
        langBtns.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        localStorage.setItem('preferredLang', lang);
        document.documentElement.lang = lang;
    }

    if (langBtns.length > 0) {
        langBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                updateLanguage(lang);
            });
        });
        
        // Initial set
        setTimeout(() => updateLanguage(currentLangPreference), 100);
    }

    // 2. Mobile Navigation Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinksList = document.querySelector('.nav-links');

    if (menuToggle && navLinksList) {
        menuToggle.addEventListener('click', () => {
            navLinksList.classList.toggle('active');
            const icon = menuToggle.querySelector('.material-symbols-outlined');
            icon.textContent = navLinksList.classList.contains('active') ? 'close' : 'menu';
        });

        // Close menu on link click
        navLinksList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinksList.classList.remove('active');
                menuToggle.querySelector('.material-symbols-outlined').textContent = 'menu';
            });
        });
    }

    // 2. Sticky Navigation & Active Link Highlighting
    const nav = document.querySelector('.nav-header');
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Highlight active link
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Header scroll background effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.padding = '0.5rem 0';
            nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.05)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.7)';
            nav.style.padding = '0';
            nav.style.boxShadow = 'none';
        }
    });

    // 3. Accordion FAQ Logic
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    if (accordionItems.length > 0) {
        accordionItems.forEach(item => {
            const trigger = item.querySelector('.accordion-trigger');
            if (trigger) {
                trigger.addEventListener('click', () => {
                    const isActive = item.classList.contains('active');
                    
                    // Close all other items
                    accordionItems.forEach(i => i.classList.remove('active'));
                    
                    // Toggle current item
                    if (!isActive) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }

    // 4. Reveal Animations on Scroll
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(el => revealObserver.observe(el));

    // 3. Gallery Lightbox Logic
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');

    if (galleryItems.length > 0 && lightbox) {
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const imgSrc = item.querySelector('img').src;
                lightboxImg.src = imgSrc;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden'; // Stop scrolling
            });
        });

        const closeLightbox = () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto'; // Resume scrolling
        };

        lightboxClose.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });

        // Close on ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeLightbox();
        });
    }

    // 4. Contact Form Interaction
    const contactForms = document.querySelectorAll('#contactForm, #homeContactForm');
    
    if (contactForms.length > 0) {
        contactForms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Basic validation check
                const inputs = form.querySelectorAll('input, select, textarea');
                let isValid = true;

                inputs.forEach(input => {
                    if (!input.value.trim()) {
                        isValid = false;
                        input.style.border = '1px solid var(--secondary)';
                        setTimeout(() => input.style.border = 'none', 3000);
                    }
                });

                if (isValid) {
                    const submitBtn = form.querySelector('button');
                    const lang = localStorage.getItem('preferredLang') || 'en';
                    const loadingText = translations[lang]['form_submit_loading'] || 'Sending...';
                    const originalText = translations[lang]['form_submit_btn'] || 'Submit Request';

                    // Collect data
                    const name = form.querySelector('input[type="text"]').value;
                    const email = form.querySelector('input[type="email"]').value;
                    const courseEl = form.querySelector('select');
                    const course = courseEl ? courseEl.options[courseEl.selectedIndex].text : 'N/A';
                    const msg = form.querySelector('textarea').value;

                    // Construct WhatsApp Message
                    const wpMessage = `*New Inquiry via Website*\n\n*Name:* ${name}\n*Email:* ${email}\n*Interest:* ${course}\n*Message:* ${msg}`;
                    const encodedMsg = encodeURIComponent(wpMessage);
                    const wpUrl = `https://wa.me/9779841207663?text=${encodedMsg}`;

                    submitBtn.disabled = true;
                    submitBtn.textContent = loadingText;
                    submitBtn.style.opacity = '0.7';

                    // Redirect
                    setTimeout(() => {
                        window.open(wpUrl, '_blank');
                        form.reset();
                        submitBtn.disabled = false;
                        submitBtn.textContent = originalText;
                        submitBtn.style.opacity = '1';
                    }, 1000);
                }
            });
        });
    }
});
