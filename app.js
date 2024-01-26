

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

