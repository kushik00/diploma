// var arrLang = {
//     'ukr' : {
//         'перша' : 'Головна',
//         'про нас' : 'Про нас' ,
//         'услуги' : 'Услуги' ,
//         'Блог' : 'Блог' ,
//         'контакти' : 'Контакти' ,
//     }
// }

// $(function() {
//     $('.translate').click(function() {
//       var langs = $(this).attr('id');

//       $('.lang').each(function(index, item) {
//         $(this).text(arrLang[langs][$(this).attr('key')]);
//       });
//     });
//   });




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
