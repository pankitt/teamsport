import React from 'react';
import style from 'components/Main/index.module.css';

const Nhl = ({ league = [], title }) => (
  <div>
    <div className={style.title}>
      <img
        src="https://www.flashscore.com/res/image/data/vejtzfhU-CdjtEF4s.png"
        alt="League"
        className={style.league}
      />
      {title}
      :
    </div>
    <div className={style.teams}>
      {league.length > 0 && league.map(({
        id,
        name,
        league: conference
      }) => (
        <div className={style.item} key={id}>
          <div className={style.image}>
            <img
              src={`https://www.mlbstatic.com/team-logos/${id}.svg`}
              alt={name}
              className={style.logoSVGpad}
            />
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
