const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

//rectangle
ctx.fillStyle = 'green';
ctx.fillRect(10,10,150,100);

//circle
ctx.arc(300,300,100,0,Math.PI*2);
ctx.fill();

//line
ctx.beginPath();
ctx.strokeStyle = 'orange';
ctx.moveTo(10,10);
ctx.lineTo(300,300);
ctx.stroke();

//text
ctx.font = '30px Arial';
ctx.fillStyle = 'blue';
ctx.fillText("Hello World",300,100,300);