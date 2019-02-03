const LayoutFour = () => {
  return (
    <div className='slide slide--layout-4' data-contentcolor='#e4d0a2'>
      <div className='slide__figure slide__figure--main' data-sort='4'>
        <div
          className='slide__figure-img'
          style={{ backgroundImage: 'url(../static/img/IMG_5440-min.jpg)' }}
        />
      </div>
      <div className='slide__figure slide__figure--box' data-sort='3'>
        <div
          className='slide__figure-img'
          style={{ backgroundImage: 'url(../static/img/IMG_5440-min.jpg)' }}
        />
      </div>
      <div className='slide__figure slide__figure--box' data-sort='2'>
        <div
          className='slide__figure-img'
          style={{ backgroundImage: 'url(../static/img/IMG_5440-min.jpg)' }}
        />
      </div>
      <div className='slide__figure slide__figure--box' data-sort='1'>
        <div
          className='slide__figure-img'
          style={{ backgroundImage: 'url(../static/img/IMG_5440-min.jpg)' }}
        />
      </div>
      <h2 className='slide__title'>FirmHandShake</h2>

      <div className='slide__text slide__text--right'>
        <p className='slide__text-description'>Ass on the menu YALL</p>
        <a className='slide__text-link' data-hover href='#'>
          +
        </a>
      </div>
      <button className='slide__back' data-hover>
        <svg className='icon icon--back'>
          <use xlinkHref='#icon-arrow' />
        </svg>
      </button>
      <div className='slide__content' />
    </div>
  )
}

export default LayoutFour
