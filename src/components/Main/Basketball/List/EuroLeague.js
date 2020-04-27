import React from 'react';
import { countryAbbr } from 'utils';
import style from 'components/Main/index.module.css';

const EuroLeague = ({ league = [], title }) => (
  <div>
    <div className={style.title}>
      <img
        src="https://www.flashscore.com/res/image/data/bTE9GzCO-4UukMJVC.png"
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
            <div className={style.country}>{country && countryAbbr(country.iso)}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default EuroLeague;
