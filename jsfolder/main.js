let menu = document.querySelector('#menu__icon')
let nav__list = document.querySelector('.nav__list') 

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    nav__list.classList.toggle('open')
    document.getElementById("nav__items1").style.opacity="1";
    document.getElementById("nav__items2").style.opacity="1";
    document.getElementById("nav__items3").style.opacity="1";
    document.getElementById("nav__items4").style.opacity="1";
    document.getElementById("nav__items5").style.opacity="1";
}


