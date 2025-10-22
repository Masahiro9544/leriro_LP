// ハンバーガーメニューの開閉
const hamburger = document.querySelector('.hamburger');
const headerRight = document.querySelector('.header-right');
const body = document.body;

// オーバーレイ要素を作成
const overlay = document.createElement('div');
overlay.className = 'overlay';
body.appendChild(overlay);

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    headerRight.classList.toggle('active');
    overlay.classList.toggle('active');
    body.style.overflow = hamburger.classList.contains('active') ? 'hidden' : '';
});

// オーバーレイクリックで閉じる
overlay.addEventListener('click', () => {
    hamburger.classList.remove('active');
    headerRight.classList.remove('active');
    overlay.classList.remove('active');
    body.style.overflow = '';
});

// メニューリンククリックで閉じる
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        headerRight.classList.remove('active');
        overlay.classList.remove('active');
        body.style.overflow = '';
    });
});