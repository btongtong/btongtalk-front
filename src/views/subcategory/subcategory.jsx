import './subcategory.css'
import HeaderL from "../../layout/base/base";
import Heading from "../../components/heading/heading";
import Category from "../../components/category/category";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import URLS from "../../constant/url";
import useSubCategoryStore from "../../stores/useSubCategoryStore";
import NoCategory from "../../components/noCategory/noCategory";

const Subcategory = (props) => {
    const navigate = useNavigate();
    const params = useParams();
    const {countTitle, titleData, subCategories, getSubCategories} = useSubCategoryStore();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const setData = async () => {
            setIsLoading(true);
            await getSubCategories(params.categoryId);
            setIsLoading(false);
        }

        setData();
    }, [getSubCategories, params.categoryId]);

    if(isLoading) {
        return(
            <></>
        )
    }

    if (subCategories.length === 0) {
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
                <section className='subcategory-list'>
                    {subCategories.map((subCategory) => (
                        <Category
                            key={subCategory.id}
                            category={subCategory}
                            countTitle={countTitle}
                            onClickHandler={() => navigate(URLS.FLASHCARDS(subCategory.id))}
                        />
                    ))}
                </section>
            </div>
        </HeaderL>
    )
}

export default Subcategory;