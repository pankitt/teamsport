import React from 'react';
import { LEAGUES } from 'constants/leagues';
import { Flags } from 'components/common';
import style from 'components/Main/index.module.css';

const Chl = ({ league = [], title }) => (
  <div>
    <div className={style.title}>
      <img
        src={LEAGUES.CHL.LOGO}
        alt="League"
        className={style.league}
      />
      {title}
      :
    </div>
    <div className={style.teams}>
      {league.length > 0 && league.map(({
        externalId,
        name,
        country
      }) => (
        <div className={style.item} key={externalId}>
          <div className={style.image}>
            <img
              src={`https://res.cloudinary.com/chl-production/image/upload/c_fit,dpr_1.0,f_webp,g_center,h_133,q_auto:low,w_150/v1/chl-prod/assets/teams/${externalId}`}
              alt={name}
              className={style.logo}
            />
          </div>
          <div>
            {name}
            <Flags name={country && country.name} code={country && country.code} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Chl;
