import showMenu from './showMenu'
import removeMenuMobile from './removeMenuMobile'
import showScrollUp from './showScrollup'
import changeHeaderBackground from './changeHeaderBackground'
import scrollSectionActiveLink from './scrollSectionActiveLink'
import scrollRevealAnimation from "./scrollRevealAnimation";
import '../css/style.css'


window.addEventListener('DOMContentLoaded', () => {
  /* SHOW MENU */
  showMenu()

  /* REMOVE MENU MOBILE */
  removeMenuMobile()

  /* SHOW SCROLL UP */
  showScrollUp()

  /* CHANGE HEADER BACKGROUND  */
  changeHeaderBackground()

  /* SCROLL SECTION ACTIVE LINK */
  scrollSectionActiveLink()

  /* SCROLL REVEAL ANIMATION */
  scrollRevealAnimation()
})
