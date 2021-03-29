/**
 * Анимации главной страницы
 */

import {
  executeIfCondition,
  isDesktop,
  isMobile
} from '../utils/checkViewportSize';

/**
 * Названия анимаций
 * @type {{fromRight: string, forLogo: {toLeft: string, toRight: string, afterAnimation: string}, fromTop: string, fromLeft: string, fromBottom: string, forIndexPic: {before: string, after: string}}}
 */
const Animations = {
  fromRight: 'animatedFromRight',
  fromLeft: 'animatedFromLeft',
  fromTop: 'animatedFromTop',
  fromBottom: 'animatedFromBottom',
  forIndexPic: {
    before: 'animatedPaths',
    after: 'revealPath',
  },
  forLogo: {
    toLeft: 'animatedLogoLeft',
    toRight: 'animatedLogoRight',
    afterAnimation: 'afterAnim',
  },
};


/**
 * Добавляем анимацию логотипа
 */
const animations = () => {
  const logoPicturePaths = document.querySelectorAll('.logo-picture path');
  logoPicturePaths.forEach((item, i) =>
    i < 6
      ? item.classList.add(Animations.forLogo.toLeft)
      : item.classList.add(Animations.forLogo.toRight)
  );
};


/**
 * Добавляем анимацию отображения главного экрана
 */
const afterLoadAnimations = () => {

  /**
   * Элементы
   * @type {Element}
   */
  const heroLeft = document.querySelector('.hero__left');
  const heroRight = document.querySelector('.hero__right');
  const mainNav = document.querySelector('.main-nav');
  const heroLetter = document.querySelector('.hero__background-letter');
  const dinoPicture = document.querySelector('.dino-picture');

  /**
   * Методы
   */
  const animateDinoPicture = () => dinoPicture.classList.add(Animations.forIndexPic.before);
  const animateHeroRight = () => heroRight.classList.add(Animations.fromRight);
  const animateHeroLeft = () => heroLeft.classList.add(Animations.fromLeft);
  const unAnimateHeroRight = () => heroRight.classList.remove(Animations.fromRight);
  const animateMainNav = () => mainNav.classList.add(Animations.fromTop);
  const unAnimateMainNav = () => mainNav.classList.remove(Animations.fromTop);
  const animateLetter = () => heroLetter.classList.add(Animations.fromBottom);


  /**
   * Добаввляем обработчик ресайза и убираем ненужные анимации
   */
  window.addEventListener('resize', () => executeIfCondition(isMobile(), unAnimateHeroRight, unAnimateMainNav));


  /**
   * Запускам анимации главного экрана
   */
  animateMainNav();
  animateLetter();
  animateDinoPicture();
  animateHeroLeft();
  executeIfCondition(isDesktop(), animateHeroImage, () => {});
  executeIfCondition(isDesktop(), animateHeroRight, () => {});
};

/**
 * Подготавливаем лого к анимации
 */
const logoAnimation = () => {
  const logoPicture = document.querySelector('.logo-picture');
  logoPicture.classList.add(Animations.forLogo.afterAnimation);
};

/**
 * Анимация главной картинки
 */
const animateHeroImage = () => {
  const dinoPicturePaths = document.querySelectorAll('.dino-picture--path-animated');
  dinoPicturePaths.forEach((item) => item.classList.add(Animations.forIndexPic.after));
};

export {
  animations,
  afterLoadAnimations,
  logoAnimation,
  animateHeroImage
};
