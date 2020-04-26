import React from 'react';
import style from 'components/Main/index.module.css';

const Nfl = ({ league = [], title }) => {
  const conference = (id) => {
    if (id === 3 || id === 5 || id === 11 || id === 10) {
      return 'American Conference';
    }
    if (id === 7 || id === 9 || id === 12 || id === 13) {
      return 'National Conference';
    }
    return id;
  };

  return (
    <div>
      <div className={style.title}>
        <img
          src="https://www.flashscore.com/res/image/data/8AA2C9jD-jqqU0YfF.png"
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
          location,
          name,
          groupId
        }) => (
          <div className={style.item} key={id}>
            <div className={style.image}>
              <img
                src={`https://static.nfl.com/static/site/img/logos/svg/teams/${abbreviation === 'LAR' ? 'LA' : abbreviation}.svg`}
                alt={name}
                className={style.logoSVG}
              />
            </div>
            <div>
              {location}
              {' '}
              {name}
              <div className={style.country}>{conference(groupId)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nfl;
