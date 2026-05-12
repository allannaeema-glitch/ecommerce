window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js");
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/all.min";
import "./css/style.css";

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(item =>
  new bootstrap.Tooltip(item)
);


document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.add-to-card-plus').forEach(item => {
    item.addEventListener("click", () => {
      alert('تم إضافة المنتج إلى عربة الشراء');
    });
  });
});


console.log("أهلًا بكم في متجر عربي")

console.log("أهلًا بكم في أكاديمية حسوب")