import React from 'react';
import svgLogo from 'components/Main/Hockey/svgLogoNHL';
import style from 'components/Main/index.module.css';

const Nhl = ({ league = [], title }) => (
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
        name,
        conference
      }) => (
        <div className={style.item} key={id}>
          <div className={style.image}>
            <div className={style.logo}>
              {svgLogo[abbreviation]}
            </div>
          </div>
          <div>
            {name}
            <div className={style.country}>{conference.name}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Nhl;
