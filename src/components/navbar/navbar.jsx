import './navbar.css'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Profile from "../profile/profile";
import Statistics from "../statistics/statistics";
import Table from "../table/table";

const Navbar = (props) => {
    return (
        <Router>
            <div className='navbar-box'>
                <nav>
                    <ul>
                        <NavLink to='/statistics' activeClassName='active'><li>분포</li></NavLink>
                        <NavLink to='/correct' activeClassName='active'><li>맞은문제</li></NavLink>
                        <NavLink to='/wrong' activeClassName='active'><li>틀린문제</li></NavLink>
                    </ul>
                </nav>
                <div className='component'>
                    <Routes>
                        <Route path='/statistics' element={<Statistics/>}/>
                        <Route path='/correct' element={<Table showPagination={true}/>}/>
                        <Route path='/wrong' element={<Table showPagination={true}/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default Navbar;
