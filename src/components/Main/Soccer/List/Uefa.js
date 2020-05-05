import React from 'react';
import { LEAGUES } from 'constants/leagues';
import { Flags } from 'components/common';
import style from 'components/Main/index.module.css';

const Uefa = ({ league = [], title }) => (
  <div>
    <div className={style.title}>
      {title === LEAGUES.UEFA_CL.TITLE && (
        <img
          src={LEAGUES.UEFA_CL.LOGO}
          alt="League"
          className={style.league}
        />
      )}
      {title === LEAGUES.UEFA_EL.TITLE && (
        <img
          src={LEAGUES.UEFA_EL.LOGO}
          alt="League"
          className={style.league}
        />
      )}
      {title}
      :
    </div>
    <div className={style.teams}>
      {league.length > 0 && league.map(({
        id,
        logoUrl,
        displayOfficialName,
        countryName,
        countryCode
      }) => (
        <div className={style.item} key={id}>
          <div className={style.image}>
            <img
              src={logoUrl}
              alt={displayOfficialName}
              className={style.logo}
            />
          </div>
          <div>
            {displayOfficialName}
            <Flags name={countryName} code={countryCode} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Uefa;
