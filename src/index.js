import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from "./components/navbar/navbar";
import Flashcard from "./components/flashcard/flashcard";
import Category from "./components/category/category";
import Header from "./components/header/header";
import Login from "./views/login/login";
import Main from "./views/main/main";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
        <Main/>
    </React.StrictMode>
);

