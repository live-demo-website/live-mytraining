(function($){
  "use strict";
  function init(){
    // Hide loading screen after assets are ready.
    setTimeout(function(){ $('#spinner').removeClass('show').css({opacity:0,visibility:'hidden'}); }, 350);

    // Main hero carousel.
    if ($.fn.owlCarousel) {
      $('.header-carousel').owlCarousel({items:1,loop:true,autoplay:true,autoplayTimeout:5500,autoplayHoverPause:true,smartSpeed:900,nav:true,dots:true,navText:['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>']});
      $('.testimonial-carousel').owlCarousel({items:1,loop:true,autoplay:true,autoplayTimeout:5000,smartSpeed:700,nav:true,dots:false,navText:['<i class="bi bi-arrow-left"></i>','<i class="bi bi-arrow-right"></i>'],responsive:{0:{items:1},768:{items:2},992:{items:3}}});
    }

    // Scroll reveal without relying on the missing WOW/Waypoints packages.
    var observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){var el=entry.target;el.classList.add('revealed');observer.unobserve(el);}})},{threshold:.12});
    document.querySelectorAll('.wow').forEach(function(el){observer.observe(el);});

    // Back-to-top button.
    var back=$('.back-to-top');
    $(window).on('scroll',function(){
      var y=window.scrollY||document.documentElement.scrollTop;
      back.toggleClass('show',y>450);
      $('.navbar').toggleClass('shadow',y>40);
    });
    back.on('click',function(e){e.preventDefault();window.scrollTo({top:0,behavior:'smooth'});});

    // Smooth in-page navigation.
    $('a[href^="#"]').on('click',function(e){var id=$(this).attr('href');if(id&&id.length>1&&document.querySelector(id)){e.preventDefault();document.querySelector(id).scrollIntoView({behavior:'smooth',block:'start'});}});

    // Keep demo forms/buttons from navigating away.
    $('form').on('submit',function(e){e.preventDefault();});
  }
  $(window).on('load',init);
})(jQuery);
