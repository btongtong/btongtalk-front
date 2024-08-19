import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Category from "./components/category/category";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App/>
    <Category />
  </React.StrictMode>
);

