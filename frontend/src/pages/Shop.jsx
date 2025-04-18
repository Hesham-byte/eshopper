import React from 'react';
import Topbar from "../components/common/Topbar.jsx";
import Navbar from "../components/common/Navbar.jsx";
import Footer from "../components/common/Footer.jsx";
import Sidebar from "../components/shop/Sidebar.jsx";
import Products from "../components/shop/Products.jsx";

function Shop() {
    return (
        <>
            <Topbar/>
            <Navbar/>
            <div className="container-fluid pt-5">
                <div className="row px-xl-5">
                    <Sidebar/>
                    <Products/>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Shop;