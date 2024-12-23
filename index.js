const burgerBtn = document.querySelector('.burger');
const formbtn = document.querySelector('.btn');
const form = document.querySelector('.form-order');

burgerBtn.onclick = function () {
    burgerBtn.classList.toggle('burger--open');
}

formbtn.onclick = function () {
    form.classList.toggle('form-order--success');
}