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

/*// initial state of menu
let showMenu = false;


menuBtn.addEventListener('click', toggleMenu);



function toggleMenu(){

    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        navItem.forEach(item => item.classList.add('show'));
        
        //set menu state
        
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        navItem.forEach(item => item.classList.remove('show'));
        
        //set menu state
        
        showMenu = false;
    }
}*/

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
