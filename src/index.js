import React from 'react';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom" 
import ReactDOM from 'react-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);