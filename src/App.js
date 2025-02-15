import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./views/main/main";
import Subcategory from "./views/subcategory/subcategory";
import Member from "./views/member/member";
import Login from "./views/login/login";
import URLS from './constant/url';
import Flashcard from "./views/flashcard/flashcard";
import Record from "./views/record/record";
import STATUS from "./constant/recordStatus";
import SearchFlashcard from "./views/searchFlashcard/searchFlashcard";
import Oauth from "./views/oauth/oauth";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path={URLS.MAIN()} element={<Main />} />
                    <Route path={URLS.LOGIN()} element={<Login />} />
                    <Route path={URLS.OAUTH()} element={<Oauth />} />
                    <Route path={URLS.CATEGORY(':categoryId')} element={<Subcategory />} />
                    <Route path={URLS.FLASHCARDS(':categoryId')} element={<Flashcard/>} />
                    <Route path={URLS.FLASHCARD(':flashcardId')} element={<Flashcard/>} />
                    <Route path={URLS.SEARCH_FLASHCARD()} element={<SearchFlashcard />} />
                    <Route path={URLS.MEMBER()} element={<Member />}/>
                    <Route path={URLS.MEMBER_CORRECT()} element={<Record status={STATUS.KNOWN} />} />
                    <Route path={URLS.MEMBER_WRONG()} element={<Record status={STATUS.UNKNOWN} />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
