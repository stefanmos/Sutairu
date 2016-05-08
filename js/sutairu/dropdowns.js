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
