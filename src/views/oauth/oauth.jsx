import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const Oauth = () => {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('isLogin', 'true');
        navigate('/');
    }, []);

    return (
        <></>
    );
}

export default Oauth;