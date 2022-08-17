import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as themeData from './components/styles/Theme.styled';
import { getFromLocalStorage, setToLocalStorage } from './utils/storage';

const Index = () => {
  if (!getFromLocalStorage("all-themes")) {
    setToLocalStorage('all-themes', themeData.themes);
  }
  return (
    <App />
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);

