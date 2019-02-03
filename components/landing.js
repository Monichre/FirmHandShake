import React, { Fragment, Component } from 'react'
import imagesLoaded from 'imagesloaded'
import charming from 'charming'
import LayoutOne from './layoutOne'
import LayoutTwo from './layoutTwo'
import LayoutThree from './layoutThree'
import LayoutFour from './layoutFour'
import { CursorFx, Slideshow, Navigation } from './ui'

class Landing extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    // Window sizes.
    let winsize
    const calcWinsize = () =>
      (winsize = { width: window.innerWidth, height: window.innerHeight })
    calcWinsize()
    // Recalculate window sizes on resize.
    window.addEventListener('resize', calcWinsize)

    const cursor = new CursorFx(document.querySelector('.cursor'))
    const slideshow = new Slideshow(document.querySelector('.slideshow'))
    const nav = new Navigation(document.querySelector('.nav'), slideshow)
    slideshow.nav = nav

    // Custom cursor chnages state when hovering on elements with 'data-hover'.
    ;[...document.querySelectorAll('[data-hover]')].forEach(link => {
      link.addEventListener('mouseenter', () => cursor.enter())
      link.addEventListener('mouseleave', () => cursor.leave())
      link.addEventListener('click', () => cursor.click())
    })

    // Preload all the images in the page.
    new imagesLoaded(
      document.querySelectorAll('.slide__figure-img'),
      { background: true },
      () => document.body.classList.remove('loading')
    )
  }
  render () {
    return (
      <Fragment>
        <style>
          @import
          url('https://fonts.googleapis.com/css?family=Archivo+Narrow|Karla');
        </style>
        <svg className='hidden'>
          <symbol id='icon-arrow' viewBox='0 0 24 24'>
            <title>arrow</title>
            <polygon points='6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8 ' />
          </symbol>
          <symbol id='icon-nav' viewBox='0 0 407 660'>
            <title>caret</title>
            <path d='M77 0L0 77l253 253L0 583l77 77 330-330z' />
          </symbol>
        </svg>
        <main>
          <p className='message'>
            Please view on desktop to see the full layout
          </p>
          <div className='frame'>
            <div className='frame__title-wrap'>
              <h1 className='frame__title'>Layer Motion Slideshow</h1>
              <div className='nav'>
                <div className='nav__counter'>
                  <span>0</span>/<span>0</span>
                </div>
                <div className='nav__arrows'>
                  <button className='nav__arrow nav__arrow--prev' data-hover>
                    <svg className='icon icon--rotated icon--nav'>
                      <use xlinkHref='#icon-nav' />
                    </svg>
                  </button>
                  <button className='nav__arrow nav__arrow--next' data-hover>
                    <svg className='icon icon--nav'>
                      <use xlinkHref='#icon-nav' />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className='frame__links'>
              <a
                href='https://tympanus.net/Tutorials/InteractiveParticles/'
                title='Previous Demo'
                data-hover
              >
                Previous demo
              </a>
              <a
                href='https://tympanus.net/codrops/?p=37953'
                title='Back to the article'
                data-hover
              >
                Article
              </a>
              <a
                href='https://github.com/codrops/LayerMotionSlideshow/'
                title='Find this project on GitHub'
                data-hover
              >
                GitHub
              </a>
            </div>
            <div className='index' data-hover>
              index
            </div>
          </div>
          <div className='slideshow'>
            <LayoutOne />
            <LayoutTwo />
            <LayoutThree />
            <LayoutFour />
          </div>
        </main>
        <div className='cursor'>
          <div className='cursor__inner cursor__inner--circle' />
          <div className='cursor__inner cursor__inner--dot' />
        </div>
      </Fragment>
    )
  }
}

export default Landing
