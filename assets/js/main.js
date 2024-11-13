const menu = document.querySelector('.menu-block');
const menuBtn = document.querySelector('.menu-btn');
const closeMenuBtn = document.querySelector('.menu-block__header-close-btn');

const calcBtn = document.querySelector('.calc-btn');
const recallForm = document.querySelector('.recall-form-block');
const closeForm = document.querySelectorAll('.close');
const closeSuccess = document.querySelector('.close-success');

function toggleMenu(menu) {
    if (menu.classList.contains('menu--active')) {
        menu.classList.remove('menu--active');
        menu.style.height = 0;
    } else {
        menu.classList.add('menu--active');
        menu.style.height = document.documentElement.clientHeight + 'px';
    }
}

function showForm(recallForm) {
    if (recallForm.classList.contains('recall-form-block_active')) {
        recallForm.classList.remove('recall-form-block_active');
    } else {
        recallForm.classList.add('recall-form-block_active');
    }
}


menuBtn.onclick = () => {
    toggleMenu(menu)
}

closeMenuBtn.onclick = () => {
    toggleMenu(menu)
}

calcBtn.onclick = () => {
    showForm(recallForm)
}

closeForm.forEach((element) => {
    console.log(element)
    element.addEventListener('click', function() {
        showForm(recallForm)
    })
});

closeSuccess.onclick = () => {
    showForm(recallForm)
}