const image = document.querySelector(".image1");
const right = document.querySelector(".header__box_right");
const img = document.querySelector(".img1")
image.addEventListener("click", function() {
    right.classList.toggle("active")
    img.classList.toggle("active")
})


const form = document.querySelector(".form");
const input = document.querySelectorAll(".input");
const btn = document.querySelector(".formBtn");
const section = document.querySelector(".section_baground");
form.addEventListener("submit", (e) => {
    e.preventDefault()

    if (!input[0].value || !input[1].value) {
        let box = document.createElement("div");
        box.classList.add("menu_bar")

        let btn2 = document.createElement('button');
        btn2.classList.add("remove_btn2")
        btn2.innerText = 'Remove';

        let minbox = document.createElement('div');
        minbox.classList.add('mini_box')

        let titleResolt = document.createElement('h3');
        titleResolt.classList.add("title_resolt")
        titleResolt.innerText = 'Возникла ошибка. Что можно сделать?'

        let textResolt = document.createElement('h3');
        textResolt.classList.add("text_resolt")
        textResolt.innerText = '— Проверить соединение с интернетом— Перезагрузить страницу и повторить отправку— Написать нам на электронную почту Info@ins-media.ru Мы вышлем Вам бесплатный номер.'



        minbox.appendChild(titleResolt)
        minbox.appendChild(textResolt)
        minbox.appendChild(btn2)

        box.appendChild(minbox)
        section.appendChild(box)
        form.reset()
        btn2.addEventListener('click', () => {
            section.removeChild(box)
        })


    } else {

        let box = document.createElement("div");
        box.classList.add("menu_bar")

        let btn = document.createElement('button');
        btn.classList.add("remove_btn")
        btn.innerText = 'Remove';

        let minbox = document.createElement('div');
        minbox.classList.add('mini_box')

        let titleResolt = document.createElement('h3');
        titleResolt.classList.add("title_resolt")
        titleResolt.innerText = 'Данные успешно отправлены'

        let textResolt = document.createElement('h3');
        textResolt.classList.add("text_resolt")
        textResolt.innerText = 'Спасибо за заказ. Мы свяжемся с Вами по электронной почте в течение часа для подтверждения, после чего вышлем ознакомительный выпуск обзора.'



        minbox.appendChild(titleResolt)
        minbox.appendChild(textResolt)
        minbox.appendChild(btn)

        box.appendChild(minbox)
        section.appendChild(box)


        btn.addEventListener('click', () => {
            section.removeChild(box)
        })
        form.reset()
    }

})


const form3 = document.querySelector('.form3');
const inpu = document.querySelectorAll('.inpu');

form3.addEventListener("submit", (e) => {
    e.preventDefault()

    if (!inpu[0].value || !inpu[1].value) {
        let box = document.createElement("div");
        box.classList.add("menu_bar")

        let btn2 = document.createElement('button');
        btn2.classList.add("remove_btn2")
        btn2.innerText = 'Remove';

        let minbox = document.createElement('div');
        minbox.classList.add('mini_box')

        let titleResolt = document.createElement('h3');
        titleResolt.classList.add("title_resolt")
        titleResolt.innerText = 'Возникла ошибка. Что можно сделать?'

        let textResolt = document.createElement('h3');
        textResolt.classList.add("text_resolt")
        textResolt.innerText = '— Проверить соединение с интернетом— Перезагрузить страницу и повторить отправку— Написать нам на электронную почту Info@ins-media.ru Мы вышлем Вам бесплатный номер.'



        minbox.appendChild(titleResolt)
        minbox.appendChild(textResolt)
        minbox.appendChild(btn2)

        box.appendChild(minbox)
        section.appendChild(box)
        form3.reset()
        btn2.addEventListener('click', () => {
            section.removeChild(box)
        })


    } else {

        let box = document.createElement("div");
        box.classList.add("menu_bar")

        let btn = document.createElement('button');
        btn.classList.add("remove_btn")
        btn.innerText = 'Remove';

        let minbox = document.createElement('div');
        minbox.classList.add('mini_box')

        let titleResolt = document.createElement('h3');
        titleResolt.classList.add("title_resolt")
        titleResolt.innerText = 'Данные успешно отправлены'

        let textResolt = document.createElement('h3');
        textResolt.classList.add("text_resolt")
        textResolt.innerText = 'Спасибо за заказ. Мы свяжемся с Вами по электронной почте в течение часа для подтверждения, после чего вышлем ознакомительный выпуск обзора.'



        minbox.appendChild(titleResolt)
        minbox.appendChild(textResolt)
        minbox.appendChild(btn)

        box.appendChild(minbox)
        section.appendChild(box)


        btn.addEventListener('click', () => {
            section.removeChild(box)
        })
        form3.reset()
    }

})