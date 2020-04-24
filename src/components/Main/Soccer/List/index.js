import React from 'react';
import style from './index.module.css';

const List = ({ league }) => {
  console.log('Soccer', league);

  return (
    <div className={style.container}>
      Footer
    </div>
  );
};

export default List;
