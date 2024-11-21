import './header.css';
import { IoIosSearch } from "react-icons/io";
import {NavLink, useNavigate, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import URLS from "../../constant/url";
import useSearchFlashcardStore from "../../stores/useSearchFlashcardStore";
import useMemberStore from "../../stores/useMemberStore";

const Header = (props) => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState(searchParams.get('question') || '');
    const { getSearchFlashcards, setPage, page } = useSearchFlashcardStore();
    const { profile, getProfile } = useMemberStore();
    const isLogin = localStorage.getItem('isLogin')

    useEffect(() => {
        if (isLogin) {
            getProfile();
        }
    }, [isLogin]);

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
            {isLogin ? (
                <NavLink to='/member' className='link'>
                    <div className='profile-img' style={{backgroundImage: `url(${profile.profileImg})`}}></div>
                </NavLink>
            ) : (
                <NavLink to='/login' className='link'>
                    <div className='login-msg-box'>
                        로그인
                    </div>
                </NavLink>
            )}
        </header>
    )
}

export default Header;