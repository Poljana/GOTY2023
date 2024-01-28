

//intro animation when DOM content loads
const intro = document.querySelector('.intro');
const logo = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', function () {

    setTimeout(() => {
        
        logo.forEach((logo, index) => {

            setTimeout(() => {
                
                logo.classList.add('active');

            }, (index + 1) * 400);

        });

    }, 100);

    setTimeout(() => {

        intro.style.opacity = '0';
        
    }, 2600);

    setTimeout(() => {

        intro.style.display = 'none';

    }, 3200);

})

//infinite image library carousel animation
const copy = document.querySelector('.subslider').cloneNode(true);
document.querySelector('.slider').appendChild(copy);

const carousel = document.querySelector('.slider');

carousel.animate(
    [
        {transform: 'translateX(0) translateY(145%)'},
        {transform: 'translateX(-100%) translateY(145%)'},
    ],
    {
        duration: 50000,
        iterations: Infinity,
    }
);

//on/off button for a drawer
function toggleDrawer() {
    
    const sidebar = document.getElementById('drawer');
    const container = document.querySelector('.container');
    const sidebarWidth = sidebar.offsetWidth;

    if (sidebar.style.transform === 'translateX(0em)') {

        sidebar.style.transform = `translateX(-${sidebarWidth}em)`;
        container.style.transform = 'translateX(0px)';
        container.style.filter = 'brightness(1)';

    } else {

        sidebar.style.transform = 'translateX(0em)';
        container.style.transform = `translateX(${sidebarWidth}px)`;
        container.style.filter = 'brightness(0.7)';
    
    }

}

//observer for loading images in with animations
const observer = new IntersectionObserver(entries => {

    entries.forEach((entry) => {

        console.log(entry);
        
        if (entry.isIntersecting) {

            entry.target.classList.remove('hide');
            entry.target.classList.add('show');

        } else {

            entry.target.classList.remove('show');
            entry.target.classList.add('hide');

        }

    })

}, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
});

const imageLibrary = document.querySelectorAll('.image-library');

imageLibrary.forEach(library => {
    observer.observe(library);
})

