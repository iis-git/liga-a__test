/**
 * Утилитарная функция для проверки ширины экрана и выполнения той или иной функции в зависимости от рпзрешения
 * @type {{desktop: number, mobile: number}}
 */

const TemplateBreakpoints = {
  mobile: 768,
  desktop: 1024,
};

export const isMobile = () => window.innerWidth <= TemplateBreakpoints.mobile;
export const isTablet = () => !isMobile() && window.innerWidth < TemplateBreakpoints.desktop;
export const isDesktop = () => window.innerWidth >= TemplateBreakpoints.desktop;

export const executeIfCondition = (condition, callbackTrue, callbackFalse) => condition ? callbackTrue() : callbackFalse();
