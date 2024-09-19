import './assets/scss/all.scss';

// swiper
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 48,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev"
  },
  pagination: {
    el: ".swiper-pagination-custom",
    type: "fraction"
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2
    }
  }
});