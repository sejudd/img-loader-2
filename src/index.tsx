import React from 'react';
import ReactDOM from 'react-dom/client';

import '@aranda/aranda.icons/lib/aranda-icon.css';
import { StylesProvider } from "@aranda/aranda.ui";
import App from './App';
import "./index.css"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
   
      <StylesProvider product='ASMS' >
      <App />
      </StylesProvider>
      
  </React.StrictMode>
);


