import React, {useEffect, useState} from 'react';
import axios from "axios";

const Offer = () => {

    const [offers, setOffers] = useState([]);

    useEffect(() => {
        const fetchOffers = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_API_URL + '/offers');
                setOffers(response.data);
            } catch (error) {
                console.error("Error fetching offers:", error);
            }
        };

        fetchOffers();
    }, []);

    return (
        <>
            <div className="container-fluid offer pt-5">
                <div className="row px-xl-5">
                    {offers.length === 0 ? (
                        <div>Loading offers...</div>
                    ) : (
                        offers.map((offer, index) => (
                            <div className="col-md-6 pb-4">
                                <div
                                    className="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
                                    <img src={offer.image} alt=""/>
                                    <div className="position-relative" style={{"zIndex": "1"}}>
                                        <h5 className="text-uppercase text-primary mb-3">{offer.subtitle}</h5>
                                        <h1 className="mb-4 font-weight-semi-bold">{offer.title}</h1>
                                        <a href={offer.link} className="btn btn-outline-primary py-md-2 px-md-3">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default Offer;