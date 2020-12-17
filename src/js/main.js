import './vendor/focus-visible.min.js';
import './_vars';
import './functions/smooth-scroll';
import {resizeContent} from './functions/resize';
// import {disableScroll, enableScroll} from './functions/stop-scroll';

//disableScroll(fix) // fix -> class of element with position: fixed

const astrofall = document.querySelector('.first-game__link');
const spacetor = document.querySelector('.second-game__link');
const hayseed = document.querySelector('.third-game__link');
const astrofallPopup = document.querySelector('.first-popup');
const spacetorPopup = document.querySelector('.second-popup');
const hayseedPopup = document.querySelector('.third-popup'); 
const gamePopup = document.querySelectorAll('.game-popup');
const closePopup = document.querySelectorAll('.game-popup__close');
const body = document.body;

const addPopup = (popup) => {
  popup.classList.add('popup-open');       
}

const removePopup = () => {
  gamePopup.forEach((e) => {
    e.classList.remove('popup-open');   
  })     
}

const disableScroll = () => {
  const paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
  body.style.paddingRight = paddingOffset;
  body.classList.add('disable-scroll');  
}

const enableScroll = () => {
  body.classList.remove('disable-scroll');
  body.style.paddingRight = '0px';
}

astrofall.addEventListener('click', () => {
  addPopup(astrofallPopup);
  disableScroll();
});

spacetor.addEventListener('click', () => {
  addPopup(spacetorPopup);
  disableScroll();
});

hayseed.addEventListener('click', () => {
  addPopup(hayseedPopup);
  disableScroll();
});

closePopup.forEach((el) => {
  el.addEventListener('click', () => {
    removePopup();
    enableScroll();
  });
});

gamePopup.forEach((el) => {
  el.addEventListener('click', (e) => {
    if (e.target === el) {
      removePopup(el);
      enableScroll();
    }
  });
});
