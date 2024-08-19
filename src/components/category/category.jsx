import './category.css';
import { FaPlay } from "react-icons/fa";
import {useState} from "react";
const Category = (props) => {

    const [fillColor, setFillColor] = useState('var(--gray-60)');

    const handleMouseOver = () => {
        setFillColor('var(--primary-color)');
    }

    const handleMouseLeave = () => {
        setFillColor('var(--gray-60)');
    }

    return (
        <div className='category-list'>
            <div
                className='category-box'
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}>
                <div className='category-title-box'>
                    <h2 className='category-title'>DATABASE</h2>
                    <p className='description'>데이터베이스에 대해 공부해봅시다.</p>
                </div>
                <div className='question-cnt-box'>
                    <FaPlay fill={fillColor}/>
                    <p className='description'><span className='question-cnt description'>32</span> Questions</p>
                </div>
            </div>
            <div
                className='category-box'
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}>
                <div className='category-title-box'>
                    <h2 className='category-title'>DATABASE</h2>
                    <p className='description'>데이터베이스에 대해 공부해봅시다.</p>
                </div>
                <div className='question-cnt-box'>
                    <FaPlay fill={fillColor}/>
                    <p className='description'><span className='question-cnt description'>32</span> Questions</p>
                </div>
            </div>
            <div
                className='category-box'
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}>
                <div className='category-title-box'>
                    <h2 className='category-title'>DATABASE</h2>
                    <p className='description'>데이터베이스에 대해 공부해봅시다.</p>
                </div>
                <div className='question-cnt-box'>
                    <FaPlay fill={fillColor}/>
                    <p className='description'><span className='question-cnt description'>32</span> Questions</p>
                </div>
            </div>
            <div
                className='category-box'
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}>
                <div className='category-title-box'>
                    <h2 className='category-title'>DATABASE</h2>
                    <p className='description'>데이터베이스에 대해 공부해봅시다.</p>
                </div>
                <div className='question-cnt-box'>
                    <FaPlay fill={fillColor}/>
                    <p className='description'><span className='question-cnt description'>32</span> Questions</p>
                </div>
            </div>
        </div>
    )
}

export default Category;