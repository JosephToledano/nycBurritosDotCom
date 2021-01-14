import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';

import App from './App.js';
import PageRouter from './PageRouter'
import './index.css';
import { BrowserRouter } from 'react-router-dom';

// uncomment so that webpack can bundle styles
// import styles from './scss/Index.css';

render((
    <BrowserRouter>
        <PageRouter/>
    </BrowserRouter>
), document.getElementById('root'));
