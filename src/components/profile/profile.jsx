import './profile.css'
import ProfileImg from "../profileImg/profileImg";

const Profile = (props) => {
    return (
        <div className='profile-box'>
            <ProfileImg width={'120px'} height={'120px'}/>
            <h2 className='email heading'>leeym2615@naver.com</h2>
        </div>
    )
}

export default Profile;