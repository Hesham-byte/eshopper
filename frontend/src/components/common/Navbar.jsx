import React, {useEffect, useState} from 'react';
import axios from "axios";


const Navbar = () => {

    const [sliders, setSliders] = useState([]);

    useEffect(() => {
        const fetchSliders = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_API_URL + '/sliders');
                setSliders(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching sliders:", error);
            }
        };

        fetchSliders();
    }, []);

    return (
        <>
            <div className="container-fluid mb-5">
                <div className="row border-top px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
                           data-toggle="collapse" href="#navbar-vertical"
                           style={{"height":"65px","marginTop":"-1px","padding":"0 30px"}}>
                            <h6 className="m-0">Categories</h6>
                            <i className="fa fa-angle-down text-dark"></i>
                        </a>
                        <nav
                            className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0"
                            id="navbar-vertical">
                            <div className="navbar-nav w-100 overflow-hidden" style={{height: "410px"}}>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link" data-toggle="dropdown">Dresses <i
                                        className="fa fa-angle-down float-right mt-1"></i></a>
                                    <div
                                        className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                        <a href="" className="dropdown-item">Men's Dresses</a>
                                        <a href="" className="dropdown-item">Women's Dresses</a>
                                        <a href="" className="dropdown-item">Baby's Dresses</a>
                                    </div>
                                </div>
                                <a href="" className="nav-item nav-link">Shirts</a>
                                <a href="" className="nav-item nav-link">Jeans</a>
                                <a href="" className="nav-item nav-link">Swimwear</a>
                                <a href="" className="nav-item nav-link">Sleepwear</a>
                                <a href="" className="nav-item nav-link">Sportswear</a>
                                <a href="" className="nav-item nav-link">Jumpsuits</a>
                                <a href="" className="nav-item nav-link">Blazers</a>
                                <a href="" className="nav-item nav-link">Jackets</a>
                                <a href="" className="nav-item nav-link">Shoes</a>
                            </div>
                        </nav>
                    </div>
                    <div className="col-lg-9">
                        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                            <a href="" className="text-decoration-none d-block d-lg-none">
                                <h1 className="m-0 display-5 font-weight-semi-bold"><span
                                    className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                            </a>
                            <button type="button" className="navbar-toggler" data-toggle="collapse"
                                    data-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav mr-auto py-0">
                                    <a href="../../../index.html" className="nav-item nav-link active">Home</a>
                                    <a href="shop.html" className="nav-item nav-link">Shop</a>
                                    <a href="detail.html" className="nav-item nav-link">Shop Detail</a>
                                    <div className="nav-item dropdown">
                                        <a href="#" className="nav-link dropdown-toggle"
                                           data-toggle="dropdown">Pages</a>
                                        <div className="dropdown-menu rounded-0 m-0">
                                            <a href="cart.html" className="dropdown-item">Shopping Cart</a>
                                            <a href="checkout.html" className="dropdown-item">Checkout</a>
                                        </div>
                                    </div>
                                    <a href="contact.html" className="nav-item nav-link">Contact</a>
                                </div>
                                <div className="navbar-nav ml-auto py-0">
                                    <a href="" className="nav-item nav-link">Login</a>
                                    <a href="" className="nav-item nav-link">Register</a>
                                </div>
                            </div>
                        </nav>
                        <div id="header-carousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                {sliders.length === 0 ? (
                                    <div>Loading sliders...</div>
                                ) : (
                                    sliders.map((slider, index) => (
                                        <div
                                            className={index === 0 ? "carousel-item active" : "carousel-item"}
                                            style={{ height: "410px" }}
                                            key={slider.id}
                                        >
                                            <img className="img-fluid" src={slider.image} alt="Slider" />
                                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                                <div className="p-3" style={{maxWidth: "700px"}}>
                                                    <h4 className="text-light text-uppercase font-weight-medium mb-3">{slider.subtitle}</h4>
                                                    <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                                                        {slider.title}</h3>
                                                    <a className="btn btn-light py-2 px-3" href={slider.link}>Shop Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                            <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                            <div className="btn btn-dark" style={{"width" : "45px", "height" : "45px"}}>
                                    <span className="carousel-control-prev-icon mb-n2"></span>
                                </div>
                            </a>
                            <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                                <div className="btn btn-dark" style={{"width" : "45px", "height" : "45px"}}>
                                    <span className="carousel-control-next-icon mb-n2"></span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;