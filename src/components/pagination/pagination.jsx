import './pagination.css';
import {useEffect} from "react";

const Pagination = (props) => {
    const { totalPages, page, setPage } = props.pageData;
    const handleClick = (newPage) => {
        if(newPage >= 0 && newPage < totalPages) {
            setPage(newPage);
        }
    }

    useEffect(() => {
        if(page >= totalPages) {
            setPage(totalPages-1);
        }
    }, [totalPages]);

    return (
        <div className="pagination-box">
            <button
                onClick={() => handleClick(page - 1)}
                className={page === 0 ? 'hidden' : ''}
            >
                &lt;
            </button>
            <div className='page-no'>
                {[...Array(totalPages).keys()].map(no => (
                    <button
                        key={no}
                        onClick={() => handleClick(no)}
                        className={no === page ? 'active' : ''}
                    >
                        {no + 1}
                    </button>
                ))}
            </div>
            <button
                onClick={() => handleClick(page + 1)}
                className={page + 1 === totalPages ? 'hidden' : ''}
            >
                &gt;
            </button>
        </div>
    );
}

export default Pagination;
