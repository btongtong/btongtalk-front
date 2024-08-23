import './subcategory.css'
import HeaderL from "../../layout/header/header";
import Heading from "../../components/heading/heading";
import Category from "../../components/category/category";

const Subcategory = (props) => {
    const data = {
        title: '기초',
        subtitle: '다양한 주제의 기초 질문에 대답하며 공부해보세요!'
    }

    return (
        <HeaderL>
            <div className='container'>
                <Heading data={data}/>
                <section className='subcategory-list'>
                    <Category/>
                </section>
            </div>
        </HeaderL>
    )
}

export default Subcategory;