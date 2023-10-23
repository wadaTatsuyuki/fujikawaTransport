window.addEventListener("DOMContentLoaded", () => {
    const infiniteSlider = new Swiper(".infinite-slider", {
      loop: true,
      loopedSlides: 2,
      slidesPerView: "auto",
      speed: 4000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
    });
  });