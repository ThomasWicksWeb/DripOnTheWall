

$(document).ready(function () {

    // NAVBAR
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });


    // Removing bouncing arrow on scroll
    let arrow = $('.arrowBounce');
    function fixArrow() {
        if (window.scrollY >= 150) {
            arrow.fadeOut(450);
        } else {
            arrow.fadeIn(450);
        }
    };
    window.addEventListener('scroll', fixArrow);


    // Slick.js Thing
    $('.slickParent').slick({
        
      });

});