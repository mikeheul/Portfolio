window.addEventListener("DOMContentLoaded", (event) => {
    
    let footerText = document.querySelector('footer p span');
    footerText.innerHTML = new Date().getFullYear();

    let typed = new Typed(".auto-type", {
        strings: ["Développeur Fullstack"],
        typeSpeed: 60,
        showCursor: true,
        cursorChar: "_",
        bindInputFocusEvents: true,
        backSpeed: 30,
        loop: false
    })

    ScrollReveal({distance: '50px'}).reveal('.scroll-reveal-up', {
        delay: 300,
        useDelay: 'always',
        duration: 1000,
        origin: 'top',
        viewFactor: 0.5
    });

    window.onscroll = function() { myFunction()};

        // Get the navbar
        let navbar = document.querySelector("nav");
        // Get the offset position of the navbar
        let sticky = 50;
        let mouse = document.querySelector(".mousey");

        // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
        function myFunction() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky")
            } else {
                navbar.classList.remove("sticky");
            }
            mouse.style.opacity = 1 - window.scrollY / 500;
        }

});
