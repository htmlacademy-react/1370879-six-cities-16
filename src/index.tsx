import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// console.log(root);

root.render(
  <React.StrictMode>
    <App places={312}/>
  </React.StrictMode>
);
