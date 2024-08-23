import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./views/main/main";
import Subcategory from "./views/subcategory/subcategory";
import Flashcard from "./views/flashcard/flashcard";
import Member from "./views/member/member";
import Correct from "./views/correct/correct";
import Wrong from "./views/wrong/wrong";
import Login from "./views/login/login";

function App() {
    return (
      <div className="App">
        <Router>
          <Routes>
              <Route path='/' element={<Main/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/category' element={<Subcategory/>} />
              <Route path='/flashcard' element={<Flashcard/>} />
              <Route path='/member'>
                  <Route path='' element={<Member/>}/>
                  <Route path='correct' element={<Correct/>}/>
                  <Route path='wrong' element={<Wrong/>}/>
              </Route>
          </Routes>
        </Router>
      </div>
    );
}

export default App;
