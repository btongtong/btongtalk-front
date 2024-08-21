import './profileImg.css';
import defaultProfileImg from '../../assets/default-profile-image.jpeg';

const ProfileImg = (props) => {
    const profileImg = props.profileImg;
    const {width, height} = props;

    return (
        <div className='profile-img'
             style={{
                 backgroundImage: `url(${profileImg ? profileImg : defaultProfileImg})`,
                 width: width,
                 height: height
             }}
        >
        </div>
    )
}

export default ProfileImg;