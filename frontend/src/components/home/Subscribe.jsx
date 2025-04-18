import React, {useState} from 'react';
import axios from 'axios';

const Subscribe = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubscribe = async (e) => {
        e.preventDefault();

        if (!email) {
            setMessage('Please enter your email.');
            return;
        }

        setLoading(true);
        setMessage('');

        try {
            const response = await axios.post(import.meta.env.VITE_API_URL + '/subscribe', { email });

            if (response.data.message) {
                setMessage('Thank you for subscribing!');
                setEmail('');
            } else {
                setMessage('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error(error);
            setMessage('An error occurred. Please try again later.');
        }

        setLoading(false);
    };

    return (
        <>
            <div className="container-fluid bg-secondary my-5">
                <div className="row justify-content-md-center py-5 px-xl-5">
                    <div className="col-md-6 col-12 py-5">
                        <div className="text-center mb-2 pb-2">
                            <h2 className="section-title px-5 mb-3">
                                <span className="bg-secondary px-2">Stay Updated</span>
                            </h2>
                            <p>
                                Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet diam labore at justo ipsum
                                eirmod duo labore labore.
                            </p>
                        </div>
                        <form onSubmit={handleSubscribe}>
                            <div className="input-group">
                                <input
                                    type="email"
                                    className="form-control border-white p-4"
                                    placeholder="Email Goes Here"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <div className="input-group-append">
                                    <button className="btn btn-primary px-4" type="submit" disabled={loading}>
                                        {loading ? 'Subscribing...' : 'Subscribe'}
                                    </button>
                                </div>
                            </div>
                            {message && (
                                <div className="mt-3 text-black-50 text-center">
                                    {message}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Subscribe;