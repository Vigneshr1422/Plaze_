import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { LoginApi } from '../services/Api';
import { isAuthenticated } from '../services/Auth';
import { storeUserData } from '../services/Storage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginPage() {
    const initialStateErrors = {
        email: { required: false },
        password: { required: false },
        custom_error: null,
    };

    const [errors, setErrors] = useState(initialStateErrors);
    const [loading, setLoading] = useState(false);
    const [inputs, setInputs] = useState({ email: '', password: '' });

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        let updatedErrors = { ...initialStateErrors };
        let hasError = false;

        // Validate email and password inputs
        if (inputs.email === '') {
            updatedErrors.email.required = true;
            hasError = true;
        }
        if (inputs.password === '') {
            updatedErrors.password.required = true;
            hasError = true;
        }

        if (!hasError) {
            setLoading(true);
            // Call the LoginApi to log in the user
            LoginApi(inputs)
                .then((response) => {
                    storeUserData(response.data.idToken);
                    toast.success("Login successful! Redirecting...");
                    setTimeout(() => navigate('/dashboard'), 2000); // Redirect after a short delay
                })
                .catch((err) => {
                    setErrors({ ...errors, custom_error: 'Invalid Credentials' });
                    toast.error("Login failed. Please check your credentials.");
                })
                .finally(() => {
                    setLoading(false);
                });
        }

        setErrors(updatedErrors);
    };

    // Redirect to dashboard if user is authenticated
    if (isAuthenticated()) {
        return <Navigate to="/dashboard" />;
    }

    const handleInput = (event) => {
        const { name, value } = event.target;
        setInputs({ ...inputs, [name]: value });
    };

    return (
        <section className="login-block min-h-screen flex items-center justify-center bg-[#DEEAFE]">
            <div className="container mx-auto max-w-md bg-white shadow-md rounded-lg p-8">
                <h2 className="text-center text-2xl font-bold mb-6 text-gray-800">Login Now</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            className="input-field border border-gray-300 rounded-lg p-2 w-full"
                            onChange={handleInput}
                            name="email"
                            placeholder="Enter your email"
                            value={inputs.email}
                        />
                        {errors.email.required && <span className="text-red-500">Email is required.</span>}
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            className="input-field border border-gray-300 rounded-lg p-2 w-full"
                            onChange={handleInput}
                            name="password"
                            placeholder="Enter your password"
                            value={inputs.password}
                        />
                        {errors.password.required && <span className="text-red-500">Password is required.</span>}
                        {errors.custom_error && <span className="text-red-500">{errors.custom_error}</span>}
                    </div>
                    <button
                        type="submit"
                        className={`btn btn-primary w-full mt-4 py-2 rounded-lg flex items-center justify-center ${
                            loading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
                        } text-white`}
                        disabled={loading}
                    >
                        {loading ? (
                            <div className="flex items-center space-x-2">
                                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v8H4z"
                                    ></path>
                                </svg>
                                <span>Logging in...</span>
                            </div>
                        ) : (
                            'Login'
                        )}
                    </button>
                </form>
                <div className="text-center mt-3">
                    <p className="text-gray-500">
                        Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
                    </p>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
        </section>
    );
}
