const select = document.querySelectorAll('.select');
const menu = document.querySelectorAll('.pref__dropdown-menu');

if (select.length > 0) {
  select.forEach(selectItem => {
    selectItem.addEventListener('click', handleClick);
  });
  function handleClick(e) {

    let el = e.target.querySelector('.pref__dropdown-menu');  
    if (el) {
      el.classList.toggle('active');
    }
  }
}

new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    
    type: 'fraction'
  },
  slidesPerView: 3,
  spaceBetween: 60,

  breakpoints: {
    320: {
      centeredSlides: true,
      slidesPerView: 1.1,
      spaceBetween: 20,
    },
    920: {
      slidesPerView: 3
    }
  },

});

const burger = document.querySelector('.menu__icon');
if (burger) {
  const menuBody = document.querySelector('.header__mobile');
  burger.addEventListener('click', function(e) {
    document.body.classList.toggle('lock');
    burger.classList.toggle('active');
    menuBody.classList.toggle('active');
  });
}

// let scrollpos = window.scrollY;
// const fixed = document.querySelector('.header__nav');

// window.addEventListener('scroll', function() {
//   scrollpos = window.scrollY;
//   if (scrollpos > 0) {
//     fixed.classList.add('active');
//   } else {
//     fixed.classList.remove('active');
//   }
// })