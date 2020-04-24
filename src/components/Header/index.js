import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SPORTS } from 'constants/pages';
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
    {SPORTS.length > 0 && SPORTS.map((sport) => (
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
