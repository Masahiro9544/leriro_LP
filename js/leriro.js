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

// 販売ステータスの更新
function updateSaleStatus() {
    const statusElement = document.getElementById('sale-status');
    if (!statusElement) return;

    // 現在の日付を取得
    const today = new Date();
    today.setHours(0, 0, 0, 0); // 時間をリセットして日付のみで比較

    // 基準日を設定
    const startDate = new Date('2025-11-21');
    startDate.setHours(0, 0, 0, 0);

    const endDate = new Date('2025-12-22');
    endDate.setHours(0, 0, 0, 0);

    // 日付に応じてテキストと色を変更
    if (today < startDate) {
        // 2025/11/20より前の場合
        statusElement.textContent = '受付開始前';
        statusElement.style.color = '#333333'; // 黒
    } else if (today >= startDate && today < endDate) {
        // 2025/11/20~2025/12/20の間の場合
        statusElement.textContent = '予約受付中';
        statusElement.style.color = '#00509D'; // 青
    } else {
        // 2025/12/20以降の場合
        statusElement.textContent = '受付終了';
        statusElement.style.color = '#999999'; // グレー
    }
}

// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', updateSaleStatus);