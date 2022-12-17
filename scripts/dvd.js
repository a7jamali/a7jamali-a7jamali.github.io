var yellowDiv = document.createElement('div');
yellowDiv.style.width = '500px';
yellowDiv.style.height = '500px';
yellowDiv.style.backgroundColor = 'yellow';
yellowDiv.style.position = 'relative';
document.body.appendChild(yellowDiv);

var blackDiv = document.createElement('div');
blackDiv.style.width = '100px';
blackDiv.style.height = '100px';
blackDiv.style.backgroundColor = 'black';
blackDiv.style.position = 'absolute';
yellowDiv.appendChild(blackDiv);


var x = 0;
var y = 0;
var xDirection = 1;
var yDirection = 1;

var moveBlackDiv = function() {
  x += xDirection;
  y += yDirection;
  if (x >= 400) {
    xDirection = -1;
  } else if (x <= 0) {
    xDirection = 1;
  }
  if (y >= 400) {
    yDirection = -1;
  } else if (y <= 0) {
    yDirection = 1;
  }
  blackDiv.style.left = x + 'px';
  blackDiv.style.top = y + 'px';
  window.requestAnimationFrame(moveBlackDiv);
};

moveBlackDiv();

var x = Math.floor(Math.random() * 400);
var y = Math.floor(Math.random() * 400);
var xDirection = Math.random() > 0.5 ? 1 : -1;
var yDirection = Math.random() > 0.5 ? 1 : -1;