
const slider = document.querySelector(".testimonials");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const testimonials = Array.from(slider.children);
const visibleItems = 4; 
let currentIndexx = 0;

testimonials.forEach((item) => {
  let clone = item.cloneNode(true);
  slider.appendChild(clone);
}); 

const testimonialWidth = testimonials[0].offsetWidth + 20; 
const totalItems = slider.children.length; 
slider.style.transform = `translateX(${-currentIndexx * testimonialWidth}px)`;

function updateSlider() {
  slider.style.transition = "transform 0.5s ease-in-out";
  slider.style.transform = `translateX(${-currentIndexx * testimonialWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  currentIndexx++;

  updateSlider();

  if (currentIndexx >= totalItems - visibleItems) {
    setTimeout(() => {
      slider.style.transition = "none";
      currentIndexx = 0;
      updateSlider();
    }, 500);
  }
});


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




// const slider = document.querySelector('.testimonials');
// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener('mousedown', (e) => {
//   isDown = true;
//   slider.classList.add('active');
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });

// slider.addEventListener('mouseleave', () => {
//   isDown = false;
//   slider.classList.remove('active');
// });

// slider.addEventListener('mouseup', () => {
//   isDown = false;
//   slider.classList.remove('active');
// });

// slider.addEventListener('mousemove', (e) => {
//   if (!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = (x - startX) * 2; 
//   slider.scrollLeft = scrollLeft - walk;
// });
