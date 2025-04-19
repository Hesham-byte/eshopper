import React, {useEffect, useState} from 'react';
import axios from "axios";

const Products = ({categoryId}) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        console.log(categoryId)
        const fetchProducts = async () => {
            try {
                let url = import.meta.env.VITE_API_URL + '/products';
                if (categoryId) {
                    url += `?category=${categoryId}`;
                }
                const response = await axios.get(url);
                setProducts(response.data);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };

        fetchProducts();
    }, [categoryId]);

    return (
        <>
            <div className="col-lg-9 col-md-12">
                <div className="row pb-3">
                    <div className="col-12 pb-1">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <form action="">
                                <div className="input-group">
                                    <input className="form-control" placeholder="Search by name" type="text"/>
                                    <div className="input-group-append">
                                        <span className="input-group-text bg-transparent text-primary">
                                            <i className="fa fa-search"></i>
                                        </span>
                                    </div>
                                </div>
                            </form>
                            <div className="dropdown ml-4">
                                <button aria-expanded="false" aria-haspopup="true"
                                        className="btn border dropdown-toggle" data-toggle="dropdown" id="triggerId"
                                        type="button">
                                    Sort by
                                </button>
                                <div aria-labelledby="triggerId" className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" href="#">Latest</a>
                                    <a className="dropdown-item" href="#">Popularity</a>
                                    <a className="dropdown-item" href="#">Best Rating</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row px-xl-5 pb-3">
                        {products.length === 0 ? (
                            <div>Loading products...</div>
                        ) : (
                            products.map((product) => (
                                <div className="col-lg-4 col-md-6 col-sm-12 pb-1" key={product.id}>
                                    <div className="card product-item border-0 mb-4">
                                        <div
                                            className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                            <img className="img-fluid w-100" src={product.image} alt={product.name}/>
                                        </div>
                                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                            <h6 className="text-truncate mb-3">{product.name}</h6>
                                            <div className="d-flex justify-content-center">
                                                <h6>${product.price}</h6>
                                                {product.oldPrice && (
                                                    <h6 className="text-muted ml-2">
                                                        <del>${product.oldPrice}</del>
                                                    </h6>
                                                )}
                                            </div>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between bg-light border">
                                            <a href={`/product/${product.id}`} className="btn btn-sm text-dark p-0">
                                                <i className="fas fa-eye text-primary mr-1"></i>View Detail
                                            </a>
                                            <a href="#" className="btn btn-sm text-dark p-0"
                                               onClick={() => handleAddToCart(product)}>
                                                <i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    <div className="col-12 pb-1">
                        <nav aria-label="Page navigation">
                            <ul className="pagination justify-content-center mb-3">
                                <li className="page-item disabled">
                                    <a aria-label="Previous" className="page-link" href="#">
                                        <span aria-hidden="true">&laquo;</span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                </li>
                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a aria-label="Next" className="page-link" href="#">
                                        <span aria-hidden="true">&raquo;</span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;