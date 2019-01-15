var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__switch');
var pageWrap = document.querySelector('.page-header__menu-wrap');
var wrapToggle = document.querySelector('.page-header__menu-wrap--bg');

navMain.classList.remove('main-nav--nojs');
pageWrap.classList.remove('page-header__menu-wrap--bg');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
      pageWrap.classList.add('page-header__menu-wrap--bg');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    pageWrap.classList.remove('page-header__menu-wrap--bg');
  }
});
