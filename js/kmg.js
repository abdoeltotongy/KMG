$(document).ready(function(){
    'use strict';

    $('.carousel').carousel({
      interval: 500
    });

    
    $('.call .carousel').carousel({
      interval: 100
    });
    
    $('.apartments-model .aside-right-3 img').on('click' , function (){
         $(this).addClass('active').siblings().removeClass('active');
    });
     
         
 /* Scroll To Top  */
     if ($(window).scrollTop() >= 1000 ) 
      {
        $('.scroll-to-top').fadeIn();
      }
     
     else 
      {
        $('.scroll-to-top').fadeOut();
      }

     $('.scroll-to-top').click(function(){
         $('html , body').animate({
             scrollTop: 0
         },1000);
     });  
 });