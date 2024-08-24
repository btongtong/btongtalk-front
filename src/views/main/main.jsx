import './main.css';
import HeaderL from "../../layout/header/header";
import Heading from "../../components/heading/heading";
import Category from "../../components/category/category";
import useMemberStore from "../../stores/useMemberStore";
import {useEffect} from "react";

const Main = (props) => {
    const data = {
        title: '인터뷰 준비',
        subtitle: '다양한 주제의 CS 질문에 대답하며 공부해보세요!'
    }

    const { getProfile } = useMemberStore();

    useEffect(() => {
        getProfile();
    }, [getProfile]);

    return(
        <HeaderL>
            <div className='container'>
                <Heading data={data}/>
                <section className='category-list'>
                    <Category/>
                </section>
            </div>
        </HeaderL>
    )
}
export default Main;