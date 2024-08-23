import './member.css';
import HeaderL from "../../layout/header/header";
import Profile from "../../components/profile/profile";
import Navbar from "../../components/navbar/navbar";

const Member = (props) => {
    return (
        <HeaderL>
            <div className='container'>
                <Profile/>
                <Navbar/>
            </div>
        </HeaderL>
    )
}

export default Member;