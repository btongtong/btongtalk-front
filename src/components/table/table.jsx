import './table.css';
import Pagination from "../pagination/pagination";
import {useNavigate} from "react-router-dom";

const Table = (props) => {
    const navigate = useNavigate();
    const { showPagination, navigateUrl, headers, data } = props.propsData;
    const { pageData } = props.propsData;
    const statusColIndex = headers.indexOf('상태');

    const getStatusClass = (colIndex, status) => {
        if(colIndex === statusColIndex) {
            if (status === 'KNOWN') return 'known-status';
            if (status === 'UNKNOWN') return 'unknown-status';
        }
        return '';
    };

    const handleClick = (id) => {
        const url = navigateUrl(id);
        navigate(url);
    }

    return (
        <div className='table-box'>
            <table>
                <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data.length === 0 ? (
                    <tr className='no-data-tr'>
                        <td colSpan={headers.length} className='no-data-td'>
                            <span className='title'>데이터가 존재하지 않습니다.</span>
                        </td>
                    </tr>
                ) : (
                    data.map((row) => (
                        <tr key={row['#']} onClick={() => handleClick(row['#'])}>
                            {headers.map((header, colIndex) => (
                                <td key={colIndex} className={getStatusClass(colIndex, row[header])}>
                                    {row[header]}
                                </td>
                            ))}
                        </tr>
                    ))
                )}
                </tbody>
            </table>
            {showPagination && (
                <Pagination pageData={pageData}/>
            )}
        </div>
    )
}

export default Table;
