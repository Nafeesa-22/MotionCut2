const swiper = new Swiper('.slider-wrapper', {
  loop: false,
  grabCursor: true,
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },

    // 816: {
    //   slidesPerView: 2
    // },

    768: {
      slidesPerView: 2
    },

    1024: {
      slidesPerView: 3
    }
  },

  on: {
    init: function () {
      const isMobileOrTablet = window.innerWidth <= 1024;
      if (isMobileOrTablet) {
        // Enable swipe functionality for mobile/tablet
        this.params.touchEventsTarget = 'container';
        this.params.touchStartPreventDefault = false;
      } else {
        // this.params.touchEventsTarget = 'none';
        this.params.simulateTouch = true;
        this.params.touchEventsTarget = 'none';
      }
    }
  },

  autoplay: {
    delay: 3000, // The delay between slides (in ms)
    disableOnInteraction: false, // Keep autoplay running after user interaction
  }

});

window.addEventListener('resize', function () {
  swiper.update();
});