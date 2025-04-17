import React from 'react';
import Topbar from "../components/common/Topbar.jsx";
import Navbar from "../components/common/Navbar.jsx";
import Featured from "../components/home/Featured.jsx";
import Categories from "../components/home/Categories.jsx";
import Offer from "../components/home/Offer.jsx";
import Products001 from "../components/home/Products-001.jsx";
import Subscribe from "../components/home/Subscribe.jsx";
import Products002 from "../components/home/Products-002.jsx";
import Vendor from "../components/home/Vendor.jsx";
import Footer from "../components/common/Footer.jsx";
import BackToTop from "../components/common/BackToTop.jsx";

function Home() {
    return (
        <>
            <Topbar/>
            <Navbar/>
            <Featured/>
            <Categories/>
            <Offer/>
            <Products001/>
            <Subscribe/>
            <Products002/>
            <Vendor/>
            <Footer/>
            <BackToTop/>
        </>
    );
}

export default Home;