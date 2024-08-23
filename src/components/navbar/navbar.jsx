import './navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div className='navbar-box'>
            <nav>
                <ul>
                    <NavLink to='/member' end className={({ isActive }) => isActive ? 'link active' : 'link'}><li>분포</li></NavLink>
                    <NavLink to='/member/correct' className={({ isActive }) => isActive ? 'link active' : 'link'}><li>맞은문제</li></NavLink>
                    <NavLink to='/member/wrong' className={({ isActive }) => isActive ? 'link active' : 'link'}><li>틀린문제</li></NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
