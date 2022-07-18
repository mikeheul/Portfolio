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

    window.onscroll = function() { stickyNavHighlight()};

        const navbar = document.querySelector("nav");
        const sections = document.querySelectorAll("section"); 
        const navLi = document.querySelectorAll("nav ul li");
        const mouse = document.querySelector(".mousey");

        let sticky = 50;

        function stickyNavHighlight() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky")
            } else {
                navbar.classList.remove("sticky");
            }
            mouse.style.opacity = 1 - window.scrollY / 500;

            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - (section.clientHeight - (section.clientHeight*0.5));
                console.log(pageYOffset);
                const sectionHeight = section.clientHeight;
                if(pageYOffset >= sectionTop) {
                    current = section.getAttribute('id');
                }
            })

            navLi.forEach(li => {
            li.classList.remove('active');
            if(li.classList.contains(current)) {
                li.classList.add('active')
            }
        })
    }


});




 
