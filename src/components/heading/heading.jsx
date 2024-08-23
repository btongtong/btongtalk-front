import './heading.css';

const Heading = (props) => {
    const {title, subtitle} = props.data;
    return (
        <div className='heading-box'>
            <h1 className='heading'>{title}</h1>
            <h2 className='description'>{subtitle}</h2>
        </div>
    )
}

export default Heading;