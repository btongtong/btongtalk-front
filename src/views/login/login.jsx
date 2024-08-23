import './login.css'
import LoginC from "../../components/login/login";

const Login = (props) => {
    return (
        <div className='login-container'>
            <div className='spacing'></div>
            <header className='header-box'>
                <div className='logo-box'>
                    <div className='logo'></div>
                    <h2 className='logo-heading'>BTONGTALK</h2>
                </div>
            </header>
            <div className='login-content'>
                <section className='greeting'>
                    <div className='logo'></div>
                    <p className='heading'>환영합니다! 면접 성공을 위한 첫 걸음, <br/>
                        배통톡입니다.</p>
                </section>
                <section className='login-section'><LoginC/></section>
            </div>
        </div>
    )
}

export default Login;