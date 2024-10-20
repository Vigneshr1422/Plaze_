
import { RegisterApi } from '../services/Api'; // Make sure this import is correct
import './RegisterPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function RegisterPage() {
    const initialStateErrors = {
        name: { required: false },
        email: { required: false },
        password: { required: false },
        custom_error: null
    };

    const [errors, setErrors] = useState(initialStateErrors);
    const [loading, setLoading] = useState(false);
    const [inputs, setInputs] = useState({ name: '', email: '', password: '' });

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        let updatedErrors = { ...initialStateErrors };
        let hasError = false;

        if (inputs.name === '') {
            updatedErrors.name.required = true;
            hasError = true;
        }
        if (inputs.email === '') {
            updatedErrors.email.required = true;
            hasError = true;
        }
        if (inputs.password === '') {
            updatedErrors.password.required = true;
            hasError = true;
        } else if (inputs.password.length < 6) {
            updatedErrors.password.custom_error = "Password must be at least 6 characters.";
            hasError = true;
        }

        if (!hasError) {
            setLoading(true);
            RegisterApi(inputs)
                .then((response) => {
                    console.log("Registration successful:", response.data);
                    navigate('/login');
                })
                .catch((err) => {
                    if (err.response) {
                        console.error("Registration error:", err.response.data);
                        setErrors({ ...errors, custom_error: err.response.data.error.message });
                    } else {
                        console.error("Error registering:", err);
                    }
                })
                .finally(() => {
                    setLoading(false);
                });
        }

        setErrors(updatedErrors);
    };

    const handleInput = (event) => {
        const { name, value } = event.target;
        setInputs({ ...inputs, [name]: value });
    };

    return (
        <section className="vh-100">
        <div className="container h-100">
            <div className="row justify-content-center align-items-center h-100">
                <div className="col-md-6">
                    <div className="card shadow-lg p-4">
                        <h2 className="text-center mb-4">Register Now</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label text-uppercase">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={handleInput}
                                    name="name"
                                    placeholder="Enter your name"
                                />
                                {errors.name.required && <div className="text-danger">Name is required.</div>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label text-uppercase">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    onChange={handleInput}
                                    name="email"
                                    placeholder="Enter your email"
                                />
                                {errors.email.required && <div className="text-danger">Email is required.</div>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label text-uppercase">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    onChange={handleInput}
                                    name="password"
                                    placeholder="Enter your password"
                                />
                                {errors.password.required && <div className="text-danger">Password is required.</div>}
                                {errors.password.custom_error && <div className="text-danger">{errors.password.custom_error}</div>}
                            </div>
                            {errors.custom_error && <div className="text-danger">{errors.custom_error}</div>}
                            <button
                                type="submit"
                                className="btn btn-primary w-100"
                                disabled={loading}
                            >
                                Register
                            </button>
                        </form>
                        <div className="text-center mt-3">
                            <p>Already have an account? <Link to="/login">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
