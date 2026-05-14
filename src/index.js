window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js");
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/all.min";
import "./css/style.css";

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(item =>
  new bootstrap.Tooltip(item)
);


document.querySelectorAll('.size-option input[type="radio"]').forEach(item => {
    item.addEventListener('change', () => {
        document.querySelectorAll('.size-option').forEach(i => {
            i.classList.remove("active"); // إزالة الفئة "active" من جميع العناصر
        });
        item.parentNode.parentNode.classList.add("active"); // إضافة الفئة "active" للعنصر الأب للعنصر الأب
    });
});

document.querySelectorAll('.color-option').forEach(option => {
    option.addEventListener('click', function () {

        // إزالة active من الكل
        document.querySelectorAll('.color-option')
            .forEach(el => el.classList.remove('active'));

        // إضافة active للعنصر المختار
        this.classList.add('active');

        // تفعيل الـ radio
        this.querySelector('input').checked = true;
    });
});


document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.add-to-card-plus').forEach(item => {
    item.addEventListener("click", () => {
      alert('تم إضافة المنتج إلى عربة الشراء');
    });
  });
});


console.log("أهلًا بكم في متجر عربي")

console.log("أهلًا بكم في أكاديمية حسوب")