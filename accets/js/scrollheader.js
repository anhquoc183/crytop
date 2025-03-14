// Hàm để cập nhật màu nền của header
function updateHeaderColor() {
    let header = document.querySelector(".header");
    let hero = document.querySelector(".hero");

    // Lấy màu nền của hero
    let heroBgColor = window.getComputedStyle(hero).backgroundColor;

    // Đặt màu nền của hero cho header ngay khi trang tải
    header.style.backgroundColor = heroBgColor;

    // Kiểm tra vị trí scroll
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}

// Gọi hàm khi trang được tải
document.addEventListener("DOMContentLoaded", updateHeaderColor);

// Gọi hàm khi có sự kiện kéo chuột
window.addEventListener("scroll", updateHeaderColor);
