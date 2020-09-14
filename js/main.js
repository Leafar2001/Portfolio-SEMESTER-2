//Hamburger Menu
const menuIcon = document.querySelector('.hamburgermenu');

const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
})

//Mouse cursor
let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".nav-link");
let hamburgerMenu = document.querySelectorAll(".hamburgermenu")

window.addEventListener('mousemove', cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow');
    });
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow');
    });
});

hamburgerMenu.forEach(line => {
    line.addEventListener('mouseover', () =>{
        mouseCursor.classList.add('link-grow');
    });
    line.addEventListener('mouseleave', () =>{
        mouseCursor.classList.remove('link-grow');
    });
    
});