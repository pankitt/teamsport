import React from 'react';
import style from './index.module.css';

const List = ({ league = [], title }) => (
  <div>
    <div className={style.title}>
      {title}
      :
    </div>
    <div className={style.container}>
      {league.length > 0 && league.map(({
        id,
        logoUrl,
        displayOfficialName,
        countryName
      }) => (
        <div className={style.item} key={id}>
          <div className={style.image}>
            <img src={logoUrl} alt={displayOfficialName} />
          </div>
          <div>
            {displayOfficialName}
            <div className={style.country}>{countryName}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default List;
