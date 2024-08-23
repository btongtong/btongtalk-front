import './header.css';
import ProfileImg from "../profileImg/profileImg";
import { IoIosSearch } from "react-icons/io";

const Header = (props) => {

    return (
        <header className='header-box'>
            <div className='logo-box'>
                <div className='logo'></div>
                <h2 className='logo-heading'>BTONGTALK</h2>
            </div>
            <form className='search-box'>
                <input className='search-input' placeholder='문제 검색'/>
                <button className='search-button'>
                    <IoIosSearch size={25} fill={'var(--gray-60)'}/>
                </button>
            </form>
            <ProfileImg width={'40px'} height={'40px'}/>
        </header>
    )
}

export default Header;