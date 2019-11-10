// toggle nav bar https://codepen.io/tutsplus/pen/ZdRdZM
// sticky navigation https://codepen.io/_codemics/pen/PwEbYJ

$(document).ready(function() {
    // nav bar
    $(".toggle").on("click", function() {
        if ($(".item").hasClass("active")) {
            $(".item").removeClass("active");
            $(this).find("a").html("<i class='fas fa-bars'></i>");
        } else {
            $(".item").addClass("active");
            $(this).find("a").html("<i class='fas fa-times'></i>");
        }
    });

    // grab the initial top offset of the navigation 
       var stickyNavTop = $('#nav').offset().top;
       
       // our function that decides weather the navigation bar should have "fixed" css position or not.
       var stickyNav = function(){
        var scrollTop = $(window).scrollTop(); // our current vertical position from the top
             
        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scrollTop > stickyNavTop) { 
            $('#nav').addClass('sticky');
        } else {
            $('#nav').removeClass('sticky'); 
        }
    };

    stickyNav();
    // and run it again every time you scroll
    $(window).scroll(function() {
        stickyNav();
    });
});



// document.addEventListener("DOMContentLoaded", init);

// let navLinks = document.querySelectorAll(".nav-link");

// function init() {
//     navLinks.addEventListener("click", scrollTo);
// }

// function scrollTo() {
//     navLinks.forEach.scrollIntoView({
//         behavior: 'smooth'
//     });
// }