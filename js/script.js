const swiper1 = new Swiper(".slider-wrapper", {
  // Optional parameters
  //   direction: "vertical",
  loop: true,
  gabCursor: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //   responsive positioning
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    620: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
  },

  // And if we need scrollbar
  //   scrollbar: {
  //     el: ".swiper-scrollbar",
  //   },
});

const swiper2 = new Swiper(".slider-wrapper2", {
  // Optional parameters
  //   direction: "vertical",
  loop: true,
  gabCursor: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: ".slider-wrapper2 .swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".slider-wrapper2 .swiper-button-next",
    prevEl: ".slider-wrapper2 .swiper-button-prev",
  },

  //   responsive positioning
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },

  // And if we need scrollbar
  //   scrollbar: {
  //     el: ".swiper-scrollbar",
  //   },
});
