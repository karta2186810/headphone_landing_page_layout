import '../css/style.css'


window.addEventListener('DOMContentLoaded', () => {
  /* SHOW MENU */
  const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu')
    })
  }
  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
    })
  }

  /* REMOVE MENU MOBILE */
  const navLinks = document.querySelectorAll('.nav__link')
  function linkAction () {
    navMenu.classList.remove('show-menu')
  }
  navLinks.forEach(link => link.addEventListener('click', linkAction))

  /* CHANGE BACKGROUND HEADER */
  function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
  }
  window.addEventListener('scroll', scrollHeader)
})