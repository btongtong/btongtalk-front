import './profile.css'
import ProfileImg from "../profileImg/profileImg";
import useMemberStore from "../../stores/useMemberStore";

const Profile = (props) => {
    const { profile } = useMemberStore();
    const { name, email } = profile;

    return (
        <div className='profile-box'>
            <ProfileImg width={'120px'} height={'120px'}/>
            <div className='spacing'></div>
            <h2 className='name heading'>{name}</h2>
            <span className='email description'>{email}</span>
        </div>
    )
}

export default Profile;