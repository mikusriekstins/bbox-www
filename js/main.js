
document.addEventListener("DOMContentLoaded", function(event) {
  Barba.Pjax.start();

  var FadeTransition = Barba.BaseTransition.extend({
    start: function() {
      Promise
        .all([this.newContainerLoading, this.fadeOut()])
        .then(this.fadeIn.bind(this));
    },

    fadeOut: function() {
      return $('.overlay').animate({ top: '100%' }).promise();
    },

    fadeIn: function() {
      var _this = this;
      var $el = $(this.newContainer);

      $(this.oldContainer).hide();
      $(window).scrollTop(0);

      $el.css({ visibility : 'visible' });

      $('.overlay').animate({ top: '200%' }, 400, function() {
        $('.overlay').css({ top: 0 });
        _this.done();
      });
    },
  });

  Barba.Pjax.getTransition = function() {
    return FadeTransition;
  };
});

let cards = document.querySelectorAll('.card');
let over = false;
let mouseMove = false;

for (var i=0; i<cards.length; i++) {
  let card = cards[i];

  card.addEventListener('mouseover', function(e) {
    over = card;
  });

  card.addEventListener('mouseout', function(e) {
    over.style.transform = 'translateZ(100px) perspective(2000px) rotateY(0) rotateX(0)';
    over = false;
  });
}

window.addEventListener('mousemove', function (e) {
  if(over) {
    let xAxis = (over.offsetWidth - (e.pageX - over.offsetLeft + over.offsetWidth/2)) / 40;
    let yAxis = (over.offsetHeight - (e.pageY - over.offsetTop + over.offsetHeight/2)) / -30;
    over.style.transform = 'translateZ(100px) perspective(2000px) rotateY('+ xAxis +'deg) rotateX('+ yAxis +'deg)';
  }
});

let navToggles = document.querySelectorAll('[data-nav-toggle]');
for (var i=0; i<navToggles.length; i++) {
  let navToggle = navToggles[i];
  navToggle.addEventListener('click', function(){
    document.querySelector('.nav').classList.toggle('is-active');
    document.querySelector('body').classList.toggle('is-fixed');
  });
}
