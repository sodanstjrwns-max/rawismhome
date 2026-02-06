// i18n-loader.js - Dynamically load all translatable content
// This script runs after page load and fills in all content from translations

document.addEventListener('DOMContentLoaded', function() {
  // Initialize language
  const lang = initLanguage();
  
  // Update all content
  updateAllDynamicContent();
  updateLanguageButtons();
  
  // Also update when language changes
  const originalSetLanguage = window.setLanguage;
  window.setLanguage = function(lang) {
    originalSetLanguage(lang);
    updateAllDynamicContent();
  };
});

function updateAllDynamicContent() {
  const data = translations[currentLang];
  if (!data) return;
  
  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = getNestedValue(data, key);
    if (value && typeof value === 'string') {
      el.textContent = value;
    }
  });
  
  // Update menu items dynamically
  updateMenuItems(data);
  
  // Update experience items
  updateExperienceItems(data);
  
  // Update recommend items
  updateRecommendItems(data);
  
  // Update occasions items
  updateOccasionsItems(data);
  
  // Update reviews
  updateReviews(data);
  
  // Update FAQ
  updateFAQ(data);
  
  // Update location
  updateLocation(data);
  
  // Update reserve section
  updateReserve(data);
  
  // Update footer
  updateFooter(data);
  
  // Update mobile CTA
  const mobileCta = document.querySelector('[data-i18n="mobileCta"]');
  if (mobileCta && data.mobileCta) {
    mobileCta.textContent = data.mobileCta;
  }
}

function getNestedValue(obj, path) {
  const keys = path.split('.');
  let value = obj;
  for (const key of keys) {
    if (value && value[key] !== undefined) {
      value = value[key];
    } else {
      return null;
    }
  }
  return value;
}

function updateMenuItems(data) {
  if (!data.menu || !data.menu.items) return;
  
  const menuItems = data.menu.items;
  
  // Menu item containers with specific data attributes
  const menuContainers = document.querySelectorAll('[data-menu-item]');
  menuContainers.forEach(container => {
    const index = parseInt(container.getAttribute('data-menu-item'));
    if (menuItems[index]) {
      const item = menuItems[index];
      const nameEl = container.querySelector('[data-menu-name]');
      const descEl = container.querySelector('[data-menu-desc]');
      const detailEl = container.querySelector('[data-menu-detail]');
      const priceEl = container.querySelector('[data-menu-price]');
      const ingredientsEl = container.querySelector('[data-menu-ingredients]');
      
      if (nameEl) nameEl.textContent = item.name;
      if (descEl) descEl.textContent = item.description;
      if (detailEl) detailEl.textContent = item.detail;
      if (priceEl) priceEl.textContent = item.price;
      if (ingredientsEl) ingredientsEl.textContent = item.ingredients;
    }
  });
}

function updateExperienceItems(data) {
  if (!data.experience || !data.experience.items) return;
  
  const items = data.experience.items;
  const containers = document.querySelectorAll('[data-experience-item]');
  
  containers.forEach(container => {
    const index = parseInt(container.getAttribute('data-experience-item'));
    if (items[index]) {
      const item = items[index];
      const titleEl = container.querySelector('[data-exp-title]');
      const descEl = container.querySelector('[data-exp-desc]');
      
      if (titleEl) titleEl.innerHTML = item.title;
      if (descEl) descEl.textContent = item.desc;
    }
  });
}

function updateRecommendItems(data) {
  if (!data.recommend || !data.recommend.items) return;
  
  const items = data.recommend.items;
  const containers = document.querySelectorAll('[data-recommend-item]');
  
  containers.forEach(container => {
    const index = parseInt(container.getAttribute('data-recommend-item'));
    if (items[index]) {
      const item = items[index];
      const titleEl = container.querySelector('[data-rec-title]');
      const descEl = container.querySelector('[data-rec-desc]');
      const detailEl = container.querySelector('[data-rec-detail]');
      
      if (titleEl) titleEl.textContent = item.title;
      if (descEl) descEl.textContent = item.desc;
      if (detailEl) detailEl.textContent = item.detail;
    }
  });
}

function updateOccasionsItems(data) {
  if (!data.occasions || !data.occasions.items) return;
  
  const items = data.occasions.items;
  const containers = document.querySelectorAll('[data-occasion-item]');
  
  containers.forEach(container => {
    const index = parseInt(container.getAttribute('data-occasion-item'));
    if (items[index]) {
      const item = items[index];
      const subtitleEl = container.querySelector('[data-occ-subtitle]');
      const descEl = container.querySelector('[data-occ-desc]');
      const eventEl = container.querySelector('[data-occ-event]');
      
      if (subtitleEl) subtitleEl.textContent = item.subtitle;
      if (descEl) descEl.textContent = item.desc;
      if (eventEl) eventEl.textContent = item.event;
    }
  });
}

function updateReviews(data) {
  if (!data.reviews || !data.reviews.items) return;
  
  const items = data.reviews.items;
  const containers = document.querySelectorAll('[data-review-item]');
  
  containers.forEach(container => {
    const index = parseInt(container.getAttribute('data-review-item'));
    if (items[index]) {
      const item = items[index];
      const nameEl = container.querySelector('[data-review-name]');
      const dateEl = container.querySelector('[data-review-date]');
      const badgeEl = container.querySelector('[data-review-badge]');
      const textEl = container.querySelector('[data-review-text]');
      
      if (nameEl) nameEl.textContent = item.name;
      if (dateEl) dateEl.textContent = item.date;
      if (badgeEl) badgeEl.textContent = item.badge;
      if (textEl) textEl.textContent = item.review;
    }
  });
  
  // Update review count
  const countEl = document.querySelector('[data-i18n="reviews.count"]');
  if (countEl && data.reviews.count) {
    countEl.textContent = data.reviews.count;
  }
  
  // Update "more reviews" link
  const moreEl = document.querySelector('[data-i18n="reviews.more"]');
  if (moreEl && data.reviews.more) {
    moreEl.textContent = data.reviews.more;
  }
}

function updateFAQ(data) {
  if (!data.faq || !data.faq.items) return;
  
  const items = data.faq.items;
  const containers = document.querySelectorAll('[data-faq-item]');
  
  containers.forEach(container => {
    const index = parseInt(container.getAttribute('data-faq-item'));
    if (items[index]) {
      const item = items[index];
      const qEl = container.querySelector('[data-faq-q]');
      const aEl = container.querySelector('[data-faq-a]');
      
      if (qEl) qEl.textContent = item.q;
      if (aEl) aEl.textContent = item.a;
    }
  });
}

function updateLocation(data) {
  if (!data.location) return;
  
  const loc = data.location;
  
  // Update location elements
  const addressEl = document.querySelector('[data-i18n="location.address"]');
  const hoursEl = document.querySelector('[data-i18n="location.hours"]');
  const lastOrderEl = document.querySelector('[data-i18n="location.lastOrder"]');
  const closedEl = document.querySelector('[data-i18n="location.closed"]');
  const subwayEl = document.querySelector('[data-i18n="location.subway"]');
  const naverMapEl = document.querySelector('[data-i18n="location.naverMap"]');
  const kakaoMapEl = document.querySelector('[data-i18n="location.kakaoMap"]');
  
  if (addressEl) addressEl.textContent = loc.address;
  if (hoursEl) hoursEl.textContent = loc.hours;
  if (lastOrderEl) lastOrderEl.textContent = loc.lastOrder;
  if (closedEl) closedEl.textContent = loc.closed;
  if (subwayEl) subwayEl.textContent = loc.subway;
  if (naverMapEl) naverMapEl.textContent = loc.naverMap;
  if (kakaoMapEl) kakaoMapEl.textContent = loc.kakaoMap;
  
  // Update landmarks
  if (loc.landmarks && loc.landmarks.items) {
    const landmarkEls = document.querySelectorAll('[data-landmark]');
    landmarkEls.forEach((el, index) => {
      if (loc.landmarks.items[index]) {
        el.textContent = loc.landmarks.items[index];
      }
    });
  }
}

function updateReserve(data) {
  if (!data.reserve) return;
  
  const reserve = data.reserve;
  
  const titleEl = document.querySelector('[data-i18n="reserve.title"]');
  const subtitleEl = document.querySelector('[data-i18n="reserve.subtitle"]');
  const noticeEl = document.querySelector('[data-i18n="reserve.notice"]');
  const ctaEl = document.querySelector('[data-i18n="reserve.cta"]');
  
  if (titleEl) titleEl.textContent = reserve.title;
  if (subtitleEl) subtitleEl.textContent = reserve.subtitle;
  if (noticeEl) noticeEl.textContent = reserve.notice;
  if (ctaEl) ctaEl.textContent = reserve.cta;
}

function updateFooter(data) {
  if (!data.footer) return;
  
  const footer = data.footer;
  
  // Update footer elements
  const addressEl = document.querySelector('[data-footer-address]');
  const hoursEl = document.querySelector('[data-footer-hours]');
  const naverEl = document.querySelector('[data-footer-naver]');
  
  if (addressEl) addressEl.textContent = footer.address;
  if (hoursEl) hoursEl.textContent = footer.hours;
  if (naverEl) naverEl.textContent = footer.naver;
}
