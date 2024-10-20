

import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom'; // Import useNavigate
import { LoginApi } from '../services/Api'; // Import LoginApi
import { isAuthenticated } from '../services/Auth'; // Import isAuthenticated function
import { storeUserData } from '../services/Storage'; // Import storeUserData function
import './LoginPage.css'; // Import CSS for LoginPage

export default function LoginPage() {
    const initialStateErrors = {
        email: { required: false },
        password: { required: false },
        custom_error: null,
    };

    const [errors, setErrors] = useState(initialStateErrors);
    const [loading, setLoading] = useState(false);
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate(); // Use useNavigate for redirection

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent form submission default behavior

        // Initialize errors and check if there are any input errors
        let updatedErrors = { ...initialStateErrors };
        let hasError = false;

        if (inputs.email === '') {
            updatedErrors.email.required = true;
            hasError = true;
        }
        if (inputs.password === '') {
            updatedErrors.password.required = true;
            hasError = true;
        }

        if (!hasError) {
            setLoading(true); // Set loading state to true

            // Call the login API
            LoginApi(inputs)
                .then((response) => {
                    storeUserData(response.data.idToken); // Store token in local storage
                    navigate('/dashboard'); // Redirect to dashboard after successful login
                })
                .catch((err) => {
                    // Handle error from API (like invalid credentials)
                    if (err.code === 'ERR_BAD_REQUEST') {
                        setErrors({ ...errors, custom_error: 'Invalid Credentials' });
                    }
                })
                .finally(() => {
                    setLoading(false); // Set loading state back to false
                });
        }

        // Set updated errors to state
        setErrors(updatedErrors);
    };

    // Redirect to dashboard if user is already authenticated
    if (isAuthenticated() && window.location.pathname !== '/register') {
        return <Navigate to="/dashboard" />;
    }

    // Handle input changes
    const handleInput = (event) => {
        const { name, value } = event.target;
        setInputs({ ...inputs, [name]: value });
    };

    return (
        <section className="login-block">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 login-sec">
                        <h2 className="text-center">Login Now</h2>
                        <form onSubmit={handleSubmit} className="login-form">
                            {/* Email Input */}
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1" className="text-uppercase">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    onChange={handleInput}
                                    name="email"
                                    placeholder="Enter your email"
                                />
                                {errors.email.required ? (
                                    <span className="text-danger">Email is required.</span>
                                ) : null}
                            </div>

                            {/* Password Input */}
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                                <input
                                    className="form-control"
                                    onChange={handleInput}
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                />
                                {errors.password.required ? (
                                    <span className="text-danger">Password is required.</span>
                                ) : null}
                            </div>

                            {/* Loading Spinner */}
                            <div className="form-group text-center">
                                {loading ? (
                                    <div className="text-center">
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                ) : null}
                            </div>

                            {/* Custom Error Message */}
                            <span className="text-danger">
                                {errors.custom_error ? <p>{errors.custom_error}</p> : null}
                            </span>

                            {/* Submit Button */}
                            <input
                                type="submit"
                                className="btn btn-login btn-block"
                                disabled={loading}
                                value="Login"
                            />
                        </form>

                        {/* Registration Link */}
                        <div className="form-group text-center">
                            <p>Create a new account? Please <Link to="/register">Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
