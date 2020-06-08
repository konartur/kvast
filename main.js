$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 5000,
    },
  });

  $(".about-item").each(function () {
    $clamp(this);
  });
});
