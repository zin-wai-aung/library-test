import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MainProvider from './MainProvider.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <MainProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </MainProvider>
);
