document.body.append();
let div = document.querySelector('.chess-piece');
function move(e) {
  this.style.position = 'absolute'
  this.style.top = e.clientY - (this.offsetHeight  / 2) + 'px'
  this.style.left = e.clientX - (this.offsetWidth / 2) + 'px'
}

div.addEventListener('mousedown', function() {
  this.addEventListener('mousemove', move, true);
});

window.addEventListener('mouseup', function() {
  div.removeEventListener('mousemove', move, true);
});

const king = document.querySelector('.chess-piece');
const square = document.querySelectorAll('.square');




