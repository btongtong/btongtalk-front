import './profileImg.css';
import defaultProfileImg from '../../assets/default-profile-image.jpeg';

const ProfileImg = (props) => {
    const profileImg = props.profileImg;

    return (
        <div className='profile-img'
             style={{backgroundImage: `url(${profileImg ? profileImg : defaultProfileImg})`}}>
        </div>
    )
}

export default ProfileImg;