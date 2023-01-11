const buttonOpenHederMenu = document.querySelector('.header__button-menu');
const popupHeaderMenu = document.querySelector('.popup_type_menu');
const buttonCloseHeaderMenu = popupHeaderMenu.querySelector('.popup__button-close');


function openPopup(element) {
    element.classList.add('popup_opened');
};


function closePopup(element) {
    element.classList.remove('popup_opened');
};


buttonOpenHederMenu.addEventListener('click',  () => openPopup(popupHeaderMenu));

buttonCloseHeaderMenu.addEventListener('click',  () => closePopup(popupHeaderMenu));