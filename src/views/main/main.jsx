import './main.css';
import HeaderL from "../../layout/header/header";
import Heading from "../../components/heading/heading";
import Category from "../../components/category/category";

const Main = (props) => {
    const data = {
        title: '인터뷰 준비',
        subtitle: '다양한 주제의 CS 질문에 대답하며 공부해보세요!'
    }

    return(
        <HeaderL>
            <div className='main-container'>
                <Heading data={data}/>
                <section className='category-list'>
                    <Category/>
                </section>
            </div>
        </HeaderL>
    )
}
export default Main;