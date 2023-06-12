import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//router
import { BrowserRouter } from 'react-router-dom';


//style

import "./assets/scss/index.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


