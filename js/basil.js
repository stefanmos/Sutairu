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
