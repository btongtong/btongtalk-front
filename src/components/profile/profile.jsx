import './profile.css'
import ProfileImg from "../profileImg/profileImg";
import useMemberStore from "../../stores/useMemberStore";

const Profile = (props) => {
    const { profile } = useMemberStore();
    const { email } = profile;

    return (
        <div className='profile-box'>
            <ProfileImg width={'120px'} height={'120px'}/>
            <h2 className='email heading'>{email}</h2>
        </div>
    )
}

export default Profile;