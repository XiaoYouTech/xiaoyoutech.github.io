// 响应式导航菜单
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // 减去导航栏高度
                behavior: 'smooth'
            });
        }
        
        // 关闭移动端菜单
        if (navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            navbar.style.padding = '0.5rem 20px';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
            navbar.style.padding = '1rem 20px';
        }
    }
});

// 滚动动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 为所有需要动画的元素添加观察
const animatedElements = document.querySelectorAll('.value-card, .feature-card, .screenshot-item, .step, .about-value');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// 产品截图轮播效果（可选）
// 如果需要更复杂的轮播，可以取消注释下面的代码
/*
let currentSlide = 0;
const slides = document.querySelectorAll('.screenshot-item');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// 自动轮播
setInterval(nextSlide, 5000);
*/

// 下载按钮点击统计（可选）
document.querySelectorAll('.btn-primary, .app-store-badge').forEach(btn => {
    btn.addEventListener('click', function() {
        // 这里可以添加事件追踪代码，比如Google Analytics或其他分析工具
        console.log('Download button clicked');
        // 例如：gtag('event', 'click', { 'event_category': 'download', 'event_label': this.textContent.trim() });
    });
});

// 页面加载完成后的初始化
window.addEventListener('DOMContentLoaded', () => {
    console.log('MindGuard website loaded');
    // 可以添加其他初始化代码
});

// 添加加载动画
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.display = 'none';
    }
});