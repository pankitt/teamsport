import React from 'react';
import { LEAGUES } from 'constants/leagues';
import { Flags } from 'components/common';
import style from 'components/Main/index.module.css';

const EuroLeague = ({ league = [], title }) => (
  <div>
    <div className={style.title}>
      <img
        src={LEAGUES.EURO_LEAGUE.LOGO}
        alt="League"
        className={style.league}
      />
      {title}
      :
    </div>
    <div className={style.teams}>
      {league.length > 0 && league.map(({
        slug,
        logo,
        name,
        country
      }) => (
        <div className={style.item} key={slug}>
          <div className={style.image}>
            <img
              src={logo}
              alt={name}
              className={style.logo}
            />
          </div>
          <div>
            {name}
            <Flags name={country && country.iso} code={country && country.iso} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default EuroLeague;
