import React from 'react';
import style from 'components/Main/index.module.css';

const EmptyList = ({ title, logo }) => (
  <div>
    <div className={style.title}>
      <img
        src={logo}
        alt="League"
        className={style.league}
      />
      {title}
      :
    </div>
    <div className={style.title}>
      <h6>-- Empty --</h6>
    </div>
  </div>
);

export default EmptyList;
