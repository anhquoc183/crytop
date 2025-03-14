

const logoContainer = document.querySelector('.logo-container');
const logos = document.querySelectorAll('.logo');
const containerWidth = logoContainer.offsetWidth;
const logoWidth = 150;
const logoSpacing = 20;
let currentIndex = 0;

// Nhân đôi logos để tạo hiệu ứng vô hạn
const cloneLogos = () => {
    const logosHTML = logoContainer.innerHTML;
    logoContainer.innerHTML += logosHTML;
}
cloneLogos();

function animateLogos() {
    const totalLogos = logos.length * 10; // Tính cả bản clone
    const totalWidth = (logoWidth + logoSpacing) * totalLogos;
    
    let position = 0;
    
    function frame() {
        position -= 1; // Tốc độ scroll (điều chỉnh theo nhu cầu)
        if (position <= -totalWidth / 2) {
            position = 0; // Reset vị trí khi hoàn thành 1 vòng
        }
        logoContainer.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(frame);
    }
    
    requestAnimationFrame(frame);
}

animateLogos();
