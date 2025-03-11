


// let slideIndices = {
//     '2021': 1,
//     '2022': 1,
//     '2023': 1
//   };
//   const slidesPerPage = 3;

//   document.addEventListener('DOMContentLoaded', function() {
//       // Initially show the 2021 timeline and hide others
//       showYearTimeline('2021');

//       // Add event listeners to year buttons
//       const yearButtons = document.querySelectorAll('.year-button');
//       yearButtons.forEach(button => {
//           button.addEventListener('click', function() {
//               const year = this.dataset.year;
//               showYearTimeline(year);

//               // Remove 'active' class from all buttons and add it to the clicked button
//               yearButtons.forEach(btn => btn.classList.remove('active'));
//               this.classList.add('active');
//           });
//       });
//   });

//   function showYearTimeline(year) {
//       // Hide all year timelines
//       const yearTimelines = document.querySelectorAll('.year-timeline');
//       yearTimelines.forEach(timeline => {
//           timeline.style.display = 'none';
//       });

//       // Show the selected year's timeline
//       const selectedTimeline = document.getElementById('year-' + year);
//       if (selectedTimeline) {
//           selectedTimeline.style.display = 'block';
//       }

//       // Initialize the slider for the selected year
//       showDivs(slideIndices[year], year);
//   }

//   function plusDivs(n, year) {
//     slideIndices[year] += n;
//     showDivs(slideIndices[year], year);
//   }

//   function showDivs(n, year) {
//     var slides = document.querySelectorAll('#year-' + year + ' .mySlides');
//     if (n > slides.length - slidesPerPage + 1) {slideIndices[year] = 1;}
//     if (n < 1) {slideIndices[year] = slides.length - slidesPerPage + 1;}

//     for (let i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     for (let i = slideIndices[year] - 1; i < slideIndices[year] + slidesPerPage - 1; i++) {
//       if (slides[i]) {
//         slides[i].style.display = "block";
//       }
//     }
//   }



// const slider = document.querySelector(".testimonials");
// const prevBtn = document.getElementById("prev");
// const nextBtn = document.getElementById("next");

// const testimonials = Array.from(slider.children);
// const visibleItems = 4; // Luôn hiển thị 4 phần tử
// let currentIndex = 0;

// // Nhân đôi danh sách để tạo hiệu ứng vòng lặp mượt mà
// testimonials.forEach((item) => {
//   let clone = item.cloneNode(true);
//   slider.appendChild(clone);
// });

// const testimonialWidth = testimonials[0].offsetWidth + 20; // Lấy width + margin
// const totalItems = slider.children.length; // Số lượng item đã nhân đôi

// // Cập nhật vị trí ban đầu (dịch sang trái để tạo hiệu ứng vô hạn)
// slider.style.transform = `translateX(${-currentIndex * testimonialWidth}px)`;

// function updateSlider() {
//   slider.style.transition = "transform 0.5s ease-in-out";
//   slider.style.transform = `translateX(${-currentIndex * testimonialWidth}px)`;
// }

// // Xử lý nút Next
// nextBtn.addEventListener("click", () => {
//   currentIndex++;

//   updateSlider();

//   // Khi đến cuối danh sách, ngay lập tức nhảy về đầu mà không gây giật
//   if (currentIndex >= totalItems - visibleItems) {
//     setTimeout(() => {
//       slider.style.transition = "none";
//       currentIndex = 0;
//       updateSlider();
//     }, 500);
//   }
// });

// // Xử lý nút Prev
// prevBtn.addEventListener("click", () => {
//   if (currentIndex === 0) {
//     slider.style.transition = "none";
//     currentIndex = totalItems - visibleItems;
//     updateSlider();
//     setTimeout(() => {
//       slider.style.transition = "transform 0.5s ease-in-out";
//       currentIndex--;
//       updateSlider();
//     }, 50);
//   } else {
//     currentIndex--;
//     updateSlider();
//   }
// });


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

  // Animation để di chuyển logo
  setTimeout(() => {
   logo.style.left = `-${logoWidth + logoSpacing}px`; // Di chuyển sang trái

   // Khi animation kết thúc, ẩn logo và hiển thị logo tiếp theo
   setTimeout(() => {
    logo.classList.remove('active'); // Ẩn logo
    currentIndex++;
    showNextLogo(); // Hiển thị logo tiếp theo
   }, 500); // Thời gian animation (phải khớp với CSS transition)

  }, 10); // Đợi một chút để kích hoạt animation
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
