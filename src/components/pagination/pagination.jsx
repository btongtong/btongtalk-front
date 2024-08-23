import './pagination.css';
import {useState} from "react";

const Pagination = (props) => {
    // const { currentPage, totalPages, onPageChange } = props;

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;
    const onPageChange = (newPage) => {
        setCurrentPage(newPage)
    }

    const handleClick = (newPage) => {
        onPageChange(newPage);
    };

    return (
        <div className="pagination-box">
            <button
                onClick={() => handleClick(currentPage - 1)}
                disabled={currentPage === 1}
            >
                &lt;
            </button>
            <div className='page-no'>
                {[...Array(totalPages).keys()].map(page => (
                    <button
                        key={page + 1}
                        onClick={() => handleClick(page + 1)}
                        className={page + 1 === currentPage ? 'active' : ''}
                    >
                        {page + 1}
                    </button>
                ))}
            </div>
            <button
                onClick={() => handleClick(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                &gt;
            </button>
        </div>
    );
}

export default Pagination;
