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
    }, 3000);
    setTimeout(() => {
        modal.style.display = 'none';
        credits.style.opacity = '1';
    }, 3500);
}

//function observer to track the sections on viewport
const observer = () => {
    setTimeout(() => {
        let objects = document.querySelectorAll('section');
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
    }, 3500)
}


//tip on links
var display = document.createElement('div');
const tipNewPage = (event) => {
    let top = event.clientY+3;
    let left = event.clientX+3;
    display.style.position = 'absolute';
    display.style.top = top+'px';
    display.style.left = left+'px';
    display.style.backgroundColor = '#FEFEFE';
    display.style.borderRadius = '3px'
    display.style.padding = '.5em';
    display.style.width = '20%';
    display.style.fontSize = '.8em';
    display.innerHTML = 'Press <code>Crt</code> on Windows and Linux or <code>Command</code> on Mac to see the link in a new window. So you can keep looking at this page.';
    document.body.appendChild(display);
}

const hideTip = ()=> {
    document.body.removeChild(display)

}

//end tips on links

const imageGallery = () => {
    let hightlight = document.querySelector('.image-highlight')
    let previews = document.querySelectorAll('.preview img')
    
    previews.forEach(preview => {
        preview.addEventListener('click', () => {
            let smallSrc = preview.src
            let bigSrc = smallSrc.replace('small', 'big')
            hightlight.src = bigSrc
            previews.forEach((preview) => {preview.className = ''})
            preview.className = 'active'
        })
    })
}


window.onload = () => {
    navSlide();
    modal();
    observer();
    imageGallery();
}
