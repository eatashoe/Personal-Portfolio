/* jshint esversion: 6*/
/* jshint browser: true */

const bodyW = document.querySelector('body').offsetWidth;
const bodyH = document.querySelector('body').offsetHeight;
import Snake from './snake.js';
import InputHandler from './input.js';


let canvas = document.getElementById('gameScreen');
canvas.setAttribute('width', bodyW - 5);
canvas.setAttribute('height', bodyH - 5);
let ctx = canvas.getContext('2d');

let gameWidth = bodyW;
let gameHeight = bodyH;

export{ gameWidth, gameHeight};

let snake = new Snake(gameWidth, gameHeight);

snake.draw(ctx);

new InputHandler(snake);

let lastTime = 0;

function gameLoop(timeStamp){
    
    ctx.clearRect(0,0,bodyW,bodyH);
    
    let deltaTime = timeStamp - lastTime;
    
    
    lastTime = timeStamp;
    
    snake.update(deltaTime);
    
    snake.draw(ctx);
    
    requestAnimationFrame(gameLoop);
}

gameLoop();