/* jshint esversion: 6*/
/* jshint browser: true */


const stars = document.getElementById('stars');
const bodyW = document.querySelector('body').offsetWidth;
const bodyH = document.querySelector('body').offsetHeight;

stars.setAttribute('width', bodyW - 5);
stars.setAttribute('height', bodyH - 5);

let ctx = stars.getContext('2d');

let s = [];
for(let i = 0; i < 200; i++){
    s[i] = {
        x: Math.random() * stars.width,
        y: Math.random() * stars.height,
        radius: Math.sqrt(Math.random() * 2),
        alpha: 1.0,
        decreasing: true,
        dRatio: Math.random()*0.05
      };
}

function drawStars(){
    ctx.save();
    for (var i = 0; i < s.length; i++) {
        var star = s[i];
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2*Math.PI);
        ctx.closePath();
        ctx.fillStyle = "rgba(255, 255, 255, " + star.alpha + ")";
        if (star.decreasing === true) {    
            
            star.alpha -= star.dRatio;
            if (star.alpha < 0.1) { 
                star.decreasing = false; }
            }
        else {
       
            star.alpha += star.dRatio;
            if (star.alpha > 0.95) { 
                star.decreasing = true; }
            }
        ctx.fill();
    }
    ctx.restore();
}



function draw()
{
    // Clear entire screen
    ctx.clearRect(0, 0, stars.width, stars.height);

    drawStars();
    requestAnimationFrame(draw);
}
draw();