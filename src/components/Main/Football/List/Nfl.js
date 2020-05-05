import React from 'react';
import { LEAGUES } from 'constants/leagues';
import { Flags } from 'components/common';
import style from 'components/Main/index.module.css';

const Nfl = ({ league = [], title }) => (
  <div>
    <div className={style.title}>
      <img
        src={LEAGUES.NFL.LOGO}
        alt="League"
        className={style.league}
      />
      {title}
      :
    </div>
    <div className={style.teams}>
      {league.length > 0 && league.map(({
        id,
        abbreviation,
        location,
        name
      }) => (
        <div className={style.item} key={id}>
          <div className={style.image}>
            <img
              src={`/static/site/img/logos/svg/teams/${abbreviation === 'LAR' ? 'LA' : abbreviation}.svg`}
              alt={name}
              className={style.logoSVG}
            />
          </div>
          <div>
            {location}
            {' '}
            {name}
            <Flags name="USA" code="USA" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Nfl;
