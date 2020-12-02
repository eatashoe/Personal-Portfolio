/* jshint esversion: 6*/
/* jshint browser: true */

// Select DOM Items

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItem = document.querySelectorAll('.nav-item');

const moon = document.querySelector('.fa-moon');
const sun = document.querySelector('.fa-sun');
const background = document.querySelector('body');
const a = document.querySelectorAll('a');
const beyond = document.querySelector('.beyond');
const tryBtn = document.querySelectorAll('.try');


//Changes to light or dark mode

let day = false;

moon.addEventListener('click' , dayNightToggle);
sun.addEventListener('click', dayNightToggle);


if(sessionStorage.getItem('d') === 'dark') {
    var i;
    moon.classList.remove('rotate');
    sun.classList.remove('unrotate');    
    background.style.backgroundPosition = '0% 0%';
    background.style.color = '#fff';
    menuNav.style.borderBottomColor = '#fff';
    if(beyond !== null){
        beyond.style.filter = 'invert(100%)';
        for(i = 0; i < tryBtn.length; i++){
            tryBtn[i].style.borderColor = '#fff';
            tryBtn[i].classList.remove('change');
        }
    }
    
    for(i = 0; i < a.length; i++){
        a[i].style.color = '#fff';
    }
    day = false;
    
}
else if(sessionStorage.getItem('d') === 'light'){       
    var i;
    moon.classList.add('rotate');
    sun.classList.add('unrotate');
    background.style.backgroundPosition = '100% 95%';
    background.style.color = '#000';
    menuNav.style.borderBottomColor = '#000';
    if(beyond !== null){
        beyond.style.filter = 'invert(0%)';
        for(i = 0; i < tryBtn.length; i++){
            tryBtn[i].style.borderColor = '#000';
            tryBtn[i].classList.add('change');
        }
    }
    
   for(i = 0; i < a.length; i++){
        a[i].style.color = '#000';
    }
    day = true;
    
}

//light dark toggle button
function dayNightToggle(){
    var i;
    if(!day){
        
        
        moon.classList.add('rotate');
        sun.classList.add('unrotate');
        background.classList.add('night');
        setTimeout(function() {
            background.style.backgroundPosition = '100% 95%';
        },500);
        background.classList.remove('night');
        background.style.color = '#000';
        menuNav.style.borderBottomColor = '#000';
        if(beyond !== null){
            beyond.style.filter = 'invert(0%)';
            for(i = 0; i < tryBtn.length; i++){
                tryBtn[i].style.borderColor = '#000';
                tryBtn[i].classList.add('change');
            }
        }
        
       for(i = 0; i < a.length; i++){
            a[i].style.color = '#000';
        }
        
        day = true;
        sessionStorage.setItem('d', 'light');
    }
    else{
        
        moon.classList.remove('rotate');
        sun.classList.remove('unrotate');   
        background.classList.add('day');
        setTimeout(function() {
            background.style.backgroundPosition = '0% 0%';
        },500);
        background.classList.remove('day');
        background.style.color = '#fff';
        menuNav.style.borderBottomColor = '#fff';
        if(beyond !== null){
            beyond.style.filter = 'invert(100%)';
            for(i = 0; i < tryBtn.length; i++){
                tryBtn[i].style.borderColor = '#fff';
                tryBtn[i].classList.remove('change');
            }
        }
        
        for(i = 0; i < a.length; i++){
            a[i].style.color = '#fff';
        }
        day = false;
        sessionStorage.setItem('d', 'dark');
    }
    
}

window.addEventListener('resize', function () { 
    "use strict";
    window.location.reload(); 
});
