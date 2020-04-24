import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import './index.module.css';

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Root;
