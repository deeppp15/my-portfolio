import React from 'react';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom" ;
import ReactDOM from 'react-dom';
import {Helmet} from 'react-helmet';
const root = ReactDOM.createRoot(document.getElementById('root'));
const TITLE = 'Deep Vora';
root.render(
  <BrowserRouter>
    <App />
  
  <Helmet>
  <title>{ TITLE }</title>
</Helmet>
</BrowserRouter>
);