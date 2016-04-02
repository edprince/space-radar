var locations = [
  [203, 67],
  [234, 383],
  [231, 123],
  [331, 223],
  [432, 323]
];

var canvas = document.getElementById('radar');
var ctx = canvas.getContext("2d");
var grdTopBottom = ctx.createLinearGradient(0,150,0,0)
var grdLeftRight = ctx.createLinearGradient(250, 20,150,150)

grdTopBottom.addColorStop(0,"black");
grdTopBottom.addColorStop(1,"#004800");

grdLeftRight.addColorStop(0, "green");
grdLeftRight.addColorStop(1, "transparent");

// Fill with gradient
ctx.fillStyle = grdTopBottom;
ctx.fillRect(0,0,500,500);

ctx.moveTo(250,0);
ctx.lineTo(250,500);
ctx.stroke();

ctx.moveTo(0,250);
ctx.lineTo(500,250);
ctx.strokeStyle = '#004800';
ctx.stroke();

ctx.beginPath();
ctx.arc(250,250,200,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(250,250,100,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(250,250,25,0,2*Math.PI);
ctx.stroke();

for(i = 0; i < locations.length; i++) {
  console.log(locations[i][0]);
  ctx.beginPath();
  ctx.arc(locations[i][0],locations[i][1],4,0,2*Math.PI);
  ctx.fillStyle = 'green';
  ctx.fill();
}



ctx.moveTo(250,250);
ctx.lineTo(250,0);
ctx.lineTo(100,0);
ctx.fillStyle = grdLeftRight;
ctx.fill();

