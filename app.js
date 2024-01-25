

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
