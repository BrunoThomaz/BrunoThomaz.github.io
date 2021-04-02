//Prevent Scrolling before end modal animation
window.onscroll = function () { window.scrollTo(0, 0); };
//end Prevent Scrolling

//navbar animation
const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.links')
    const links = document.querySelectorAll('.links li')

    burger.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav-active')
        links.forEach((link, index) => {
            //animation fade in
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navFade 0.5s ease forwards ${index / 5 + .5}s`
            }
        })

        burger.classList.toggle('toggle')

    })
}


//modal landing page animation
const modal = () => {
    let modal = document.querySelector('.modal');
    let credits = document.querySelector('.creditsbackground');

    setTimeout(() => {
        modal.classList.toggle('loaded');

        //Enabling Scrolling
        window.onscroll = function () {};
    }, 2500);
    setTimeout(() => {
        modal.style.display = 'none';
        credits.style.opacity = '1';
    }, 3000);
}

//function observer to track the sections on viewport
const observer = () => {
    
    setTimeout(() => {
        let objects = document.querySelectorAll('section');

        if (innerWidth <= 768){
            objects.forEach((object) => {
                object.classList.add('active');
            })
        } else {
            const options = {
                threshold: 0.8
            }
            var listObserver = new IntersectionObserver((event) => {
                //function fadeIn to fade-in elements inside sections
                event[0].target.classList.add('active')
            }, options);

            objects.forEach((object) => {
                listObserver.observe(object);
            })
        }
    }, 3500)
}


//tip on links
var display = document.createElement('div');
function tipNewPage(event)  {
    let top = event.clientY+3;
    let left = event.clientX+3;
    display.style.position = 'absolute';
    display.style.zIndex = '999';
    display.style.top = window.scrollY+top+'px';
    display.style.left = left+'px';
    display.style.backgroundColor = '#FEFEFE';
    display.style.borderRadius = '3px'
    display.style.padding = '.5em';
    display.style.width = '20%';
    display.style.fontSize = '.8em';
    display.innerHTML = 'Press <code>Crt</code> on Windows and Linux or <code>Command</code> on Mac to see the link in a new window. So you can keep looking at this page. ; D';
    document.body.appendChild(display);
}

const hideTip = ()=> {
    document.body.removeChild(display)

}
//end tips on links

//Content on Projects
projectsContent = () => {
    let links = document.querySelectorAll('#projects ul li a')
    const content = document.querySelector('.content')
    for (link of links) {
        const elements = document.querySelectorAll(".hideToggle")
        const target = document.querySelector(`.${link.id}`)
        link.addEventListener('click', (e)=> {
            e.preventDefault()
            for (element of elements) {
                element.style.display = "none"

            }
            target.style.display = "flex"


        })
    }
}
// End Content


function imageBackard(ev) {
    ev.preventDefault();
    const imageActive = document.querySelector('.imageActive');
    if (imageActive.previousElementSibling) {
        imageActive.style.opacity = "0";
        imageActive.previousElementSibling.style.opacity = "1";
        setTimeout(()=>{
            imageActive.classList.toggle('imageActive');
            imageActive.previousElementSibling.classList.toggle('imageActive');
            const imagesGallery = document.querySelector('.images');
            const arrowLeft = document.querySelector('.arrowLeft svg path');
            if (imagesGallery.firstElementChild.className === "imageActive") {
                arrowLeft.style.fill = "#fefefe";
            } else {
                arrowLeft.style.fill = "currentColor"
            }
            const arrowRight = document.querySelector('.arrowRight svg path');
            if (imagesGallery.lastElementChild.className === "imageActive") {
                arrowRight.style.fill = "#fefefe";
            } else {
                arrowRight.style.fill = "currentColor"
            }
        }, 400)
    } 
}
function imageForward(ev) {
    ev.preventDefault();
    const imageActive = document.querySelector('.imageActive');
    if (imageActive.nextElementSibling) {
        imageActive.style.opacity = "0";
        imageActive.nextElementSibling.style.opacity = "1";
        setTimeout(()=>{
            imageActive.classList.toggle('imageActive');
            imageActive.nextElementSibling.classList.toggle('imageActive');
            const imagesGallery = document.querySelector('.images');
            const arrowRight = document.querySelector('.arrowRight svg path');
            if (imagesGallery.lastElementChild.className === "imageActive") {
                arrowRight.style.fill = "#fefefe";
            } else {
                arrowRight.style.fill = "currentColor"
            }
            const arrowLeft = document.querySelector('.arrowLeft svg path');
            if (imagesGallery.firstElementChild.className === "imageActive") {
                arrowLeft.style.fill = "#fefefe";
            } else {
                arrowLeft.style.fill = "currentColor"
            }
        }, 400)
    }
    
}


window.onload = () => {
    navSlide()
    modal()
    observer()
    projectsContent()
}
