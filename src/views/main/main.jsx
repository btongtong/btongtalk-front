import './main.css';
import {useEffect} from "react";
import HeaderL from "../../layout/header/header";
import Heading from "../../components/heading/heading";
import Category from "../../components/category/category";
import useMemberStore from "../../stores/useMemberStore";
import useCategoryStore from "../../stores/useCategoryStore";
import {useNavigate} from "react-router-dom";
import {GET_SUB_CATEGORIES} from "../../apis/url";
import URLS from "../../constant/url";

const Main = (props) => {
    const { getProfile } = useMemberStore();
    const { titleData, countTitle, categories, getCategories } = useCategoryStore();
    const navigate = useNavigate();

    useEffect(() => {
        getProfile();
    }, [getProfile]);

    useEffect(() => {
        getCategories();
    }, [getCategories]);

    return(
        <HeaderL>
            <div className='container'>
                <Heading data={titleData}/>
                <section className='category-list'>
                    {categories.length !== 0 ? (categories.map((category) => (
                            <Category
                                key={category.id}
                                category={category}
                                countTitle={countTitle}
                                onClickHandler={() => navigate(URLS.CATEGORY(category.id))}
                            />
                        ))) :
                        (<div className='no-category-list'>
                            카테고리가 존재하지 않습니다!
                        </div>)
                    }
                </section>
            </div>
        </HeaderL>
    )
}
export default Main;