const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 120)
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};

$(document).ready(function() {
    if (window.matchMedia("(max-width: 950px) or (max-device-width: 480px)").matches) {
        var lastScrollTop = 0;
        var header = $('header');

        // Initially hide the header
        header.addClass('hidden');

        $(window).scroll(function() {
            var st = $(this).scrollTop();
            if (st > lastScrollTop) {
                // Scrolling down, show the header
                header.removeClass('hidden');
            } else {
                // Scrolling up, hide the header
                header.addClass('hidden');
            }
            lastScrollTop = st;
        });
    }
});