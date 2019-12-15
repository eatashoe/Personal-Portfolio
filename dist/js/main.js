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


// initial state of menu
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
}

//Changes to light or dark mode

let day = false;

moon.addEventListener('click' , dayNightToggle);
sun.addEventListener('click', dayNightToggle);


if(sessionStorage.getItem('d') === 'dark') {
    var i;
    moon.classList.remove('rotate');
    sun.classList.remove('unrotate');    
    background.style.background = '#2D2D30';
    background.style.color = '#D3D2CF';

    for(i = 0; i < a.length; i++){
        a[i].style.color = '#D3D2CF';
    }
    day = false;
    
}
else if(sessionStorage.getItem('d') === 'light'){       
    var i;
    moon.classList.add('rotate');
    sun.classList.add('unrotate');
    background.style.background = '#fff';
    background.style.color = '#000';

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
        background.style.background = '#fff';
        background.style.color = '#000';
        
       for(i = 0; i < a.length; i++){
            a[i].style.color = '#000';
        }
       
        day = true;
        sessionStorage.setItem('d', 'light');
    }
    else{
        
        
        moon.classList.remove('rotate');
        sun.classList.remove('unrotate');    
        background.style.background = '#2D2D30';
        background.style.color = '#D3D2CF';
        
        for(i = 0; i < a.length; i++){
            a[i].style.color = '#D3D2CF';
        }
        
        day = false;
        sessionStorage.setItem('d', 'dark');

    }
    
}

window.addEventListener('resize', function () { 
    "use strict";
    window.location.reload(); 
});
