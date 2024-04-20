import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

import Loader from './modules/Loader';

let mobileMenu = new MobileMenu();
let stickyHeader = new StickyHeader();

new RevealOnScroll(document.querySelectorAll(".service-image"), 75);
new RevealOnScroll(document.querySelectorAll(".hero-section ul li"), 85);
new RevealOnScroll(document.querySelectorAll(".team-section ul li"), 100);

new Loader();

if(module.hot) {
    module.hot.accept()
}