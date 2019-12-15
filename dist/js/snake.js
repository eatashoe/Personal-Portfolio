/* jshint esversion: 6*/
/* jshint browser: true */
import { gameWidth, gameHeight} from './canvas.js';

export default class Snake{
    
    constructor(gameWidth, gameHeight){
        
        this.s = [];
        this.block = {
            width : 20,
            height : 20
        };
        this.s.push(this.block);
        
        this.width = 20;
        this.height = 20;
        
        
        this.maxSpeed = 0.25;
        this.xSpeed = 0;
        this.ySpeed = 0;
        
        this.position = {
            x : gameHeight/2 - this.width/2,
            y : gameHeight - this.height - 20,
        };
        
    }
    
    
    
    draw(ctx){
        
        ctx.fillStyle = "#ffc0cb";
        
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        
    }
    
    update(deltaTime){
        
        if (!deltaTime) return;
        
        
        this.position.x += this.xSpeed * deltaTime;
        this.position.y += this.ySpeed * deltaTime;
        
        if(this.position.x <= 0 || this.position.x >= gameWidth - this.width){
            this.xSpeed = 0;
            
        }
        
        if (this.position.y <= 0 || this.position.y >= gameHeight - this.height){
            this.ySpeed = 0;
        }
        
    }
    
    moveLeft(){

        if(this.position.x <= 0){
            this.xSpeed=0;
        }
        else{
            this.xSpeed = -this.maxSpeed;
            this.ySpeed = 0;
        }
    }
    
    moveRight(){
        if(this.position.x >= gameHeight - this.height){
            this.xSpeed=0;
        }
        else{
            this.xSpeed = this.maxSpeed;
            this.ySpeed = 0;
        }
    }
    
    moveDown(){
        if(this.position.y >= gameHeight - this.height){
            this.ySpeed=0;
        }
        else{
            this.ySpeed = this.maxSpeed;
            this.xSpeed = 0;
        }
    }
    
    moveUp(){
        if(this.position.y <= 0){
            this.ySpeed=0;
        }
        else{
            this.ySpeed = -this.maxSpeed;
            this.xSpeed = 0;
        }
    }
    
    stop(){
        this.xSpeed = 0;
        this.ySpeed = 0;
    }
}


