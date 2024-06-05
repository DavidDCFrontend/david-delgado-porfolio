let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.header__navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('headr nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        console.log(sec.offsetTop);
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active');
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

function toggleContentAbout() {
    let moreContent = document.getElementById("moreContent");
    let toggleButtonAbout = document.getElementById('toggleButtonAbout');

    if(moreContent.classList.contains("collapsed")) {
        moreContent.classList.remove("collapsed");
        moreContent.classList.add("expanded");
        toggleButtonAbout.textContent = "Leer menos";       
    } else {
        moreContent.classList.remove("expanded");
        moreContent.classList.add("collapsed");
        toggleButtonAbout.textContent = "Leer más sobre mí";
    }
}


