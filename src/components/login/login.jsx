import './login.css'
import kakaoImg from '../../assets/kakao.png';
import naverImg from '../../assets/naver.png';

const Login = (props) => {
    return(
        <div className='login-box'>
            <div className='login-logo'>
                <h2 className='title'>BTONGTALK 로그인</h2>
            </div>
            <div className='buttons'>
                <p className='description'>SNS 계정으로 간편하게 시작하세요!</p>
                <button className='naver-button'>
                    <div className='naver'/>
                    <span className='logo-title'>네이버로 계속하기</span>
                </button>
                <button className='kakao-button'>
                    <div className='kakao'/>
                    <span className='logo-title'>카카오로 계속하기</span>
                </button>
            </div>
        </div>
    )
}

export default Login;