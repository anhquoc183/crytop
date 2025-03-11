document.addEventListener("DOMContentLoaded", function () {
  
  const yearButtons = document.querySelectorAll(".year-button");

  
  yearButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Xóa class "active" khỏi tất cả các button
      yearButtons.forEach((btn) => btn.classList.remove("active"));

      // Thêm class "active" cho button được click
      this.classList.add("active");

      // Lấy giá trị của data-year từ button được click
      const selectedYear = this.dataset.year;

      // Ẩn tất cả các roadmap_item_content
      const roadmapItemContents = document.querySelectorAll(".roadmap_item_content");
      roadmapItemContents.forEach((content) => {
        content.style.display = "none";
      });

      // Hiển thị các roadmap_item_content tương ứng với năm được chọn
      const roadmapItems = document.querySelectorAll(".roadmap_item");
      roadmapItems.forEach((item) => {
        if (item.id === `year-${selectedYear}`) {
          // Nếu có ID khớp, hiển thị tất cả các roadmap_item_content bên trong
          const contentsInItem = item.querySelectorAll(".roadmap_item_content");
          contentsInItem.forEach((content) => {
            content.style.display = "block";
          });
        } else {
          
          const contentsInItem = item.querySelectorAll(".roadmap_item_content");
          contentsInItem.forEach((content) => {
            content.style.display = "none";
          });
        }
      });
    });
  });

  
  const firstYearButton = document.querySelector(".year-button.active");
  if (firstYearButton) {
    const firstYear = firstYearButton.dataset.year;
    const firstRoadmapItem = document.getElementById(`year-${firstYear}`);
    if (firstRoadmapItem) {
      const contentsInFirstItem = firstRoadmapItem.querySelectorAll(".roadmap_item_content");
      contentsInFirstItem.forEach((content) => {
        content.style.display = "block";
      });
    }
  }
});


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


// document.addEventListener("DOMContentLoaded", () => {
//     const root = document.documentElement;
//     const marqueeElementsDisplayed = getComputedStyle(root)
//         .getPropertyValue("--marquee-elements-displayed").trim();
//     const marqueeContent = document.querySelector("ul.marquee-content");
    
//     // Kiểm tra xem marqueeContent có null không
//     if (!marqueeContent) {
//       console.error("Không tìm thấy phần tử 'ul.marquee-content'");
//       return;
//     }
    
//     root.style.setProperty("--marquee-elements", marqueeContent.children.length);
    
//     for (let i = 0; i < parseInt(marqueeElementsDisplayed); i++) {
//       marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
//     }
//   });
  
// console.log('JavaScript is running!');

// const logoContainer = document.querySelector('.logo-container');
// const logos = document.querySelectorAll('.logo');

// // Nhân đôi các logo để tạo hiệu ứng vô hạn
// logoContainer.innerHTML += logoContainer.innerHTML;

// // Lắng nghe sự kiện hover trên mỗi logo
// logos.forEach(logo => {
//  logo.addEventListener('mouseenter', () => {
//   logoContainer.classList.add('paused'); // Thêm class 'paused' vào container
//   logo.style.opacity = 1; // Làm sáng logo được hover
//  });

//  logo.addEventListener('mouseleave', () => {
//   logoContainer.classList.remove('paused'); // Xóa class 'paused' khỏi container
//   logos.forEach(otherLogo => {
//    otherLogo.style.opacity = 0.5; // Mờ các logo khác
//   });
//  });
// });

// console.log('JavaScript is running!');

// const logoContainer = document.querySelector('.logo-container');
// const logos = document.querySelectorAll('.logo');

// // Nhân đôi các logo để tạo hiệu ứng vô hạn
// logoContainer.innerHTML += logoContainer.innerHTML;

// // Không cần JavaScript cho việc dừng animation, CSS sẽ xử lý

// // Lắng nghe sự kiện hover trên mỗi logo
// logos.forEach(logo => {
//  logo.addEventListener('mouseenter', () => {
//   logo.style.opacity = 1; // Làm sáng logo được hover
//  });

//  logo.addEventListener('mouseleave', () => {
//   logos.forEach(otherLogo => {
//    otherLogo.style.opacity = 0.5; // Mờ các logo khác
//   });
//  });
// });

// const logoContainer = document.querySelector('.logo-container');
// const logos = document.querySelectorAll('.logo');

// // Nhân đôi các logo để tạo hiệu ứng vô hạn
// logoContainer.innerHTML += logoContainer.innerHTML;

// // Lắng nghe sự kiện hover trên mỗi logo
// logos.forEach(logo => {
//  logo.addEventListener('mouseenter', () => {
//   logoContainer.style.animationPlayState = 'paused'; // Dừng animation khi hover
//   logo.style.opacity = 1; // Làm sáng logo được hover
//  });

//  logo.addEventListener('mouseleave', () => {
//   logoContainer.style.animationPlayState = 'running'; // Tiếp tục animation khi rời chuột
//   logos.forEach(otherLogo => {
//    otherLogo.style.opacity = 0.5; // Mờ các logo khác
//   });
//  });
// });
console.log('JavaScript is running!');

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


 


  
  // document.addEventListener("DOMContentLoaded", () => {
  //   const marqueeContent = document.querySelector(".marquee-content");

  //   if (!marqueeContent) {
  //     console.error("Không tìm thấy phần tử '.marquee-content'");
  //     return;
  //   }

  //   // Thêm sự kiện hover vào từng thẻ
  //   marqueeContent.addEventListener("mouseover", (e) => {
  //     if (e.target.tagName === "IMG") {
  //       marqueeContent.classList.add("paused");
  //     } else if (e.target.tagName === "LI") {
  //       marqueeContent.classList.add("paused");
  //     }
  //   });

  //   marqueeContent.addEventListener("mouseout", () => {
  //     marqueeContent.classList.remove("paused");
  //   });
  // });
