/* jshint esversion: 6*/
/* jshint browser: true */

var canvas = document.getElementById("game");
const bodyW = document.querySelector('body').offsetWidth;
const bodyH = document.querySelector('body').offsetHeight;

canvas.setAttribute('width', bodyW - 5);
canvas.setAttribute('height', bodyH - 5);
var context = canvas.getContext("2d");

var spaceship =
{
    color: "pink",
    width: 8,
    height: 22,
    position:
    {
        x: bodyW - 50,
        y: bodyH - 5 0
    },
    velocity:
    {
        x: 0,
        y: 0
    },
    angle: Math.PI / 2,
    engineOn: false,
    rotatingLeft: false,
    rotatingRight: false,
    crashed: false
};

function drawSpaceship()
{
    context.save();
    context.beginPath();
    context.translate(spaceship.position.x, spaceship.position.y);
    context.rotate(spaceship.angle);
    context.rect(spaceship.width * -0.5, spaceship.height * -0.5, spaceship.width, spaceship.height);
    context.fillStyle = spaceship.color;
    context.fill();
    context.closePath();

    // Draw the flame if engine is on
    if(spaceship.engineOn)
    {
        context.beginPath();
        context.moveTo(spaceship.width * -0.5, spaceship.height * 0.5);
        context.lineTo(spaceship.width * 0.5, spaceship.height * 0.5);
        context.lineTo(0, spaceship.height * 0.5 + Math.random() * 10);
        context.lineTo(spaceship.width * -0.5, spaceship.height * 0.5);
        context.closePath();
        context.fillStyle = "orange";
        context.fill();
    }
    context.restore();
}

function updateSpaceship()
{
    if(spaceship.rotatingRight)
    {
        spaceship.angle += (Math.PI / 180)*2;
    }
    else if(spaceship.rotatingLeft)
    {
        spaceship.angle -= (Math.PI / 180)*2;
    }

    if(spaceship.engineOn)
    {
        spaceship.position.x += Math.sin(spaceship.angle)*2;
        spaceship.position.y -= Math.cos(spaceship.angle)*2;
    }
}

function outtaBounds(){

    if(spaceship.position.x > canvas.width){
        spaceship.position.x = 0;
    }
    if(spaceship.position.y > canvas.height){
        spaceship.position.y = 0;
    }
    if(spaceship.position.x < 0){
        spaceship.position.x = canvas.width;
    }
    if(spaceship.position.y < 0){
        spaceship.position.y = canvas.height;
    }

}

function draw()
{
    
    // Clear entire screen
    context.clearRect(0, 0, canvas.width, canvas.height);

    updateSpaceship();
    outtaBounds();
    window.console.log(spaceship.velocity);
    // Begin drawing
    drawSpaceship();
    /* other draw methods (to add later) */

    requestAnimationFrame(draw);
    
}

function keyLetGo(event)
{
    window.console.log(spaceship);
    switch(event.keyCode)
    {
        case 37:
            // Left Arrow key
            spaceship.rotatingLeft = false;
            break;
        case 39:
            // Right Arrow key
            spaceship.rotatingRight = false;
            break;
        case 38:
            // Up Arrow key
            spaceship.engineOn = false;
            break;
    }
}

document.addEventListener('keyup', keyLetGo);

function keyPressed(event)
{
    window.console.log(spaceship);
    switch(event.keyCode)
    {
        case 37:
            // Left Arrow key
            spaceship.rotatingLeft = true;
            break;
        case 39:
            // Right Arrow key
            spaceship.rotatingRight = true;
            break;
        case 38:
            // Up Arrow key
            spaceship.engineOn = true;
            break;
    }
}

document.addEventListener('keydown', keyPressed);

draw();