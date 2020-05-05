import React from 'react';
import { LEAGUES } from 'constants/leagues';
import { Flags } from 'components/common';
import style from 'components/Main/index.module.css';

const Cfl = ({ league = [], title }) => (
  <div>
    <div className={style.title}>
      <img
        src={LEAGUES.CFL.LOGO}
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

export default Cfl;
