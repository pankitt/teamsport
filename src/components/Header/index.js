import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SPORTS_LIST } from 'constants/pages';
import svgIcon from 'components/common/svgIcon';
import style from './index.module.css';

const Header = () => (
  <div className={style.container}>
    <Link
      className={style.linkSvg}
      to="/"
    >
      {svgIcon.logo}
    </Link>
    {SPORTS_LIST.length > 0 && SPORTS_LIST.map((sport) => (
      <NavLink
        key={sport}
        to={`/${sport}`}
        className={style.link}
        activeClassName={style.active}
      >
        {sport}
      </NavLink>
    ))}
  </div>
);

export default Header;
