import ScrollReveal from "scrollreveal";

export default function () {
	const sr = ScrollReveal({
		distance: '60px',
		duration: 2000,
		delay: 200
	})
	sr.reveal(`.home__header, .section__title`, { delay: 400 })
	sr.reveal(`.home__footer`, { delay: 500 })
	sr.reveal(`.home__img`, { delay: 700, origin: 'top' })

	sr.reveal(`.sponsor__img, .products__card, .footer__logo, .footer__content`, { interval: 100, origin: 'top' })
	sr.reveal(`.specs__data, .discount__animate`, { origin: 'left', interval: 100 })
	sr.reveal(`.specs__img, .discount__img`, { origin: 'right' })
	sr.reveal(`.case__img`, { origin: 'top' })
	sr.reveal(`.case__data`)
}
