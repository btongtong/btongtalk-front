import './login.css'
import useAuthStore from "../../stores/useAuthStore";
import API_URLS from "../../apis/url";

const Login = (props) => {
    const { onOauthLogin } = useAuthStore.getState();

    return(
        <div className='login-box'>
            <div className='login-logo'>
                <h2 className='title'>BTONGTALK 로그인</h2>
            </div>
            <div className='buttons'>
                <p className='description'>SNS 계정으로 간편하게 시작하세요!</p>
                <button className='naver-button' onClick={() => onOauthLogin(API_URLS.NAVERLOGIN())}>
                    <div className='naver'/>
                    <span>네이버로 계속하기</span>
                </button>
                <button className='kakao-button' onClick={() => onOauthLogin(API_URLS.KAKAOLOGIN())}>
                    <div className='kakao'/>
                    <span>카카오로 계속하기</span>
                </button>
            </div>
        </div>
    )
}

export default Login;