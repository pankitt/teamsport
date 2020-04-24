import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'url-search-params-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';

render(<Root />, document.getElementById('root'));
