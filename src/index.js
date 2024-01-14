import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
// import StateProps from './StateProps';
// import { Map } from './Map';
// import Lifecycle from './reactDasar/Lifecycle.js';
import Crud from './crud'
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <StateProps/> */}
    {/* <Map/> */}
    {/* <Lifecycle/> */}
    <Crud/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
