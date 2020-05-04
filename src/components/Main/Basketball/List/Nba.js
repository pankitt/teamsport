import React from 'react';
import { Flags } from 'components/common';
import style from 'components/Main/index.module.css';

const Nba = ({ league = [], title }) => {
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
          src="https://www.flashscore.com/res/image/data/UJuqUBEO-SQN4wn5S.png"
          alt="League"
          className={style.league}
        />
        {title}
        :
      </div>
      <div className={style.teams}>
        {league.length > 0 && league.map(({
          teamId,
          tricode,
          fullName
        }) => (
          <div className={style.item} key={teamId}>
            <div className={style.image}>
              <img
                src={`https://www.nba.com/assets/logos/teams/primary/web/${tricode}.svg`}
                alt={fullName}
                className={style.logo}
              />
            </div>
            <div>
              {fullName}
              <Flags name={countryAbbr(tricode)} code={countryAbbr(tricode)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nba;
