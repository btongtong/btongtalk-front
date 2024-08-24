import HeaderL from "../../layout/header/header";
import Profile from "../../components/profile/profile";
import NavbarL from "../../layout/navbar/navbar";
import Statistics from "../../components/statistics/statistics";

const Member = (props) => {

    return (
        <HeaderL>
            <div className='container'>
                <Profile/>
                <NavbarL>
                    <div className='component'>
                        <Statistics />
                    </div>
                </NavbarL>
            </div>
        </HeaderL>
    )
}

export default Member;