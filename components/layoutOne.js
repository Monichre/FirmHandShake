const LayoutOne = () => {
  return (
    <div className='slide slide--layout-1' data-contentcolor='#e88655'>
      <div className='slide__figure slide__figure--main' data-sort='3'>
        <div
          className='slide__figure-img'
          style={{ backgroundImage: 'url(../static/img/1.jpg)' }}
        />
      </div>
      <div className='slide__figure slide__figure--box' data-sort='2'>
        <div
          className='slide__figure-img'
          style={{ backgroundImage: 'url(../static/img/3.jpg)' }}
        />
      </div>
      <div className='slide__figure slide__figure--box' data-sort='4'>
        <div
          className='slide__figure-img'
          style={{ backgroundImage: 'url(../static/img/2.jpg)' }}
        />
      </div>
      <div className='slide__figure slide__figure--box' data-sort='1'>
        <div
          className='slide__figure-img'
          style={{ backgroundImage: 'url(../static/img/4.jpg)' }}
        />
      </div>
      <h2 className='slide__title'>Monachopsis</h2>
      <div className='slide__text slide__text--right'>
        <p className='slide__text-meta'>by Andrew Moore on 2/21</p>
        <p className='slide__text-description'>
          Thoughts in time and out of season. The Hitchhiker stood by the side
          of the road and leveled his thumb in the calm calculus of reason. Hi.
          How you doin’?
        </p>
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
          They would all have been delighted to have little Elfie with them in
          these last hours, but the fond grandfather could not spare her, and
          one of the girls, who had a message to deliver to Mrs. Abbott in the
          parlor, reported that the child lay fast asleep in Mr. Bellamy’s arms,
          while he was trying, at great inconvenience to himself, to write
          letters at a table, and black Candace sat patiently in the hall
          waiting for the long-delayed summons to put her little missy to bed.
        </p>
        <p>
          It was late when the day scholars went home, and the others went
          up-stairs to their rooms very quietly. They all had to pass the large
          corner room which was always given to visitors, and, although the
          light was turned very low, they could see through the half-closed door
          that Candace was trying to undress the little girl without waking her,
          and the senator, whose broad back was toward the door, was bending
          down to unbutton the little shoes, one of which he lifted and pressed
          to his lips just as the last pair of girls went by.
        </p>
        <p>
          The collector of old silver must have a pretty taste and a fine
          judgment. It is not an absolute law that age determines beauty.
          Hall-marks, though they denote date, do not guarantee excellence of
          design. Everything that bears the hall-mark of the Goldsmiths’ Hall of
          London is not beautiful, whether it be old or whether it be new. The
          connoisseur must digest the fact that the assay marks of the lion, the
          leopard’s head, the date-mark, and the rest, are so many official
          symbols, accurate as to date and sufficient guarantee as to the
          standard of the metal, but meaningless in regard to the art of the
          piece on which they stand. The assay offices are merely stamping
          machines. What Somerset House is to legal documents so the assay
          offices are to silver and gold plate, and nothing more. Hence the
          necessity of placing such mechanical control under Government
          supervision.
        </p>
      </div>
    </div>
  )
}

export default LayoutOne
