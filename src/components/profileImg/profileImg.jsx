import './profileImg.css';
import defaultProfileImg from '../../assets/default-profile-image.jpeg';
import useMemberStore from "../../stores/useMemberStore";

const ProfileImg = (props) => {
    const {width, height} = props;
    const { profile } = useMemberStore();
    const { profileImg } = profile;


    return (
        <div className='profile-img'
             style={{
                 backgroundImage: `url(${profileImg || defaultProfileImg})`,
                 width: width,
                 height: height
             }}
        >
        </div>
    )
}

export default ProfileImg;