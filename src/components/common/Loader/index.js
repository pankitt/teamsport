import React from 'react';
import svgIcon from 'components/common/svgIcon';
import style from './index.module.css';

const Loader = () => (
  <div className={style.container}>
    <span className={style.loader}>{svgIcon.loader}</span>
  </div>
);

export default Loader;
