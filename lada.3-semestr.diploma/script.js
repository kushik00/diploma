

var arrLang = { 
    'ru': {
        'first': 'главная',
        'about': 'про нас',
        'services': 'услуги',
        'blog': 'блог',
        'contacts': 'контакты',
        'grade': 'ЗАКАЗАТЬ ЗВОНОК',
        'anoter': 'проведение независимой оценки имущества',
        'why_in-1': 'Экспертная оценка обеспечивает всесторонний обзор вопроса стоимости активов или прав и актуальный, на определенную дату, результат – конкретная сумма денежного эквивалента. Оценку имущества лучше доверить опытной компании, в штате которой имеется команда экспертов с багажом знаний в данной области.',
        'why_in-2': 'Наша компания специализируется на проведении независимой оценки имущества, предоставляя профессиональные услуги в области оценки недвижимости, движимого имущества, бизнеса, ценных бумаг и других активов.',
        'why_in-3': 'Мы гордимся своей командой высококвалифицированных специалистов с многолетним опытом работы, которые обеспечивают объективность и точность оценок.',
        'why-we': 'Почему стоит обратиться к нам',
        'info-1': 'Точность и объективность',
        'info-2': 'Быстро работаем',
        'info-3': 'Полная независимость',
        'info-4': 'Индивидуальный подход',
        'info-5': 'Опыт и квалификация',
        'zakaz-ocenka': 'ЗАКАЗАТЬ ОЦЕНКУ',
        'what-services': 'Какие услуги мы предоставляем:',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
    },
    'ukr': {
        'first': 'головна',
        'about': 'про нас',
        'services': 'услуги',
        'blog': 'блог',
        'contacts': 'контакти',
        'grade': 'ЗАМОВИТИ ВИКЛИК',
        'anoter': 'проведення незалежної оцінки майна',
        'why-we': 'Чому варто звернутися до нас',
        'why_in-1': 'Експертна оцінка забезпечує всебічний огляд питання вартості активів чи правий і актуальний, на певну дату, результат – конкретна сума грошового еквівалента. Оцінку майна краще довірити досвідченій компанії, в штаті якої є команда експертів з багажем знань у цій галузі.',
        'why_in-2': 'Наша компанія спеціалізується на проведенні незалежної оцінки майна, надаючи професійні послуги з оцінки нерухомості, рухомого майна, бізнесу, цінних паперів та інших активів.',
        'why_in-3': 'Ми пишаємось своєю командою висококваліфікованих фахівців з багаторічним досвідом роботи, які забезпечують об`єктивність та точність оцінок.',
        'info-1': 'Точність та об`єктивність',
        'info-2': 'Швидко працюємо',
        'info-3': 'Повна незалежність',
        'info-4': 'Індивідуальний підхід',
        'info-5': 'Досвід і кваліфікація',
        'zakaz-ocenka': 'ЗАМОВИТИ ОЦІНКУ',
        'what-services': 'Які послуги ми надаємо:',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
    }
};

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.translate').forEach(function(button) {
        button.addEventListener('click', function() {
            var langs = this.id;

            document.querySelectorAll('.langs').forEach(function(item) {
                var key = item.getAttribute('key');
                if (arrLang[langs][key] !== undefined) {
                    item.textContent = arrLang[langs][key]; // Обновляем текст элемента
                } else {
                    console.warn(`Нет значения для ${langs}.${key}`);
                }
            });
        });
    });
});


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







let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 256;
    if (offset > 768) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    offset = offset - 256;
    if (offset < 0) {
        offset = 768;
    }
    sliderLine.style.left = -offset + 'px';
});