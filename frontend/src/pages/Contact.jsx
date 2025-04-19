import React from 'react';
import Topbar from "../components/common/Topbar.jsx";
import Navbar from "../components/common/Navbar.jsx";
import Footer from "../components/common/Footer.jsx";
import ContactForm from "../components/contact/ContactForm.jsx";

function Contact() {
    return (
        <>
            <Topbar/>
            <Navbar/>
            <ContactForm/>
            <Footer/>
        </>
    );
}

export default Contact;