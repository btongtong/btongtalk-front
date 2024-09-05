import HeaderL from "../../layout/base/base";
import Profile from "../../components/profile/profile";
import NavbarL from "../../layout/navbar/navbar";
import Statistics from "../../components/statistics/statistics";
import useStatisticStore from "../../stores/useStatisticStore";
import {useEffect} from "react";
import STATUS from "../../constant/recordStatus";
import useMemberStore from "../../stores/useMemberStore";

const Member = (props) => {

    const { getProfile } = useMemberStore();
    const { getStatistics } = useStatisticStore();

    useEffect(() => {
        getProfile();
    }, [getProfile]);

    useEffect(() => {
        getStatistics(STATUS.KNOWN);
    }, [getStatistics]);

    return (
        <HeaderL>
            <div className='container'>
                <Profile/>
                <NavbarL>
                    <div className='component'>
                        <Statistics />
                    </div>
                </NavbarL>
            </div>
        </HeaderL>
    )
}

export default Member;