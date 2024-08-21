import './category.css';
import { FaPlay } from "react-icons/fa";
import useFillColor from "../../hooks/useFillColor";
const Category = (props) => {

    const { fillColor, handleMouseOver, handleMouseLeave } = useFillColor();

    return (
        <div
            className='category-box'
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}>
            <div className='category-title-box'>
                <h2 className='title'>DATABASE</h2>
                <p className='description'>데이터베이스에 대해 공부해봅시다.</p>
            </div>
            <div className='question-cnt-box'>
                <FaPlay fill={fillColor}/>
                <p className='description'><span className='question-cnt description'>32</span> Questions</p>
            </div>
        </div>
    )
}

export default Category;