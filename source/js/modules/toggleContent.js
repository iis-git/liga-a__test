/**
 * Функция для отображения скрытой части на моб версии
 */

import {executeIfCondition, isMobile} from '../utils/checkViewportSize';
import {animateHeroImage} from './animations';

const toggleContent = () => {
  const mainBody = document.querySelector('.page-body');
  const hiddenContent = document.querySelector('.hero__right');
  const mainHeader = document.querySelector('.header');

  /**
   * Добавляем обработчик для включения/выключения переключения в зависимости от разрешения
   * и обработчик, чтобы убрать клик с хедера
   */
  window.addEventListener('resize', () => executeIfCondition(isMobile(), setClickHandler, removeClickHandler));
  mainHeader.addEventListener('click', (evt) => evt.stopPropagation());


  /**
   * Функции добавления/удаления обработчиков
   */
  const setClickHandler = () => mainBody.addEventListener('click', showContent);
  const removeClickHandler = () => mainBody.removeEventListener('click', showContent);


  /**
   * Функция для переключения класса, чтобы отображать скрытую часть контента
   */
  const showContent = () => {
    if (!hiddenContent.classList.contains('hero__right--visible')) {
      hiddenContent.classList.add('hero__right--visible');
      animateHeroImage();
    } else {
      hiddenContent.classList.remove('hero__right--visible');
    }
  };

  /**
   * Добавляем обработчик на мобильной версии
   */
  executeIfCondition(isMobile(), setClickHandler, () => {});
};

export {toggleContent};
