import React, {useEffect, useState} from 'react';
import axios from "axios";

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_API_URL + '/categories');
                setCategories(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <>
            <div className="container-fluid pt-5">
                <div className="row px-xl-5 pb-3">
                    {categories.length === 0 ? (
                        <div>Loading categories...</div>
                    ) : (
                        categories.map((category, index) => (
                            <div className="col-lg-4 col-md-6 pb-1">
                                <div className="cat-item d-flex flex-column border mb-4" style={{"padding":"30px"}}>
                                    <p className="text-right"></p>
                                    <a href="" className="cat-img position-relative overflow-hidden mb-3">
                                        <img className="img-fluid" src={category.image} alt=""/>
                                    </a>
                                    <h5 className="font-weight-semi-bold m-0">{category.name}</h5>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default Categories;