import './profile.css'
import useMemberStore from "../../stores/useMemberStore";

const Profile = (props) => {
    const { profile } = useMemberStore();
    const { profileImg, name, email } = profile;

    return (
        <div className='profile-box'>
            <div className='profile-img' style={{backgroundImage: `url(${profileImg})`}}>
            </div>
            <div className='spacing'></div>
            <h2 className='name heading'>{name}</h2>
            <span className='email description'>{email}</span>
        </div>
    )
}

export default Profile;