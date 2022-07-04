import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
// import App from './App';
import Birth from "./birthday-reminder/Birth";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Birth />
  </React.StrictMode>
);
