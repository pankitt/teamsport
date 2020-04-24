import React from 'react';
import style from './index.module.css';

const Footer = () => (
  <div className={style.container}>
    <span
      className={style.top}
      onClick={() => window.scrollTo(0, 0)}
    >
      &uarr; TOP &uarr;
    </span>
  </div>
);

export default Footer;
