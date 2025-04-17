import React, {useEffect, useState} from 'react';
import axios from "axios";

const Featured = () => {

    const [featureds, setFeatureds] = useState([]);

    useEffect(() => {
        const fetchFeatureds = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_API_URL + '/featureds');
                setFeatureds(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching sliders:", error);
            }
        };

        fetchFeatureds();
    }, []);


    return (
        <>
            <div className="container-fluid pt-5">
                <div className="row px-xl-5 pb-3">
                    {featureds.length === 0 ? (
                        <div>Loading featureds...</div>
                    ) : (
                        featureds.map((featured, index) => (
                            <div className="col-lg-3 col-md-6 col-sm-12 pb-1" key={index}>
                                <div className="d-flex align-items-center border mb-4" style={{ padding: '30px' }}>
                                    <h1 className={`fa ${featured.icon.replace('fas', 'fa')} text-primary m-0 mr-2`}></h1>
                                    <h5 className="font-weight-semi-bold m-0">{featured.title}</h5>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default Featured;