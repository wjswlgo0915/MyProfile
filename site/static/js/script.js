
document.addEventListener('DOMContentLoaded', function() {
    const bgAnimation = document.getElementById('bgAnimation');
    if (!bgAnimation) return;

    for (let i = 0; i < 13; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');

        // 하트 크기
        const size = Math.random() * 150 + 50;
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;

        // 가로 위치만 무작위로 설정
        circle.style.left = `${Math.random() * 100}%`;

        // 모든 하트는 화면 아래에서 시작
        circle.style.top = '100%';

        // 14~18초 동안 위로 이동
        const duration = Math.random() * 4 + 14;
        circle.style.animationDuration = `${duration}s`;

        // 첫 화면부터 움직이되 진행 위치를 분산
        circle.style.animationDelay = `-${Math.random() * duration}s`;

        bgAnimation.appendChild(circle);
    }

    function updateColors() {
        document.documentElement.style.setProperty('--text-color', '#493C41');
        document.documentElement.style.setProperty('--icon-color', '#A66A77');
    }
    updateColors();
});
