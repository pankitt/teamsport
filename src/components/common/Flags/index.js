import React from 'react';
import { flagAbbr, countryAbbr } from './utils';
import style from './index.module.css';

const Flags = ({ name, code }) => {
  const flag = (abbr) => {
    if (abbr === 'uk') {
      return 'https://www.eliteleague.co.uk/dist/images/flags/flags/4x3/gb.svg';
    }
    return `https://api.fifa.com/api/v1/picture/flags-sq-4/${flagAbbr(abbr)}`;
  };

  return (
    <div className={style.container}>
      <img
        src={flag(code)}
        alt={code}
        className={style.flag}
      />
      <span className={style.country}>{countryAbbr(name)}</span>
    </div>
  );
};

export default Flags;
