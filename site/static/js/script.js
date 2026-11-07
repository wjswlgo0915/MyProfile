// Generates floating circles for background
document.addEventListener('DOMContentLoaded', function() {
    const bgAnimation = document.getElementById('bgAnimation');
    
    for (let i = 0; i < 10; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        
        // Random size between 50px and 200px
        const size = Math.random() * 150 + 50;
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        
        // Random position
        circle.style.left = `${Math.random() * 100}%`;
        circle.style.top = `${Math.random() * 100}%`;
        
        // Random animation duration
        circle.style.animationDuration = `${Math.random() * 10 + 20}s`;
        circle.style.animationDelay = `${Math.random() * 12}s`;
        
        bgAnimation.appendChild(circle);
    }

    function updateColors() {
      document.documentElement.style.setProperty('--text-color', '#493C41');
      document.documentElement.style.setProperty('--icon-color', '#A66A77');
    }
    updateColors();
});