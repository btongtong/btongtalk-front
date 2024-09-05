import './main.css';
import {useEffect} from "react";
import HeaderL from "../../layout/base/base";
import Heading from "../../components/heading/heading";
import Category from "../../components/category/category";
import useMemberStore from "../../stores/useMemberStore";
import useCategoryStore from "../../stores/useCategoryStore";
import {useNavigate} from "react-router-dom";
import URLS from "../../constant/url";
import NoCategory from "../../components/noCategory/noCategory";

const Main = (props) => {
    const {getProfile} = useMemberStore();
    const {titleData, countTitle, categories, getCategories} = useCategoryStore();
    const navigate = useNavigate();

    useEffect(() => {
        getProfile();
    }, [getProfile]);

    useEffect(() => {
        getCategories();
    }, [getCategories]);

    if (categories.length === 0) {
        return (
            <HeaderL>
                <div className='container'>
                    <Heading data={titleData}/>
                    <NoCategory/>
                </div>
            </HeaderL>
        )
    }

    return (
        <HeaderL>
            <div className='container'>
                <Heading data={titleData}/>
                <section className='category-list'>
                    {categories.map((category) => (
                        <Category
                            key={category.id}
                            category={category}
                            countTitle={countTitle}
                            onClickHandler={() => navigate(URLS.CATEGORY(category.id))}
                        />
                    ))}
                </section>
            </div>
        </HeaderL>
    )
}
export default Main;