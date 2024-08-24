import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./views/main/main";
import Subcategory from "./views/subcategory/subcategory";
import Flashcard from "./views/flashcard/flashcard";
import Member from "./views/member/member";
import Correct from "./views/correct/correct";
import Wrong from "./views/wrong/wrong";
import Login from "./views/login/login";
import URLS from './constant/url';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path={URLS.MAIN()} element={<Main />} />
                    <Route path={URLS.LOGIN()} element={<Login />} />
                    <Route path={URLS.CATEGORY(':categoryId')} element={<Subcategory />} />
                    <Route path={URLS.FLASHCARD()} element={<Flashcard />} />
                    <Route path={URLS.MEMBER()} element={<Member />}/>
                    <Route path={URLS.MEMBER_CORRECT()} element={<Correct />} />
                    <Route path={URLS.MEMBER_WRONG()} element={<Wrong />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
