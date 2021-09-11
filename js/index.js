import showMenu from './show_menu'
import removeMenuMobile from './remove_menu_mobile'
import showScrollUp from './show_scroll-up'
import changeHeaderBackground from './change_header_background'
import scrollSectionActiveLink from './scroll_section_active-link'
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
})
