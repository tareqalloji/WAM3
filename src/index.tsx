import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "./Services/i18n/i18n";
import { Routing } from "./Services/routing";
import './assets/Font.css';
import App from './App';
import Login from './Pages/User/Authentication/Login/Login';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);


reportWebVitals();
