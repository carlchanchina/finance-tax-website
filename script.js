// 页面加载动画
document.addEventListener('DOMContentLoaded', function() {
    // 初始化页面元素
    initPage();
    
    // 检测微信环境
    checkWechatEnvironment();
    
    // 绑定事件监听器
    setupEventListeners();
});

function initPage() {
    // 添加加载动画
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    `;
    document.body.appendChild(loader);
    
    // 页面加载完成后移除加载动画
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 300);
        }, 500);
    });
}

function checkWechatEnvironment() {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        // 微信环境特殊处理
        document.body.classList.add('wechat-browser');
    }
}

function setupEventListeners() {
    // 服务卡片点击效果
    const serviceCards = document.querySelectorAll('.services-section .card');
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('active');
        });
    });

    // 导航栏滚动效果
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
}

// 添加样式到页面
const style = document.createElement('style');
style.textContent = `
    .page-loader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.3s ease;
    }
    
    .navbar.scrolled {
        background: rgba(255, 255, 255, 0.9) !important;
        backdrop-filter: blur(10px);
    }
    
    .services-section .card.active {
        border: 2px solid var(--secondary-color);
    }
`;
document.head.appendChild(style);
