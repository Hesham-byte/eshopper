import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const LoginModal = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(import.meta.env.VITE_API_URL + '/login', {
                email: form.email,
                password: form.password
            });

            localStorage.setItem('token', res.data.access_token);
            setSuccess('Login successful!');
            setForm({
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
            setTimeout(() => {
                window.$('#loginModal').modal('hide');
                navigate('/');
            }, 1500);
            setError('');
            setSuccess('');
        } catch (err) {
            setError( 'Login failed.');
            setSuccess('');
        }
    };

    return (
        <>
            <div
                className="modal fade"
                id="loginModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="loginModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="loginModalLabel">Login</h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {error && <div className="alert alert-danger">{error}</div>}
                            {success && <div className="alert alert-success">{success}</div>}
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        placeholder="Enter email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        placeholder="Password"
                                        value={form.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-block btn-primary">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginModal;