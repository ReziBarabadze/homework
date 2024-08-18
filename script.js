let burger = document.querySelector('.fa-bars');

let list = document.querySelector('.header_ul');

let xMark = document.querySelector('.fa-xmark');
let box = document.querySelector('.icon_box');
let li = document.querySelector('.header_li')


burger.addEventListener('click', function () {

  burger.classList.toggle('fa-xmark');
    // list.style.display = 'block';
  

});

burger.addEventListener('click', function () {
  list.classList.toggle('header_ul');

});
// burger.addEventListener('click', function () {
//   li.classList.toggle('header_li');

// });