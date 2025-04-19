import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const Footer = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [settings, setSettings] = useState([]);

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_API_URL + '/settings');
                setSettings(response.data);
            } catch (error) {
                console.error("Error fetching settings:", error);
            }
        };

        fetchSettings();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email) {
            setMessage('Please fill out both fields.');
            return;
        }

        setLoading(true);
        setMessage('');

        try {
            // Replace this with your backend API route
            const response = await axios.post(import.meta.env.VITE_API_URL + '/subscribe', {
                name,
                email,
            });

            if (response.data.message) {
                setMessage('Subscribed successfully!');
                setName('');
                setEmail('');
            } else {
                setMessage('Failed to subscribe. Try again.');
            }
        } catch (error) {
            console.error(error);
            setMessage('An error occurred. Please try again.');
        }

        setLoading(false);
    };

    const getSettingValue = (key) => {
        const setting = settings.find(item => item.key === key);
        return setting ? setting.value : null;
    };

    return (
        <>
            <div className="container-fluid bg-secondary text-dark mt-5 pt-5">
                <div className="row px-xl-5 pt-5">
                    <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                        <a href="" className="text-decoration-none">
                            <h1 className="mb-4 display-5 font-weight-semi-bold"><span
                                className="text-primary font-weight-bold border border-white px-3 mr-1">{getSettingValue("site_name")}</span>
                            </h1>
                        </a>
                        <p>{getSettingValue("site_description")}</p>
                        <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>{getSettingValue("address")}</p>
                        <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>{getSettingValue("email")}</p>
                        <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3"></i>{getSettingValue("phone")}</p>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <div className="row">
                            <div className="col-md-4 mb-5">
                                <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
                                <div className="d-flex flex-column justify-content-start">
                                    <Link className="text-dark mb-2" to="/"><i
                                        className="fa fa-angle-right mr-2"></i>Home</Link>
                                    <Link className="text-dark mb-2" to="/shop"><i
                                        className="fa fa-angle-right mr-2"></i>Our Shop</Link>
                                    <Link className="text-dark" to="/contact"><i
                                        className="fa fa-angle-right mr-2"></i>Contact Us</Link>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <h5 className="font-weight-bold text-dark mb-4">Newsletter</h5>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control border-0 py-4"
                                            placeholder="Your Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-control border-0 py-4"
                                            placeholder="Your Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <button
                                            className="btn btn-primary btn-block border-0 py-3"
                                            type="submit"
                                            disabled={loading}
                                        >
                                            {loading ? 'Subscribing...' : 'Subscribe Now'}
                                        </button>
                                    </div>
                                    {message && (
                                        <div className="mt-3 text-center text-black-50">
                                            {message}
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row border-top border-light mx-xl-5 py-4">
                    <div className="col-md-6 px-xl-0">
                        <p className="mb-md-0 text-center text-md-left text-dark">
                            &copy; <Link className="text-dark font-weight-semi-bold" to="/">{getSettingValue('site_name')}</Link>. All
                            Rights Reserved. Designed
                            by
                            <a className="text-dark font-weight-semi-bold" href="https://htmlcodex.com"> HTML
                                Codex</a><br/>
                            Distributed By <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
                        </p>
                    </div>
                    <div className="col-md-6 px-xl-0 text-center text-md-right">
                        <img className="img-fluid" src="img/payments.png" alt=""/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;