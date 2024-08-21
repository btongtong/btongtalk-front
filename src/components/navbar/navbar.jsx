import './navbar.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Profile from "../profile/profile";

const Navbar = (props) => {
    return (
        <Router>
            <div className='navbar-box'>
                <nav>
                    <ul>
                        <li><Link to='/statistics'>분포</Link></li>
                        <li><Link to='/correct'>맞은문제</Link></li>
                        <li><Link to='/wrong'>틀린문제</Link></li>
                    </ul>
                </nav>
                <div className='component'>
                    <Routes>
                        <Route path='/statistics' element={<Profile/>}/>
                        <Route path='/correct' element={<Profile/>}/>
                        <Route path='/wrong' element={<Profile/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default Navbar;