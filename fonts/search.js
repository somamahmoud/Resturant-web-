/* global $,alert,consol */
$(function(){
 'use strict';
    //adujst header height
   var myHeader=$('.header');
  myHeader.height($(window).height());
    $(window).resize(function(){
       myHeader.height($(window).height());
    });
  // links Add Active Class
    
 $('.nav li').click(function(){
     $(this).addClass('active').siblings().removeClass('active');
 });
});
