function getRandomValue(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function Point(x, y) {
  this.x = x;
  this.y = y;
}
