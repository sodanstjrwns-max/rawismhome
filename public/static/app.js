// ROWISM The Black - Premium Interactive Features

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollAnimations();
  // initFAQ(); // Disabled - handled by translations.js after dynamic rendering
  initMobileMenu();
  initSmoothScroll();
  initMultilingual();
});

// Multilingual System
function initMultilingual() {
  // Initialize language
  if (typeof initLanguage === 'function') {
    const lang = initLanguage();
    updateAllContent(lang);
    updateLanguageButtons();
  }
}

// Update all dynamic content based on language
function updateAllContent(lang) {
  if (!window.translations || !window.translations[lang]) return;
  
  const t = window.translations[lang];
  
  // Update simple text elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const keys = el.getAttribute('data-i18n').split('.');
    let value = t;
    for (const key of keys) {
      if (value && value[key] !== undefined) {
        value = value[key];
      } else {
        return;
      }
    }
    if (typeof value === 'string') {
      el.textContent = value;
    }
  });
  
  // Update Hero Section
  updateHeroSection(t);
  
  // Update Question Section
  updateQuestionSection(t);
  
  // Update Philosophy Section
  updatePhilosophySection(t);
  
  // Update Experience Section
  updateExperienceSection(t);
  
  // Update Menu Section
  updateMenuSection(t);
  
  // Update Recommend Section
  updateRecommendSection(t);
  
  // Update Occasions Section
  updateOccasionsSection(t);
  
  // Update Location Section
  updateLocationSection(t);
  
  // Update Reviews Section
  updateReviewsSection(t);
  
  // Update FAQ Section
  updateFAQSection(t);
  
  // Update Reserve Section
  updateReserveSection(t);
  
  // Update Footer
  updateFooterSection(t);
  
  // Update Mobile CTA
  const mobileCta = document.querySelector('.fixed.bottom-0 a');
  if (mobileCta && t.mobileCta) {
    mobileCta.textContent = t.mobileCta;
  }
}

function updateHeroSection(t) {
  if (!t.hero) return;
  const section = document.getElementById('hero');
  if (!section) return;
  
  const subtitle = section.querySelector('.tracking-\\[0\\.4em\\]');
  const title1 = section.querySelector('h1 span:first-child');
  const title2 = section.querySelector('h1 span:last-child');
  const desc = section.querySelector('.text-off-white\\/60');
  const cta = section.querySelector('a[href="#reserve"] span');
  
  if (subtitle && t.hero.subtitle) subtitle.textContent = t.hero.subtitle;
  if (title1 && t.hero.title1) title1.textContent = t.hero.title1;
  if (title2 && t.hero.title2) title2.textContent = t.hero.title2;
  if (desc && t.hero.description) desc.textContent = t.hero.description;
  if (cta && t.hero.cta) cta.textContent = t.hero.cta;
}

function updateQuestionSection(t) {
  if (!t.question) return;
  const section = document.getElementById('question');
  if (!section) return;
  
  const title = section.querySelector('h2');
  const subtitle = section.querySelector('p.text-off-white\\/40');
  
  if (title && t.question.title) title.textContent = t.question.title;
  if (subtitle && t.question.subtitle) subtitle.textContent = t.question.subtitle;
  
  const items = section.querySelectorAll('.grid > div > p');
  if (items && t.question.items) {
    items.forEach((item, i) => {
      if (t.question.items[i]) {
        item.textContent = t.question.items[i];
      }
    });
  }
}

function updatePhilosophySection(t) {
  if (!t.philosophy) return;
  const section = document.getElementById('philosophy');
  if (!section) return;
  
  const label = section.querySelector('.text-champagne\\/50');
  const title = section.querySelector('.font-playfair.text-7xl');
  const subtitle = section.querySelector('.text-champagne.text-lg');
  const description = section.querySelector('.text-2xl');
  
  if (label && t.philosophy.label) label.textContent = t.philosophy.label;
  if (title && t.philosophy.title) title.textContent = t.philosophy.title;
  if (subtitle && t.philosophy.subtitle) subtitle.textContent = t.philosophy.subtitle;
  if (description && t.philosophy.description) description.textContent = t.philosophy.description;
}

function updateExperienceSection(t) {
  if (!t.experience) return;
  // Find experience section by looking for the items
  const experienceItems = document.querySelectorAll('[class*="experience-item"]');
  // This is complex due to the structure, simplified for now
}

function updateMenuSection(t) {
  if (!t.menu) return;
  const section = document.getElementById('menu');
  if (!section) return;
  
  const label = section.querySelector('.text-champagne\\/50');
  const title = section.querySelector('.font-playfair.text-4xl');
  
  if (label && t.menu.label) label.textContent = t.menu.label;
  if (title && t.menu.title) title.textContent = t.menu.title;
}

function updateRecommendSection(t) {
  if (!t.recommend) return;
  const section = document.getElementById('recommend');
  if (!section) return;
  
  const title = section.querySelector('h2.font-playfair');
  const subtitle = section.querySelector('p.text-off-white\\/40');
  
  if (title && t.recommend.title) title.textContent = t.recommend.title;
  if (subtitle && t.recommend.subtitle) subtitle.textContent = t.recommend.subtitle;
}

function updateOccasionsSection(t) {
  if (!t.occasions) return;
  const section = document.getElementById('occasions');
  if (!section) return;
  
  const title = section.querySelector('h2.font-playfair');
  if (title && t.occasions.title) title.textContent = t.occasions.title;
}

function updateLocationSection(t) {
  if (!t.location) return;
  const section = document.getElementById('location');
  if (!section) return;
  
  const title = section.querySelector('h2.font-playfair');
  if (title && t.location.title) title.textContent = t.location.title;
}

function updateReviewsSection(t) {
  if (!t.reviews) return;
  const section = document.getElementById('reviews');
  if (!section) return;
  
  const title = section.querySelector('h2.font-playfair');
  const subtitle = section.querySelector('p.text-off-white\\/40');
  
  if (title && t.reviews.title) title.textContent = t.reviews.title;
  if (subtitle && t.reviews.subtitle) subtitle.textContent = t.reviews.subtitle;
}

function updateFAQSection(t) {
  if (!t.faq) return;
  const section = document.getElementById('faq');
  if (!section) return;
  
  const title = section.querySelector('h2.font-playfair');
  const subtitle = section.querySelector('.text-off-white\\/40.text-sm');
  
  if (title && t.faq.title) title.textContent = t.faq.title;
  if (subtitle && t.faq.subtitle) subtitle.textContent = t.faq.subtitle;
}

function updateReserveSection(t) {
  if (!t.reserve) return;
  const section = document.getElementById('reserve');
  if (!section) return;
  
  const title = section.querySelector('h2.font-playfair');
  const subtitle = section.querySelector('.text-champagne\\/70');
  
  if (title && t.reserve.title) title.textContent = t.reserve.title;
  if (subtitle && t.reserve.subtitle) subtitle.textContent = t.reserve.subtitle;
}

function updateFooterSection(t) {
  if (!t.footer) return;
  const footer = document.querySelector('footer');
  if (!footer) return;
  
  const copyright = footer.querySelector('.text-off-white\\/15');
  if (copyright && t.footer.copyright) copyright.textContent = t.footer.copyright;
}

// Override setLanguage to also update content
const originalSetLanguage = window.setLanguage;
window.setLanguage = function(lang) {
  if (typeof originalSetLanguage === 'function') {
    originalSetLanguage(lang);
  }
  updateAllContent(lang);
  updateLanguageButtons();
  
  // Close mobile menu if open
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
  }
};

// Navigation scroll effect
function initNavigation() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  
  let lastScroll = 0;
  
  const handleScroll = () => {
    const currentScroll = window.scrollY;
    
    if (currentScroll > 100) {
      navbar.classList.add('nav-scrolled');
    } else {
      navbar.classList.remove('nav-scrolled');
    }
    
    lastScroll = currentScroll;
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

// Scroll-triggered animations with stagger
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  if (!animatedElements.length) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add slight delay for stagger effect
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 50);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -80px 0px'
  });
  
  animatedElements.forEach(el => observer.observe(el));
}

// FAQ Accordion - Single open at a time
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');
    
    if (!question || !answer) return;
    
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other items first
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherAnswer = otherItem.querySelector('.faq-answer');
          const otherIcon = otherItem.querySelector('.faq-icon');
          if (otherAnswer) {
            otherAnswer.style.maxHeight = '0';
          }
          if (otherIcon) {
            otherIcon.style.transform = 'rotate(0deg)';
          }
        }
      });
      
      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        if (icon) icon.style.transform = 'rotate(45deg)';
      } else {
        item.classList.remove('active');
        answer.style.maxHeight = '0';
        if (icon) icon.style.transform = 'rotate(0deg)';
      }
    });
  });
}

// Mobile Menu Toggle
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (!menuBtn || !mobileMenu) return;
  
  let isOpen = false;
  
  menuBtn.addEventListener('click', () => {
    isOpen = !isOpen;
    
    if (isOpen) {
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.add('show');
      // Transform hamburger to X
      menuBtn.innerHTML = `
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1">
          <path d="M6 6l12 12M6 18L18 6"></path>
        </svg>
      `;
    } else {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('show');
      menuBtn.innerHTML = `
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1">
          <path d="M4 8h16M4 16h16"></path>
        </svg>
      `;
    }
  });
  
  // Close menu when clicking a link
  const menuLinks = mobileMenu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      isOpen = false;
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('show');
      menuBtn.innerHTML = `
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1">
          <path d="M4 8h16M4 16h16"></path>
        </svg>
      `;
    });
  });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerOffset = 100;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Console branding
console.log('%cROWISM', 'font-family: "Playfair Display", serif; font-size: 32px; color: #C9A962; font-weight: 300; letter-spacing: 0.3em;');
console.log('%cThe Black', 'font-family: serif; font-size: 14px; color: #666; letter-spacing: 0.2em;');
