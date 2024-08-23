import './header.css';
import ProfileImg from "../profileImg/profileImg";
import { IoIosSearch } from "react-icons/io";
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return (
        <header className='header-box'>
            <NavLink to='/' className='link'>
                <div className='logo-box'>
                    <div className='logo'></div>
                    <h2 className='logo-heading'>BTONGTALK</h2>
                </div>
            </NavLink>
            <form className='search-box'>
                <input className='search-input' placeholder='문제 검색'/>
                <button className='search-button'>
                    <IoIosSearch size={25} fill={'var(--gray-60)'}/>
                </button>
            </form>
            <NavLink to='/member' className='link'>
                <ProfileImg width={'40px'} height={'40px'}/>
            </NavLink>
        </header>
    )
}

export default Header;