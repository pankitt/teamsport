import React from 'react';
import { LEAGUES } from 'constants/leagues';
import { Flags } from 'components/common';
import style from 'components/Main/index.module.css';

const Mlb = ({ league = [], title }) => {
  const countryAbbr = (abbr) => {
    if (abbr === 'TOR') {
      return 'CAN';
    }
    return 'USA';
  };

  return (
    <div>
      <div className={style.title}>
        <img
          src={LEAGUES.MLB.LOGO}
          alt="League"
          className={style.league}
        />
        {title}
        :
      </div>
      <div className={style.teams}>
        {league.length > 0 && league.map(({
          id,
          name,
          abbreviation
        }) => (
          <div className={style.item} key={id}>
            <div className={style.image}>
              <img
                src={`https://www.mlbstatic.com/team-logos/${id}.svg`}
                alt={name}
                className={style.logoSVGpad}
              />
            </div>
            <div>
              {name}
              <Flags name={countryAbbr(abbreviation)} code={countryAbbr(abbreviation)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mlb;
