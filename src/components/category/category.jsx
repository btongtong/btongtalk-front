import './category.css';
import { FaPlay } from "react-icons/fa";
import useFillColor from "../../hooks/useFillColor";
const Category = (props) => {

    const { fillColor, handleMouseOver, handleMouseLeave } = useFillColor('var(--gray-60)', 'var(--primary-color)');
    const { category, countTitle, onClickHandler } = props;
    const { name, description, count } = category;

    return (
        <div
            className='category-box'
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            onClick={onClickHandler}>
            <div className='category-title-box'>
                <h2 className='title'>{name}</h2>
                <p className='description'>{description}</p>
            </div>
            <div className='question-cnt-box'>
                <p className='description'><span className='question-cnt description'>{count}</span> {countTitle}</p>
                <FaPlay fill={fillColor} size={14}/>
            </div>
        </div>
    )
}

export default Category;