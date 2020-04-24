import React from 'react';
import { SPORTS_LIST } from 'constants/pages';
import { Link } from 'react-router-dom';
import svgIcon from 'components/common/svgIcon';
import style from './index.module.css';

const Menu = () => (
  <div className={style.container}>
    {SPORTS_LIST.length > 0 && SPORTS_LIST.map((sport) => (
      <Link
        key={sport}
        to={`/${sport}`}
        className={style.item}
      >
        {svgIcon[sport]}
        {sport}
      </Link>
    ))}
  </div>
);

export default Menu;
