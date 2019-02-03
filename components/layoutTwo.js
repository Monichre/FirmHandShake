const LayoutTwo = () => {
  return (
    <div className='slide slide--layout-2' data-contentcolor='#7dd2dc'>
      <div className='slide__figure slide__figure--main' data-sort='1'>
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
      <div className='slide__figure slide__figure--box' data-sort='3'>
        <div
          className='slide__figure-img'
          style={{ backgroundImage: 'url(../static/img/IMG_5440-min.jpg)' }}
        />
      </div>
      <div className='slide__figure slide__figure--box' data-sort='4'>
        <div
          className='slide__figure-img'
          style={{ backgroundImage: 'url(../static/img/IMG_5440-min.jpg)' }}
        />
      </div>
      <h2 className='slide__title'>FirmHandShake</h2>
      <div className='slide__text slide__text--right'>
        {/* <p className='slide__text-meta'>by Andrew Moore on 2/21</p> */}
        <p className='slide__text-description'>Streaming and Dreaming</p>
        <a className='slide__text-link' data-hover href='#'>
          +
        </a>
      </div>
      <button className='slide__back' data-hover>
        <svg className='icon icon--back'>
          <use xlinkHref='#icon-arrow' />
        </svg>
      </button>
      <div className='slide__content'>
        <p>
          I have given sufficient space to marks in the present volume to
          indicate those used by the London and other assay offices. Some marks
          are given which do not appear elsewhere, and the arrangement of the
          tables should enable the beginner to come to a definite conclusion as
          to the date of his silver. In especial, the Table of variations in the
          shapes of shields in the hall-mark and standard-mark employed at the
          London Assay Office from the accession of Queen Elizabeth to the
          present day, is a feature not before given in so concise a form in any
          other volume.
        </p>
        <p>
          The marks on silver are stamped, the design thus appears in relief,
          while the edges of the shield on which it appears are sunk. The
          reproduction of this has offered a difficulty in illustration in all
          volumes on old silver. To print black letters or designs on a white
          background, although easy, is unsatisfactory. On the contrary, to
          print the raised design in white on a dead black background is not a
          realistic presentation of the mark as it appears to the eye. After
          many experiments I have reproduced the marks in a manner more closely
          approaching their actual appearance, and less suggestive of
          black-and-white designs on paper.
        </p>
        <p>
          The result of the somewhat chaotic alphabet marks has been to focus
          the attention of the collector too much on this particular side of the
          subject. The identification of marks, the outward symbols of time and
          place, have reduced the study of old silver to a somewhat lower plane
          than it should occupy by right. It is proper that such determining
          factors should have their place, but not the first place. There was a
          time when china collectors ignored paste and glaze and laid particular
          stress on marks, and it is a very happy accident that a great portion
          of English porcelain and much of English earthenware is unmarked. It
          has eventually led collectors to think for themselves and know
          something more of the technique and to learn to appreciate the
          artistic value of specimens of the potter’s art coming under their
          hand.
        </p>
      </div>
    </div>
  )
}

export default LayoutTwo
