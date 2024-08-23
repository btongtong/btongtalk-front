import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Profile from "./components/profile/profile";
import Navbar from "./components/navbar/navbar";
import Table from './components/table/table';
import Statistics from "./components/statistics/statistics";
import Flashcard from "./components/flashcard/flashcard";
import Category from "./components/category/category";
import Login from "./components/login/login";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
        <Login/>
    </React.StrictMode>
);

