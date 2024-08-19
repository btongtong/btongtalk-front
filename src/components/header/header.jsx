import './header.css';
import ProfileImg from "../profileImg/profileImg";
import { IoIosSearch } from "react-icons/io";

const Header = (props) => {

    return (
        <header className='header'>
            <div className='logo-box'></div>
            <form className='search-box'>
                <input className='search-input' placeholder='문제 검색'/>
                <button className='search-button'>
                    <IoIosSearch size={25} fill={'#717171'}/>
                </button>
            </form>
            <div className='profile-img-box'>
                <ProfileImg></ProfileImg>
            </div>
        </header>
    )
}

export default Header;