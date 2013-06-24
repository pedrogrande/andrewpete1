// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require_tree .

$(document).ready(function() {
       
          // grab the initial top offset of the navigation 
          var sticky_navigation_offset_top = $('#page2').offset().top;
           
          // our function that decides whether the navigation bar should have "fixed" css position or not.
          var sticky_navigation = function(){
              var scroll_top = $(window).scrollTop(); // our current vertical position from the top
               
              // if we've scrolled more than the navigation, change its position to fixed to stick to top,
              // otherwise change it back to relative
              if (scroll_top > sticky_navigation_offset_top) { 
                  // $('body').css({ 'background-image': 'url(assets/gran.jpg)' });
                  $('body').addClass("bg2")
              } else {
                  // $('body').css({ 'background-image': 'url(assets/santiago2.jpg)' });
                  $('body').removeClass("bg2")
                  // $('#small_logo').css({ 'display': 'none' }); 
                  // $('.navbar-inner').css({'background-color': 'rgba(255,255,255,0.8)'});
              }   
          };
           
          // run our function on load
          sticky_navigation();
           
          // and run it again every time you scroll
          $(window).scroll(function() {
               sticky_navigation();
          });
       		

       		$('#scroll-button').click(function() {
       			$('body').animate(650, 3000);
       		});
      });