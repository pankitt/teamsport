import React from 'react';
import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';
import style from './index.module.css';

const App = () => (
  <div className={style.container}>
    <div>
      <Header />
      <Main />
    </div>
    <Footer />
  </div>
);

export default App;
