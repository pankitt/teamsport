import React from 'react';
import { Flags } from 'components/common';
import style from 'components/Main/index.module.css';

const Nfl = ({ league = [], title }) => (
  <div>
    <div className={style.title}>
      <img
        src="https://www.flashscore.com/res/image/data/tU1ZcI9j-AJ2C7kM9.png"
        alt="League"
        className={style.league}
      />
      {title}
      :
    </div>
    <div className={style.teams}>
      {league.length > 0 && league.map(({
        SeoId,
        Logo,
        City,
        Name
      }) => (
        <div className={style.item} key={SeoId}>
          <div className={style.image}>
            <img
              src={Logo}
              alt={Name}
              className={style.logoSVG}
            />
          </div>
          <div>
            {City}
            {' '}
            {Name}
            <Flags name="Canada" code="CAN" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Nfl;
