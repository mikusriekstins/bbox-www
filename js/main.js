
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
