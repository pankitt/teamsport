import React from 'react';
import { Flags } from 'components/common';
import svgLogo from 'components/Main/Football/svgLogoAFL';
import style from 'components/Main/index.module.css';

const Afl = ({ league = [], title }) => (
  <div>
    <div className={style.title}>
      <img
        src="https://www.flashscore.com/res/image/data/K00W62V1-ARWG46at.png"
        alt="League"
        className={style.league}
      />
      {title}
      :
    </div>
    <div className={style.teams}>
      {league.length > 0 && league.map(({
        abbreviation,
        name
      }) => (
        <div className={style.item} key={abbreviation}>
          <div className={style.image}>
            <div className={style.logoSVG}>
              {svgLogo[abbreviation]}
            </div>
          </div>
          <div>
            {name}
            <Flags name="Australia" code="AUS" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Afl;
