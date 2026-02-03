// ROWISM The Black - Interactive Features

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all features
  initNavigation();
  initScrollAnimations();
  initFAQ();
  initMobileMenu();
  initSmoothScroll();
});

// Navigation scroll effect
function initNavigation() {
  const navbar = document.getElementById('navbar');
  
  if (!navbar) return;
  
  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('nav-scrolled');
    } else {
      navbar.classList.remove('nav-scrolled');
    }
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check
}

// Scroll-triggered animations
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  if (!animatedElements.length) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  animatedElements.forEach(el => observer.observe(el));
}

// FAQ Accordion
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    if (!question || !answer) return;
    
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherAnswer = otherItem.querySelector('.faq-answer');
          if (otherAnswer) {
            otherAnswer.style.maxHeight = '0';
            otherAnswer.style.paddingTop = '0';
            otherAnswer.style.paddingBottom = '0';
          }
        }
      });
      
      // Toggle current item
      item.classList.toggle('active');
      
      if (!isActive) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.style.display = 'block';
      } else {
        answer.style.maxHeight = '0';
      }
    });
  });
}

// Mobile Menu Toggle
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (!menuBtn || !mobileMenu) return;
  
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('show');
    
    // Animate hamburger icon
    const icon = menuBtn.querySelector('svg');
    if (icon) {
      icon.classList.toggle('rotate-90');
    }
  });
  
  // Close menu when clicking a link
  const menuLinks = mobileMenu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('show');
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
        const headerOffset = 80;
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

// Parallax effect for hero section (optional enhancement)
function initParallax() {
  const hero = document.getElementById('hero');
  
  if (!hero) return;
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    
    if (scrolled < window.innerHeight) {
      hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
  }, { passive: true });
}

// Add subtle hover effect to menu items
document.querySelectorAll('.menu-item, [class*="hover:border-champagne"]').forEach(item => {
  item.addEventListener('mouseenter', function() {
    this.style.transition = 'all 0.3s ease';
  });
});

// Console Easter Egg
console.log('%c🍷 ROWISM The Black', 'font-size: 24px; font-weight: bold; color: #C9A962;');
console.log('%c연남동에서 가장 특별한 밤을 경험하세요.', 'font-size: 14px; color: #8B2D3A;');
