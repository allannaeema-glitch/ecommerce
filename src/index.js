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


document.querySelectorAll('[data-product-quantity]').forEach(item => {

    item.addEventListener('change', () => {

        const newQuantity = item.value;

        const parent = item.closest('[data-product-info]');

        const pricePerUnit = parent.getAttribute('data-product-price');

        const total = newQuantity * pricePerUnit;

        parent.querySelector('.total-price-for-product').innerHTML = total + "$";

    });

});

function updateTotalPrice() {

    let totalPriceForAllProducts = 0;

    document.querySelectorAll('[data-product-info]').forEach(product => {

        const productPrice = Number(product.getAttribute('data-product-price'));

        const quantity = Number(
            product.querySelector('[data-product-quantity]').value
        );

        const totalPriceForProduct = productPrice * quantity;

        product.querySelector('.total-price-for-product').innerHTML =
            totalPriceForProduct + "$";

        totalPriceForAllProducts += totalPriceForProduct;
    });

    document.getElementById('total-price-for-all-product').innerHTML =
        totalPriceForAllProducts + "$";
}


/* تحديث الكمية */
document.querySelectorAll('[data-product-quantity]').forEach(item => {
    item.addEventListener('change', updateTotalPrice);
});


/* حذف المنتج */
document.querySelectorAll('[data-action="remove"]').forEach(button => {

    button.addEventListener('click', function () {

        const productRow = this.closest('[data-product-info]');

        productRow.remove();

        updateTotalPrice();
    });

});


/* تشغيل أول مرة */
updateTotalPrice();

updateTotalPrice();

console.log("أهلًا بكم في متجر عربي")

console.log("أهلًا بكم في أكاديمية حسوب")