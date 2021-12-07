import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { Router } from './components/Router';
import { ProviderToodoContext } from './context';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProviderToodoContext>
        <Router />
      </ProviderToodoContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
