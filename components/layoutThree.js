const LayoutThree = () => {
  return (
    <div className='slide slide--layout-3' data-contentcolor='#dc9d7f'>
      <div className='slide__figure slide__figure--main' data-sort='1'>
        <div
          className='slide__figure-img'
          style={{ backgroundImage: 'url(../static/img/13.jpg)' }}
        />
      </div>
      <div className='slide__figure slide__figure--box' data-sort='2'>
        <div
          className='slide__figure-img'
          style={{ backgroundImage: 'url(../static/img/14.jpg)' }}
        />
      </div>
      <div className='slide__figure slide__figure--box' data-sort='3'>
        <div
          className='slide__figure-img'
          style={{ backgroundImage: 'url(../static/img/15.jpg)' }}
        />
      </div>
      <div className='slide__figure slide__figure--box' data-sort='4'>
        <div
          className='slide__figure-img'
          style={{ backgroundImage: 'url(../static/img/16.jpg)' }}
        />
      </div>
      <h2 className='slide__title'>Zenosyne</h2>

      <div className='slide__text'>
        <p className='slide__text-meta'>by Cindy Brighton on 2/21</p>
        <p className='slide__text-description'>
          A vast radiant beach and cooled jeweled moon. Couples naked race down
          by its quiet side. And we laugh like soft, mad children. Smug in the
          wooly cotton brains of infancy.
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
          What would one give for a few human touches in connexion with our old
          silver! We may imagine that our candlesticks of the year 1750 held the
          flickering wax candles which were guttering when the dawn broke when
          our great-great-grandfather lost his fortune at cards in the county of
          —, or maybe it was somebody else’s grandfather. But this is in the
          realms of fancy, and the fortune is literally fabulous. Why are there
          no George Morlands in the silversmith’s craft? Cannot the guilds dig
          out their romantic history from their archives? Just to think that our
          designer of candelabra and flagons ran a fine career on Hounslow Heath
          with gamesters and fighting men; or did he, just that once, have a
          duel with young Lord What’s-his-Name in the Guards, and pinked him?
          Did not the story get to White’s and to the Cocoa Tree Clubs, how the
          tradesman scored! But no such thing. All these initials of makers are
          empty of such vanities. We can do better with prints. Those who
          possess the engraved work of Ryland have the satisfaction of knowing
          that he was hounded by Bow Street runners and hid, like the modern
          Lefroy, at Stepney, and that he was hanged for forgery.
        </p>
        <p>
          The scene may readily be imagined. The second of May 1696 had been
          fixed by Parliament as the last day in which the crowns, half-crowns,
          and shillings were to be received in payment of taxes for face value.
          The guards had to be called in to keep order. The Exchequer was
          besieged by a vast multitude from dawn to midnight. The Act provided
          that the money was to be brought in by before the 4th of May. The 3rd
          was a Sunday, therefore Saturday, the 2nd of May, was actually the
          last day.
        </p>
        <p>
          A remarkable use of conjurators to confirm the evidence of witnesses
          occurs in 850 in a dispute between Cantius, Bishop of Siena, and
          Peter, Bishop of Arezzo, concerning certain parishes claimed by both.
          The occasion was a solemn one, for it was before a council held in
          Rome presided over jointly by Pope Leo IV. and the Emperor Louis II.
          Peter relied upon written charters, while Cantius produced witnesses.
          The Emperor pronounced the claim of the latter to be just, when he and
          twelve priests swore that the oaths of the witnesses were true and
          without deceit, whereupon the disputed parishes were adjudged to him.
        </p>
      </div>
    </div>
  )
}

export default LayoutThree
