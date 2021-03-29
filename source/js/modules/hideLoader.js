/**
 * Запускам лоадер и навешиваем обработчики, для его закрытия. Если десктоп, то закрываем по нажатию 'Enter', иначе по клику.
 * Также запускам обработчик, чтобы отслеживать ресайз экрана и переключать обработчики.
 */

import {executeIfCondition, isDesktop} from '../utils/checkViewportSize';
import {afterLoadAnimations, logoAnimation} from '../modules/animations';

const hideLoader = () => {
  const pageHeader = document.querySelector('.header');

  /**
   * Добавляем проверку на изменение размера экрана, устанавливаем нужный обработчик и удаляем ненужный
   */
  window.addEventListener('resize', () => {
    executeIfCondition(isDesktop(), setLockByKey, setLockByClick);
    removeUnnecessaryHandler();
  });

  /**
   * Функции добавления обработчиков на клик или нажатия 'Enter'
   */
  const setLockByKey = () => document.addEventListener('keydown', onPressEnter);
  const setLockByClick = () => {
    if (pageHeader.classList.contains('header--loaderShown')) {
      pageHeader.addEventListener('click', closeLoader);
    }
  };
  const showLoader = () => {
    pageHeader.classList.add('header--loaderShown');
    pageHeader.classList.add('header--activeTooltip');
  };


  /**
   * Функции для закрытия лоадера
   */
  const onPressEnter = (evt) => (evt.code === 'Enter') ? closeLoader() : '';
  const closeLoader = () => {
    pageHeader.classList.remove('header--loaderShown');
    executeIfCondition(isDesktop(), removeKeyHandler, removeClickHandler);
    pageHeader.classList.remove('header--activeTooltip');
    afterLoadAnimations();
  };


  /**
   * Функции удаления обработчиков
   */
  const removeUnnecessaryHandler = () => executeIfCondition(isDesktop(), removeClickHandler, removeKeyHandler);
  const removeClickHandler = () => pageHeader.removeEventListener('click', closeLoader);
  const removeKeyHandler = () => document.removeEventListener('keydown', onPressEnter);


  /**
   * Показывыаем лоадер и проверяем какой обработчик для его закрытия установить
   */

  showLoader();
  logoAnimation();
  executeIfCondition(isDesktop(), setLockByKey, setLockByClick);
};

export {hideLoader};
