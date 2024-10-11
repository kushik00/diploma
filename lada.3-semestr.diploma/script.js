

document.addEventListener('DOMContentLoaded', function() {
    const menuContainer = document.querySelector('.menu-container');
    const menuBurger = document.querySelector('.menu-burger');
    const closeBtn = document.querySelector('.close-btn');

    // Открыть меню
    menuBurger.addEventListener('click', function() {
        menuContainer.classList.toggle('closed');
    });

    // Закрыть меню
    closeBtn.addEventListener('click', function() {
        menuContainer.classList.add('closed');
    });
});


let offset = 0;
const sliderLine = document.querySelector('.serfiticat');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 600;
    if (offset > 1200){
        offset = 0;
    }
    sliderLine.style.left = offset + 'px'
})

document.querySelector('.slider-prev').addEventListener('click', function(){
    offset = offset - 600;
    if (offset < 0){
        offset = 1800;
    }
    sliderLine.style.left = offset + 'px'
})