import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from "./components/navbar/navbar";
import Category from "./components/category/category";
import Header from "./components/header/header";
import Login from "./views/login/login";
import Main from "./views/main/main";
import Subcategory from "./views/subcategory/subcategory";
import Flashcard from "./views/flashcard/flashcard";
import Member from "./views/member/member";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

