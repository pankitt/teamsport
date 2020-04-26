import React from 'react';
import style from 'components/Main/index.module.css';

const Nba = ({ league = [], title }) => (
  <div>
    <div className={style.title}>
      {title}
      :
    </div>
    <div className={style.teams}>
      {league.length > 0 && league.map(({
        teamId,
        tricode,
        fullName,
        confName
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
            <div className={style.country}>{confName}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Nba;
