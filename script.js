function fillCanvas() {
  var gridWall = document.getElementById("gridWall");

  var context = gridWall.getContext("2d");
  //console.log(context);

  var canvasWidth = gridWall.width;
  var canvasHeight = gridWall.height;

  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, canvasWidth, canvasHeight);

  context.strokeStyle = "#cccccc";
  context.lineWidth = 1;

  for (var i = 0; i < canvasHeight / 20; i++) {
    context.beginPath();
    context.moveTo(0, i * 20);
    context.lineTo(canvasWidth, i * 20);
    context.stroke();
  }

  for (var i = 0; i < canvasWidth / 20; i++) {
    context.beginPath();
    context.moveTo(i * 20, 0);
    context.lineTo(i * 20, canvasHeight);
    context.stroke();
  }
}

function drawRect() {
  var gridWall = document.getElementById("gridWall");

  var context = gridWall.getContext("2d");

  var rectColor = document.getElementById("color").value;

  context.fillStyle = rectColor;

  var positionX = document.getElementById("positionX").value;
  var positionY = document.getElementById("positionY").value;

  context.fillRect(positionX, positionY, 100, 100);
}
