import '../css/style.css'


window.addEventListener('DOMContentLoaded', () => {
  /* show menu */
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

  /* remove menu mobile */
  const navLinks = document.querySelectorAll('.nav__link')

  const linkAction = () => {
    navMenu.classList.remove('show-menu')
  }
  
  navLinks.forEach(link => link.addEventListener('click', linkAction))
})