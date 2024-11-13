const menu = document.querySelector('.menu-block');
const menuBtn = document.querySelector('.menu-btn');
const closeMenuBtn = document.querySelector('.menu-block__header-close-btn');

function toggleMenu(menu) {
    if (menu.classList.contains('menu--active')) {
        menu.classList.remove('menu--active');
        menu.style.height = 0;
    } else {
        menu.classList.add('menu--active');
        menu.style.height = document.documentElement.clientHeight + 'px';
    }
}

menuBtn.onclick = () => {
    toggleMenu(menu)
}

closeMenuBtn.onclick = () => {
    toggleMenu(menu)
}