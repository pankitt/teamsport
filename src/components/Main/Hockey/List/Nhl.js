import React from 'react';
import { Flags } from 'components/common';
import svgLogo from 'components/Main/Hockey/svgLogoNHL';
import style from 'components/Main/index.module.css';

const Nhl = ({ league = [], title }) => {
  const countryAbbr = (abbr) => {
    switch (abbr) {
      case 'TOR':
      case 'CGY':
      case 'EDM':
      case 'MTL':
      case 'OTT':
      case 'VAN':
      case 'WPG':
        return 'CAN';
      default:
        return 'USA';
    }
  };

  return (
    <div>
      <div className={style.title}>
        <img
          src="https://www.flashscore.com/res/image/data/xlRuQfhD-d8noefNR.png"
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
          name
        }) => (
          <div className={style.item} key={id}>
            <div className={style.image}>
              <div className={style.logoSVG}>
                {svgLogo[abbreviation]}
              </div>
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

export default Nhl;
