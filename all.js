$(document).ready(function () {

  // 下拉式選單 //  
  $('.dropdown').click(function(event) {
    /* Act on the event */
    event.preventDefault();
    $('.dropdown').toggleClass('active');
    $('.dropdown-open').slideToggle();
  });

  
  // swiper banner //  
  var swiper = new Swiper('.swiper-container', {
    spaceBetween: 50,
    centeredSlides: true,
    loop: true,
    autoplay: {

      delay: 4500,
      disableOnInteraction: false,
      
    },
    pagination: {

      el: '.swiper-pagination',
      clickable: true,
      
    },
    navigation: {

      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      
    },
  });

  // top //  
  $('.top a').click(function(event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 1000);
   });
   
});

