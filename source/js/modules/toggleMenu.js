/**
 * Функция для открытия меню
 */

import {executeIfCondition, isDesktop} from '../utils/checkViewportSize';

const toggleMenu = () => {

  /**
   * Элементы
   * @type {Element}
   */
  const menuButton = document.querySelector('.menu-button');
  const burgerLine = document.querySelector('.menu-button .line');
  const menuList = document.querySelector('.main-nav__list');
  const mainNav = document.querySelector('.main-nav');
  const pageBody = document.querySelector('.page-body');
  let expanded = menuButton.getAttribute('aria-expanded') === 'true';


  /**
   * Методы
   */
  const openMenu = () => {
    if (mainNav.classList.contains('animatedFromTop')) {
      mainNav.classList.remove('animatedFromTop');
    }

    menuButton.setAttribute('aria-expanded', !expanded);
    burgerLine.classList.add('active');
    menuList.classList.add('main-nav__list--opened');
    menuButton.removeEventListener('click', openMenu);
    menuButton.addEventListener('click', closeMenu);
    pageBody.classList.add('scroll-lock');
  };

  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', expanded);
    burgerLine.classList.remove('active');
    menuList.classList.remove('main-nav__list--opened');
    pageBody.classList.remove('scroll-lock');
    mainNav.classList.remove('animatedFromTop');
    menuButton.addEventListener('click', openMenu);
    menuButton.removeEventListener('click', closeMenu);
  };

  const setClickHandler = () => menuButton.addEventListener('click', openMenu);
  const removeClickHandler = () => {
    menuButton.removeEventListener('click', openMenu);
    closeMenu();
  };

  /**
   * Проверяем размер экрана и запускаем кнопку на мобильной версии.
   * Отслеживаем ресайз, чтобы отключить кнопку на десктопе
   */
  executeIfCondition(isDesktop(), removeClickHandler, setClickHandler);

  window.addEventListener('resize', () => executeIfCondition(isDesktop(), removeClickHandler, setClickHandler));

};
export {toggleMenu};


