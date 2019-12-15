/* jshint esversion: 6*/
/* jshint browser: true */


export default class InputHandler{
    
    constructor(snake){
        document.addEventListener('keydown', (event) => {
            
            
            switch(event.keyCode){
                    
                case 37:
                    snake.moveLeft();
                    break;
                    
                case 38:
                    snake.moveUp();
                    break;
                    
                case 39:
                    snake.moveRight();
                    break;
                    
                case 40:
                    snake.moveDown();
                    break;
                    
            }
        });
            document.addEventListener('keyup', (event) => {
            
            
            switch(event.keyCode){
                    
                case 37:
                    if(snake.xSpeed < 0){
                        snake.stop();
                    }
                    break;
                    
                case 38:
                    if(snake.ySpeed < 0){
                        snake.stop();
                    }
                    break;
                    
                case 39:
                    if(snake.xSpeed > 0){
                        snake.stop();
                    }
                    break;
                    
                case 40:
                    if(snake.ySpeed > 0){
                        snake.stop();
                    }
                    break;
                    
            }
        });
    }
}