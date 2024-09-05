import HeaderL from "../../layout/base/base";
import Profile from "../../components/profile/profile";
import NavbarL from "../../layout/navbar/navbar";
import Table from "../../components/table/table";
import {useEffect} from "react";
import URLS from "../../constant/url";
import useRecordStore from "../../stores/useRecordStore";

const Record = (props) => {
    const { status } = props;
    const { customRecords, headers, getRecords, page, totalPages, setPage } = useRecordStore();

    const propsData = {
        showPagination: true,
        navigateUrl: URLS.FLASHCARD,
        headers: headers,
        data: customRecords,
        pageData: {
            totalPages: totalPages,
            page: page,
            setPage: setPage
        }
    }

    useEffect(() => {
        getRecords(status, page);
    }, [status, page, getRecords]);

    return (
        <HeaderL>
            <div className='container'>
                <Profile/>
                <NavbarL>
                    <div className='component'>
                        <Table propsData={propsData} />
                    </div>
                </NavbarL>
            </div>
        </HeaderL>
    )
}

export default Record;