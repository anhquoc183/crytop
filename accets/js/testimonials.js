
const slider = document.querySelector(".testimonials");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const testimonials = Array.from(slider.children);
const visibleItems = 4; // Luôn hiển thị 4 phần tử
let currentIndexx = 0;

testimonials.forEach((item) => {
  let clone = item.cloneNode(true);
  slider.appendChild(clone);
}); 

const testimonialWidth = testimonials[0].offsetWidth + 20; // Lấy width + margin
const totalItems = slider.children.length; // Số lượng item đã nhân đôi

// Cập nhật vị trí ban đầu (dịch sang trái để tạo hiệu ứng vô hạn)
slider.style.transform = `translateX(${-currentIndexx * testimonialWidth}px)`;

function updateSlider() {
  slider.style.transition = "transform 0.5s ease-in-out";
  slider.style.transform = `translateX(${-currentIndexx * testimonialWidth}px)`;
}

// Xử lý nút Next
nextBtn.addEventListener("click", () => {
  currentIndexx++;

  updateSlider();

  // Khi đến cuối danh sách, ngay lập tức nhảy về đầu mà không gây giật
  if (currentIndexx >= totalItems - visibleItems) {
    setTimeout(() => {
      slider.style.transition = "none";
      currentIndexx = 0;
      updateSlider();
    }, 500);
  }
});

// Xử lý nút Prev
prevBtn.addEventListener("click", () => {
  if (currentIndexx === 0) {
    slider.style.transition = "none";
    currentIndexx = totalItems - visibleItems;
    updateSlider();
    setTimeout(() => {
      slider.style.transition = "transform 0.5s ease-in-out";
      currentIndexx--;
      updateSlider();
    }, 50);
  } else {
    currentIndexx--;
    updateSlider();
  }
});