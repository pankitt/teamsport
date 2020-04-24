import React from 'react';
import style from './index.module.css';

const List = ({ league }) => {
  console.log('Soccer', league);

  return (
    <div className={style.container}>
      <h1>Soccer</h1>
    </div>
  );
};

export default List;
