import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';
import {animations} from './modules/animations';
import {toggleMenu} from './modules/toggleMenu';
import {toggleContent} from './modules/toggleContent';
import {hideLoader} from './modules/hideLoader';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();
animations();
toggleMenu();
toggleContent();
hideLoader();
