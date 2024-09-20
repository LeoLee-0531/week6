import "./assets/scss/all.scss";

// swiper
const swiper = new Swiper(".swiperBlogs", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  pagination: {
    el: ".swiper-pagination-custom",
    type: "fraction",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
});

const swiperPopular = new Swiper(".swiperPopular", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 24,

  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
});
