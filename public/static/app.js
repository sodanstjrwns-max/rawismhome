// ROWISM The Black - Premium Interactive Features

document.addEventListener('DOMContentLoaded', () => {
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
