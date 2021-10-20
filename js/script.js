'use strict';

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

new WOW().init();

jQuery('.drawer-icon').on('click', function(e) {
  e.preventDefault();

  jQuery('.drawer-icon').toggleClass('is-active');
  jQuery('.drawer-content').toggleClass('is-active');
  jQuery('.drawer-background').toggleClass('is-active');

  return false;
});

jQuery('a[href^="#"]').on('click', function() {

  var header = jQuery('.header').innerHeight();
  var id = jQuery(this).attr('href');
  var position = 0;
  if ( id != '#') {
    position = jQuery(id).offset().top - header;
  }
  jQuery('html,body').animate({
    scrollTop: position
  },
  300);
});

jQuery(window).on('scroll', function() {
  if (100 < jQuery(this).scrollTop()) {
    jQuery('.to-top').addClass('is-show');
  } else {
    jQuery('.to-top').removeClass('.is-show');
  }
});

jQuery('.header_nav li a').on('click', function() {
  jQuery('.header_nav li a').removeClass('is-active');
  jQuery(this).addClass('is-active');
});


jQuery('.qa-box_q').on('click', function() {
  jQuery(this).next().slideToggle();
  jQuery(this).children('.qa_box_icon').toggleClass('is-open');
});

jQuery('.js-close-btn').on('click', function(e) {
  e.preventDefault();  
  var target = jQuery(this).data('target');
  jQuery(target).hide();
});

jQuery('.js-open-btn').on('click', function(e) {
  e.preventDefault();  
  var target = jQuery(this).data('target');
  jQuery(target).show();
});