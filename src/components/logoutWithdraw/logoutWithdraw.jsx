import './logoutWithdraw.css'
import useAuthStore from "../../stores/useAuthStore";

const LogoutWithdraw = (props) => {
    const { onLogout, onWithdraw } = useAuthStore();

    return (
        <div className='logout-withdraw-box'>
            <div className='divide-line'></div>
            <section className='logout-withdraw-buttons'>
                <button className='logout-btn description' onClick={() => onLogout()}>로그아웃</button>
                <p className='description'>|</p>
                <button className='withdraw-btn description' onClick={() => onWithdraw()}>회원탈퇴</button>
            </section>
        </div>
    )
}

export default LogoutWithdraw;