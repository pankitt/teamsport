import React from 'react';
import style from 'components/Main/index.module.css';

const Nfl = ({ league = [], title }) => {
  const division = (abbr) => {
    if (abbr === 'HAM' || abbr === 'MTL' || abbr === 'OTT' || abbr === 'TOR') {
      return 'East Division';
    }
    if (abbr === 'BC' || abbr === 'CGY' || abbr === 'EDM' || abbr === 'SSK' || abbr === 'WPG') {
      return 'West Division';
    }
    return abbr;
  };

  return (
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
          Name,
          Acronym
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
              <div className={style.country}>{division(Acronym)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nfl;
