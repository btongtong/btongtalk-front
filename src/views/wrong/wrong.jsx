import HeaderL from "../../layout/header/header";
import Profile from "../../components/profile/profile";
import NavbarL from "../../layout/navbar/navbar";
import Table from "../../components/table/table";

const Wrong = (props) => {
    return (
        <HeaderL>
            <div className='container'>
                <Profile/>
                <NavbarL>
                    <div className='component'>
                        <Table showPagination={true} />
                    </div>
                </NavbarL>
            </div>
        </HeaderL>
    )
}

export default Wrong;