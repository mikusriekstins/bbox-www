
$(document).ready(function(){
  var visuals = new Array();

  $('[data-vivus]').each(function(index){
    visuals[index] = new Vivus($(this).attr('id'), {
      duration: $(this).attr('data-vivus'),
      start: 'manual'
    });
  });

  // Smooth scroll on click
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 100
    }, 500);
  });



  // on scroll
  $(window).scroll(function(){
    for(var i=0; i<visuals.length; i++) {
      var el = $(visuals[i].el);
      var elTop = el.offset().top + 400;
      var elBot = el.offset().top + el.outerHeight() - 400;

      if (elTop < $(window).scrollTop() + $(window).height() && elBot > $(window).scrollTop()) {
        visuals[i].play();
      }
    }
  });
});

