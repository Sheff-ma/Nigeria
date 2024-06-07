const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classlist.toggle("sticky", window.scrollY > 60)
});

document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    menu.addEventListener("click", function() {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('open');
    });

    // Close the navbar when a navbar item is clicked
    navbar.querySelectorAll('a').forEach(item => {
        item.addEventListener('click', function() {
            navbar.classList.remove('open');
            menu.classList.remove('bx-x');
        });
    });
});

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 60)
});

