// Corrected the class name to .hero-header
document.querySelector('.hero-header button').addEventListener('click', function() {
    alert('You clicked on "Learn More"');
});

// Toggle menu on mobile
document.querySelector('.menu-toggle').addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'flex' : 'none';
});






const slideIns = document.querySelectorAll('.slide-in');

function checkSlide() {
    slideIns.forEach(slideIn => {
        const slideInAt = (window.scrollY + window.innerHeight) - slideIn.offsetHeight / 2;
        const isHalfShown = slideInAt > slideIn.offsetTop;

        if (isHalfShown) {
            slideIn.classList.add('active');
        }
    });
}

window.addEventListener('scroll', checkSlide);





$(window).on('load', function() {
    $('.carousel-slides').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});



