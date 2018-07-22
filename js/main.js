
let card = document.querySelector('.plate');
let over = false;

card.addEventListener('mouseover', function(e) {
  over = true;
  console.log("in");
});

card.addEventListener('mouseout', function(e) {
  over = false;
  console.log("out");
});

window.addEventListener('mousemove', function(e) {
  if( over) {
    let xAxis = (card.offsetWidth - (e.pageX - card.offsetLeft + card.offsetWidth/2)) / 40;
    let yAxis = (card.offsetHeight - (e.pageY - card.offsetTop + card.offsetHeight/2)) / -30;
    card.style.transform = 'translateZ(100px) perspective(2000px) rotateY('+ xAxis +'deg) rotateX('+ yAxis +'deg)';
  } else {
    card.style.transform = 'translateZ(100px) perspective(2000px) rotateY(0) rotateX(0)';
  }
});
