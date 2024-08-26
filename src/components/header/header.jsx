import './header.css';
import ProfileImg from "../profileImg/profileImg";
import { IoIosSearch } from "react-icons/io";
import {NavLink, useNavigate, useSearchParams} from "react-router-dom";
import {useState} from "react";
import URLS from "../../constant/url";
import useSearchFlashcardStore from "../../stores/useSearchFlashcardStore";

const Header = (props) => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState(searchParams.get('question') || '');
    const { getSearchFlashcards, setPage, page } = useSearchFlashcardStore();

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if(searchQuery) {
            setPage(0);
            getSearchFlashcards(searchQuery, page);
            navigate(URLS.SEARCH_FLASHCARD_QUERY(searchQuery));
        }
    };

    return (
        <header className='header-box'>
            <NavLink to='/' className='link'>
                <div className='logo-box'>
                    <div className='logo'></div>
                    <h2 className='logo-heading'>BTONGTALK</h2>
                </div>
            </NavLink>
            <form className='search-box' onSubmit={handleSearchSubmit}>
                <input className='search-input' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder='문제 검색'/>
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