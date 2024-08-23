import './table.css';
import {useState} from "react";
import Pagination from "../pagination/pagination";

const Table = (props) => {
    // const {headers, data, showPagination} = props;

    const { showPagination } = props;
    const headers = ['id', 'category', 'question', 'datetime'];
    const data = [
        {id: 1, category: 'DB', question: '인덱싱에 대하여 설명하세요.', datetime: '2024-08-20'},
        {id: 2, category: 'NETWORK', question: 'IP의 종류에 대하여 설명하세요.', datetime: '2024-08-21'},
        {id: 3, category: 'NETWORK', question: 'IP의 종류에 대하여 설명하세요.', datetime: '2024-08-21'},
        {id: 4, category: 'NETWORK', question: 'IP의 종류에 대하여 설명하세요.', datetime: '2024-08-21'},
        {id: 5, category: 'NETWORK', question: 'IP의 종류에 대하여 설명하세요.', datetime: '2024-08-21'},
        {id: 6, category: 'NETWORK', question: 'IP의 종류에 대하여 설명하세요.', datetime: '2024-08-21'}
    ]

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
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {headers.map((header, colIndex) => (
                                <td key={colIndex}>{row[header]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            {showPagination && (
                <Pagination/>
            )}
        </div>
    )
}

export default Table;