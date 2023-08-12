/*================================Toggle icon Navbar========================*/
let menuIcon = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('.header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*================================Sticky Navbar========================*/
    let header = document.querySelector('header')

    header.classList.toggle('sticky', window.scrollY > 100);

    /*================================Remove Navbar after press========================*/

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};
/*================================Scroll Reveal========================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay:200
});
ScrollReveal().reveal('.home-content, .heading',{origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container.project-box , .contact-form',{origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content',{origin: 'right'});

/*================================Multiple Text========================*/

const typed = new Typed('.multiple-text',{
    strings:['Student..!','Full-Stack Developer..!', 'Free Lancer..!',  'Blogger..!'],
    typeSpeed:80,
    backSpeed: 80,
    backDelay: 1000,
    loop: true

});

