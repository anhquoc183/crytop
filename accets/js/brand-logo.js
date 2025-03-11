
const logoContainer = document.querySelector('.logo-container');
const logos = document.querySelectorAll('.logo');
const containerWidth = logoContainer.offsetWidth;
const logoWidth = 150; // Giả sử chiều rộng logo là 150px
const logoSpacing = 20; // Khoảng cách giữa các logo

let currentIndex = 0;

function showNextLogo() {
 if (currentIndex < logos.length) {
  const logo = logos[currentIndex];
  logo.classList.add('active'); // Hiển thị logo

  // Tính toán vị trí bắt đầu
  logo.style.left = `${containerWidth}px`;

 
  setTimeout(() => {
   logo.style.left = `-${logoWidth + logoSpacing}px`; // Di chuyển sang trái

   // Khi animation kết thúc, ẩn logo và hiển thị logo tiếp theo
   setTimeout(() => {
    logo.classList.remove('active'); // Ẩn logo
    currentIndex++;
    showNextLogo(); // Hiển thị logo tiếp theo
   }, 100); // Thời gian animation (phải khớp với CSS transition)

  }, 0); // Đợi một chút để kích hoạt animation
 }
}

showNextLogo(); // Bắt đầu chuỗi animation

