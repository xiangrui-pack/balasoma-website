// Language translations
const translations = {
    en: {
        home: 'Home',
        products: 'Products',
        about: 'About',
        contact: 'Contact',
        hero_title: 'Redefine Your Beauty',
        hero_subtitle: 'Premium skincare and cosmetics crafted for the modern you',
        shop_now: 'Shop Now',
        featured_products: 'Featured Products',
        products_desc: 'Discover our carefully curated collection',
        product1_name: 'Radiance Serum',
        product1_desc: 'Brightening essence for luminous skin',
        product2_name: 'Hydra Cream',
        product2_desc: 'Deep hydration for all-day moisture',
        product3_name: 'Silk Cleanser',
        product3_desc: 'Gentle foam cleanser for pure skin',
        product4_name: 'Velvet Lipstick',
        product4_desc: 'Luxurious matte finish in rich colors',
        about_title: 'About Balasoma',
        about_text1: 'Balasoma is a premium beauty brand dedicated to creating high-quality skincare and cosmetics that enhance your natural beauty. Our products are crafted with the finest ingredients and backed by scientific research.',
        about_text2: 'We believe that beauty should be accessible, effective, and enjoyable. Every Balasoma product is designed to deliver visible results while providing a luxurious experience.',
        contact_title: 'Contact Us',
        phone: 'Phone',
        email: 'Email',
        location: 'Location',
        location_text: 'United States',
        footer_tagline: 'Premium Beauty Products'
    },
    zh: {
        home: '首页',
        products: '产品',
        about: '关于我们',
        contact: '联系我们',
        hero_title: '重新定义你的美',
        hero_subtitle: '为现代女性打造的优质护肤和彩妆产品',
        shop_now: '立即购买',
        featured_products: '热门产品',
        products_desc: '探索我们精心挑选的产品系列',
        product1_name: '焕亮精华液',
        product1_desc: '提亮肤色，让肌肤焕发自然光泽',
        product2_name: '水润霜',
        product2_desc: '深层补水，全天持久保湿',
        product3_name: '丝柔洁面乳',
        product3_desc: '温和泡沫洁面，净透肌肤',
        product4_name: '丝绒口红',
        product4_desc: '奢华哑光质地，呈现丰富色彩',
        about_title: '关于 Balasoma',
        about_text1: 'Balasoma 是一个高端美妆品牌，致力于创造高品质的护肤和彩妆产品，提升您的自然美。我们的产品采用最优质成分研制，并得到科学研究的支持。',
        about_text2: '我们相信美应该是触手可及、有效且愉悦的。每一款Balasoma产品都旨在提供可见的效果，同时带来奢华的体验。',
        contact_title: '联系我们',
        phone: '电话',
        email: '邮箱',
        location: '位置',
        location_text: '美国',
        footer_tagline: '高端美妆产品'
    }
};

// Current language
let currentLang = 'en';

// Language switch buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        if (lang !== currentLang) {
            currentLang = lang;
            updateLanguage();
            
            // Update button states
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Save preference
            localStorage.setItem('balasoma_lang', lang);
        }
    });
});

// Update all translations
function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
    
    // Update document title
    if (currentLang === 'zh') {
        document.title = 'Balasoma - 高端美妆产品';
    } else {
        document.title = 'Balasoma - Premium Beauty Products';
    }
}

// Initialize language from saved preference
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('balasoma_lang');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
        updateLanguage();
        
        // Update button states
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === currentLang);
        });
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu li a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
    }
});
