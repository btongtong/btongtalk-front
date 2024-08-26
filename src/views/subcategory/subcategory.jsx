import './subcategory.css'
import HeaderL from "../../layout/header/header";
import Heading from "../../components/heading/heading";
import Category from "../../components/category/category";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import URLS from "../../constant/url";
import useSubCategoryStore from "../../stores/useSubCategoryStore";

const Subcategory = (props) => {
    const navigate = useNavigate();
    const params = useParams();
    const { countTitle, titleData, subCategories, getSubCategories } = useSubCategoryStore();

    useEffect(() => {
        getSubCategories(params.categoryId);
    }, [getSubCategories, params.categoryId]);



    return (
        <HeaderL>
            <div className='container'>
                <Heading data={titleData}/>
                <section className='subcategory-list'>
                    {subCategories.length !== 0 ? (subCategories.map((subCategory) => (
                            <Category
                                key={subCategory.id}
                                category={subCategory}
                                countTitle={countTitle}
                                onClickHandler={() => navigate(URLS.FLASHCARDS(subCategory.id))}
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

export default Subcategory;