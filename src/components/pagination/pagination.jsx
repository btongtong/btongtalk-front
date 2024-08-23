import './pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handleClick = (newPage) => {
        onPageChange(newPage);
    };

    return (
        <div className="pagination">
            <button
                onClick={() => handleClick(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            {[...Array(totalPages).keys()].map(page => (
                <button
                    key={page + 1}
                    onClick={() => handleClick(page + 1)}
                    className={page + 1 === currentPage ? 'active' : ''}
                >
                    {page + 1}
                </button>
            ))}
            <button
                onClick={() => handleClick(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;
