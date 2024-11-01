import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MouseTracker from './MouseTracker';
import UpdateTitle  from './UpdateTitle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <MouseTracker/>
    <UpdateTitle/>
  </React.StrictMode>
);

reportWebVitals();