import React from 'react';
import { LEAGUES } from 'constants/leagues';
import { MLS_LOGO } from 'components/Main/Soccer/constants';
import { Flags } from 'components/common';
import style from 'components/Main/index.module.css';

const Mls = ({ league = [], title }) => {
  const logo = (abbr, conference) => {
    if (abbr === 'COL' && conference === 'Western Conference') {
      return 'COL_W';
    }
    if (abbr === 'COL' && conference === 'Eastern Conference') {
      return 'COL_E';
    }
    return abbr;
  };

  return (
    <div>
      <div className={style.title}>
        <img
          src={LEAGUES.MLS.LOGO}
          alt="League"
          className={style.league}
        />
        {title}
        :
      </div>
      <div className={style.teams}>
        {league.length > 0 && league.map(({
          n_TeamID: id,
          c_TeamShort: abbr,
          c_Team: name,
          c_Phase: conference,
          c_TeamNatioShort: country
        }) => (
          <div className={style.item} key={id}>
            <div className={style.image}>
              <img
                src={MLS_LOGO[logo(abbr, conference)]}
                alt={name}
                className={style.logo}
              />
            </div>
            <div>
              {name}
              <Flags name={country} code={country} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mls;
