import anime from 'animejs'
import createSocialLink from './helpers/createSocialLink'
import * as config from './config.json'

import './styles.sass'

const card: HTMLElement = document.querySelector('.card')
const contentName: HTMLElement = document.querySelector('.content-name')
let playing: boolean = false

createSocialLink('Github', config.github, document.querySelector('.github'))
createSocialLink('Linkedin', config.linkedin, document.querySelector('.linkedin'))
createSocialLink('Twitter', config.twitter, document.querySelector('.twitter'))

contentName.innerText = config.name || ''

card.addEventListener('click', (e: Event): void => {
  if (playing) return

  const target = e.target as HTMLElement

  if (target.nodeName !== 'A') {
    playing = true
    anime({
      targets: card,
      scale: [{ value: 1 }, { value: 1.25 }, { value: 1, delay: 250 }],
      rotateY: { value: '+=180', delay: 150 },
      easing: 'easeInOutSine',
      duration: 400,
      complete: () => {
        playing = false
      },
    })
  }
})
