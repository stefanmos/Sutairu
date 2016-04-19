// Dropdowns

(function() {
  $('.dropdown').click(function(e) {
  	$('.dropdown').removeClass('open');
    $(this).toggleClass('open');
    e.stopPropagation()
  });

  $('.dropdown a').click(function(e) {
    $('.dropdown').removeClass('open');
    e.stopPropagation()
  });

  $(document).click(function(e) {
    $('.dropdown').removeClass('open');
    e.stopPropagation()
  });

}).call(this);





// Tabs

$(document).ready(function(){

  $('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  })

})





// animate.css

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

$('#Animate-1').animateCss('fadeIn');
$('#Animate-2').animateCss('fadeIn');
$('#Animate-3').animateCss('fadeIn');




// Equalizer
/* Thanks to CSS Tricks for pointing out this bit of jQuery http://css-tricks.com/equal-height-blocks-in-rows/ */

equalheight = function(equalize){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(equalize).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

$(window).load(function() {
  equalheight('.equalize div');
});


$(window).resize(function(){
  equalheight('.equalize div');
});
