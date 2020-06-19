/*window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("mainNav").style.opacity = "0%";
  } else {
    document.getElementById("mainNav").style.opacity = "80%";

	}*/

$(function(){

  var CurrentScroll = 0;
  $(window).scroll(function(event){

      var NextScroll = $(this).scrollTop();

      if (NextScroll > CurrentScroll){
         //write the codes related to down-ward scrolling here
         document.getElementById("mainNav").style.top = "-100px";
      }
      else {
         //write the codes related to upward-scrolling here
         document.getElementById("mainNav").style.top = "0px";
      }

      CurrentScroll = NextScroll;  //Updates current scroll position
  	});
  });