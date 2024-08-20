import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Category from "./components/category/category";
import Heading from "./components/heading/heading";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
        <Heading/>
        <Category/>
    </React.StrictMode>
);

