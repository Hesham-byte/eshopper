import React, {useState} from 'react';
import axios from 'axios';

const RegisterModal = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            return setError("Passwords do not match");
        }

        try {
            const res = await axios.post(import.meta.env.VITE_API_URL + '/register', {
                name: form.name,
                email: form.email,
                password: form.password,
                password_confirmation: form.confirmPassword,
            });

            const token = res.data.access_token;

            // Save token to localStorage or state
            localStorage.setItem('token', token);

            setSuccess('Registered successfully!');
            setForm({
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
            setTimeout(() => {
                window.$('#registerModal').modal('hide');
            },1500);
            setError('');
        } catch (err) {
            setError('Registration failed');
        }
    };

    return (
        <>
            <div className="modal fade" id="registerModal" tabIndex="-1" role="dialog" aria-labelledby="registerModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="registerModalLabel">Register</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {error && <div className="alert alert-danger">{error}</div>}
                            {success && <div className="alert alert-success">{success}</div>}
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" className="form-control" id="name" value={form.name} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" className="form-control" id="email" value={form.email} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" value={form.password} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <input type="password" className="form-control" id="confirmPassword" value={form.confirmPassword} onChange={handleChange} />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterModal;