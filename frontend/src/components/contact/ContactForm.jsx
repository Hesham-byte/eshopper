import React, {useState} from 'react';

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState({
        submitting: false,
        success: null,
        error: null,
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, success: null, error: null });

        try {
            // Send the form data to your backend API
            const res = await fetch(import.meta.env.VITE_API_URL + "/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus({ submitting: false, success: "Message sent successfully!", error: null });
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                const data = await res.json();
                setStatus({ submitting: false, success: null, error: data.error || "Something went wrong" });
            }
        } catch (err) {
            setStatus({ submitting: false, success: null, error: "Failed to send message" });
        }
    };

    return (
        <>
            <div className="container-fluid pt-5">
                <div className="text-center mb-4">
                    <h2 className="section-title px-5"><span className="px-2">Contact For Any Queries</span></h2>
                </div>
                <div className="row px-xl-5">
                    <div className="col-lg-7 mb-5">
                        <div className="contact-form">
                            <div id="success"></div>
                            <form onSubmit={handleSubmit} noValidate>
                                <div className="control-group">
                                    <input className="form-control"
                                           id="name"
                                           placeholder="Your Name"
                                           required
                                           type="text"
                                           value={formData.name}
                                           onChange={handleChange}
                                    />
                                </div>
                                <div className="control-group">
                                    <input className="form-control"
                                           id="email"
                                           placeholder="Your Email"
                                           required
                                           type="email"
                                           value={formData.email}
                                           onChange={handleChange}
                                    />
                                </div>
                                <div className="control-group">
                                    <input className="form-control"
                                           id="subject"
                                           placeholder="Subject"
                                           required
                                           type="text"
                                           value={formData.subject}
                                           onChange={handleChange}
                                    />
                                </div>
                                <div className="control-group">
                                <textarea className="form-control"
                                          id="message"
                                          placeholder="Message"
                                          required
                                          rows="6"
                                          value={formData.message}
                                          onChange={handleChange}
                                ></textarea>
                                </div>
                                <div className="mt-2">
                                    {status.success && <div className="alert alert-success">{status.success}</div>}
                                    {status.error && <div className="alert alert-danger">{status.error}</div>}
                                </div>
                                <div>
                                    <button className="btn btn-primary py-2 px-4" type="submit" disabled={status.submitting}>
                                        {status.submitting ? "Sending..." : "Send Message"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-5 mb-5">
                        <h5 className="font-weight-semi-bold mb-3">Get In Touch</h5>
                        <p>Justo sed diam ut sed amet duo amet lorem amet stet sea ipsum, sed duo amet et. Est elitr
                            dolor elitr erat sit sit. Dolor diam et erat clita ipsum justo sed.</p>
                        <div className="d-flex flex-column mb-3">
                            <h5 className="font-weight-semi-bold mb-3">Store 1</h5>
                            <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>123 Street,
                                New York, USA</p>
                            <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>info@example.com</p>
                            <p className="mb-2"><i className="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890</p>
                        </div>
                        <div className="d-flex flex-column">
                            <h5 className="font-weight-semi-bold mb-3">Store 2</h5>
                            <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>123 Street,
                                New York, USA</p>
                            <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>info@example.com</p>
                            <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactForm;