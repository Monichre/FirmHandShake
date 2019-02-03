const LayoutOne = () => {
  return (
    <div className='slide slide--layout-1' data-contentcolor='#e88655'>
      <div className='slide__figure slide__figure--main' data-sort='3'>
        <div
          className='slide__figure-img'
          style={{ backgroundImage: 'url(../static/img/IMG_5453-min.jpg)' }}
        />
      </div>
      <div className='slide__figure slide__figure--box' data-sort='2'>
        <div
          className='slide__figure-img'
          style={{ backgroundImage: 'url(../static/img/IMG_5457-min.jpg)' }}
        />
      </div>
      <div className='slide__figure slide__figure--box' data-sort='4'>
        <div
          className='slide__figure-img'
          style={{ backgroundImage: 'url(../static/img/IMG_5476-min.jpg)' }}
        />
      </div>
      {/* <div className='slide__figure slide__figure--box' data-sort='1'>
        <div
          className='slide__figure-img'
          style={{ backgroundImage: 'url(../static/img/IMG_5476-min.jpg)' }}
        />
      </div> */}
      <h2 className='slide__title'>FirmHandShake</h2>
      <div className='slide__text slide__text--right'>
        {/* <p className='slide__text-meta'>by Andrew Moore on 2/21</p> */}
        <p className='slide__text-description'>Horny for the tune</p>
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

export default LayoutOne
