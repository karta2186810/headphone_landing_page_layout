export default function () {
  const sections = document.querySelectorAll('section[id]')
  function scrollActive () {
    const scrollY = window.scrollY
    sections.forEach(current => {
      const sectionTop = current.offsetTop - 50
      const sectionHeight = current.offsetHeight
      const sectionId = current.getAttribute('id')
      if (scrollY > sectionTop && scrollY <= (sectionTop + sectionHeight)) {
        document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add('active-link')
      } else {
        document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove('active-link')
      }
    })
  }
  window.addEventListener('scroll', scrollActive)
}