// import { useState } from 'react';
// import { Link, Navigate, useNavigate } from 'react-router-dom';
// import { LoginApi } from '../services/Api'; // Assume this handles API calls
// import { isAuthenticated } from '../services/Auth'; // Check authentication status
// import { storeUserData } from '../services/Storage'; // Store user data
// import './LoginPage.css';

// export default function LoginPage() {
//     const initialStateErrors = {
//         email: { required: false },
//         password: { required: false },
//         custom_error: null,
//     };

//     const [errors, setErrors] = useState(initialStateErrors);
//     const [loading, setLoading] = useState(false);
//     const [inputs, setInputs] = useState({ email: '', password: '' });

//     const navigate = useNavigate();

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         let updatedErrors = { ...initialStateErrors };
//         let hasError = false;

//         // Validate email and password inputs
//         if (inputs.email === '') {
//             updatedErrors.email.required = true;
//             hasError = true;
//         }
//         if (inputs.password === '') {
//             updatedErrors.password.required = true;
//             hasError = true;
//         }

//         if (!hasError) {
//             setLoading(true);
//             // Call the LoginApi to log in the user
//             LoginApi(inputs)
//                 .then((response) => {
//                     storeUserData(response.data.idToken);
//                     navigate('/dashboard');
//                 })
//                 .catch((err) => {
//                     if (err.code === 'ERR_BAD_REQUEST') {
//                         setErrors({ ...errors, custom_error: 'Invalid Credentials' });
//                     }
//                 })
//                 .finally(() => {
//                     setLoading(false);
//                 });
//         }

//         setErrors(updatedErrors);
//     };

//     // Redirect to dashboard if user is authenticated
//     if (isAuthenticated() && window.location.pathname !== '/register') {
//         return <Navigate to="/dashboard" />;
//     }

//     const handleInput = (event) => {
//         const { name, value } = event.target;
//         setInputs({ ...inputs, [name]: value });
//     };

//     return (
//         <section class="login-block">
//   <div class="tilt-box"></div>
//   <div class="container mx-auto max-w-md">
//     <h2 class="text-center text-2xl font-bold mb-6">Login Now</h2>
//     <form onSubmit={handleSubmit} class="login-form">
//       <div class="form-group">
//         <label for="exampleInputEmail1" class="text-gray-500">Email</label>
//         <input
//           type="email"
//           class="input-field"
//           onChange={handleInput}
//           name="email"
//           placeholder="Enter your email"
//         />
//         {errors.email.required && <span class="text-red-500">Email is required.</span>}
//       </div>
//       <div class="form-group">
//         <label for="exampleInputPassword1" class="text-gray-500">Password</label>
//         <input
//           type="password"
//           class="input-field"
//           onChange={handleInput}
//           name="password"
//           placeholder="Enter your password"
//         />
//         {errors.password.required && <span class="text-red-500">Password is required.</span>}
//         {errors.custom_error && <span class="text-red-500">{errors.custom_error}</span>}
//       </div>
//       <button type="submit" class="btn btn-primary w-full mt-4" disabled={loading}>
//         Login
//       </button>
//     </form>
//     <div class="text-center mt-3">
//       <p class="text-gray-500">
//         Don't have an account? <Link to="/register">Register</Link>
//       </p>
//     </div>
//   </div>
// </section>
//     );
// }

    
// //     //     <section className="flex items-center justify-center min-h-screen bg-gray-100">
// //     //     <div className="bg-white shadow-md rounded-lg p-8 w-96">
// //     //         <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
// //     //         <form onSubmit={handleSubmit} className="space-y-4">
// //     //             {/* Email Input */}
// //     //             <div>
// //     //                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
// //     //                 <input
// //     //                     type="email"
// //     //                     id="email"
// //     //                     name="email"
// //     //                     className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
// //     //                     placeholder="Enter your email"
// //     //                     onChange={handleInput}
// //     //                 />
// //     //                 {errors.email.required && <span className="text-red-500 text-sm">Email is required.</span>}
// //     //             </div>

// //     //             {/* Password Input */}
// //     //             <div>
// //     //                 <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
// //     //                 <input
// //     //                     type="password"
// //     //                     id="password"
// //     //                     name="password"
// //     //                     className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
// //     //                     placeholder="Enter your password"
// //     //                     onChange={handleInput}
// //     //                 />
// //     //                 {errors.password.required && <span className="text-red-500 text-sm">Password is required.</span>}
// //     //             </div>

// //     //             {/* Loading Spinner */}
// //     //             {loading && (
// //     //                 <div className="text-center">
// //     //                     <div className="spinner-border text-primary" role="status">
// //     //                         <span className="sr-only">Loading...</span>
// //     //                     </div>
// //     //                 </div>
// //     //             )}

// //     //             {/* Custom Error Message */}
// //     //             {errors.custom_error && <span className="text-red-500 text-sm">{errors.custom_error}</span>}

// //     //             {/* Submit Button */}
// //     //             <button
// //     //                 type="submit"
// //     //                 className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
// //     //                 disabled={loading}
// //     //             >
// //     //                 Login
// //     //             </button>
// //     //         </form>

// //     //         {/* Registration Link */}
// //     //         <div className="mt-4 text-center">
// //     //             <p className="text-sm">Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register</Link></p>
// //     //         </div>
// //     //     </div>
// //     // </section>

// import { useState } from 'react';
// import { Link, Navigate, useNavigate } from 'react-router-dom';
// import { LoginApi } from '../services/Api'; // Assuming you have LoginApi here
// import { isAuthenticated } from '../services/Auth'; // Assuming you have isAuthenticated here
// import { storeUserData } from '../services/Storage'; // Assuming you have storeUserData here
// import './LoginPage.css'; // Assuming your CSS file exists in the correct path

// import Navbar from './Navbar'; // Assuming Navbar is in the same directory
// import Footer from './Footer'; // Assuming Footer is in the same directory

// export default function LoginPage() {
//     const initialStateErrors = {
//         email: { required: false },
//         password: { required: false },
//         custom_error: null,
//     };

//     const [errors, setErrors] = useState(initialStateErrors);
//     const [loading, setLoading] = useState(false);
//     const [inputs, setInputs] = useState({ email: '', password: '' });

//     const navigate = useNavigate();

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         let updatedErrors = { ...initialStateErrors };
//         let hasError = false;

//         // Validate email and password inputs
//         if (inputs.email === '') {
//             updatedErrors.email.required = true;
//             hasError = true;
//         }
//         if (inputs.password === '') {
//             updatedErrors.password.required = true;
//             hasError = true;
//         }

//         if (!hasError) {
//             setLoading(true);
//             // Call the LoginApi to log in the user
//             LoginApi(inputs)
//                 .then((response) => {
//                     storeUserData(response.data.idToken);
//                     navigate('/dashboard');
//                 })
//                 .catch((err) => {
//                     if (err.code === 'ERR_BAD_REQUEST') {
//                         setErrors({ ...errors, custom_error: 'Invalid Credentials' });
//                     }
//                 })
//                 .finally(() => {
//                     setLoading(false);
//                 });
//         }

//         setErrors(updatedErrors);
//     };

//     // Redirect to dashboard if user is authenticated
//     if (isAuthenticated() && window.location.pathname !== '/register') {
//         return <Navigate to="/dashboard" />;
//     }

//     const handleInput = (event) => {
//         const { name, value } = event.target;
//         setInputs({ ...inputs, [name]: value });
//     };

//     return (
//         <>
//             {/* Navbar */}
//             <Navbar />

//             <section className="login-block min-h-screen flex items-center justify-center bg-gray-200 pt-20">
//                 <div className="container mx-auto max-w-md bg-white shadow-lg rounded-lg p-8">
//                     <h2 className="text-center text-2xl font-bold mb-6">Login Now</h2>
//                     <form onSubmit={handleSubmit} className="login-form space-y-6">
//                         <div className="form-group">
//                             <label htmlFor="email" className="block text-sm text-gray-500">Email</label>
//                             <input
//                                 type="email"
//                                 className="input-field w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                 onChange={handleInput}
//                                 name="email"
//                                 id="email"
//                                 placeholder="Enter your email"
//                             />
//                             {errors.email.required && <span className="text-red-500 text-sm">Email is required.</span>}
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="password" className="block text-sm text-gray-500">Password</label>
//                             <input
//                                 type="password"
//                                 className="input-field w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                 onChange={handleInput}
//                                 name="password"
//                                 id="password"
//                                 placeholder="Enter your password"
//                             />
//                             {errors.password.required && <span className="text-red-500 text-sm">Password is required.</span>}
//                             {errors.custom_error && <span className="text-red-500 text-sm">{errors.custom_error}</span>}
//                         </div>
//                         <button
//                             type="submit"
//                             className="btn btn-primary w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
//                             disabled={loading}
//                         >
//                             {loading ? 'Logging in...' : 'Login'}
//                         </button>
//                     </form>
//                     <div className="text-center mt-4">
//                         <p className="text-gray-500">
//                             Don't have an account? <Link to="/register" className="text-blue-500">Register</Link>
//                         </p>
//                     </div>
//                 </div>
//             </section>

//             {/* Footer */}
//             <Footer />
//         </>
//     );
// }



// import { useState } from 'react';
// import { Link, Navigate, useNavigate } from 'react-router-dom';
// import { LoginApi } from '../services/Api'; // Assume this handles API calls
// import { isAuthenticated } from '../services/Auth'; // Check authentication status
// import { storeUserData } from '../services/Storage'; // Store user data
// import './LoginPage.css';

// export default function LoginPage() {
//     const initialStateErrors = {
//         email: { required: false },
//         password: { required: false },
//         custom_error: null,
//     };

//     const [errors, setErrors] = useState(initialStateErrors);
//     const [loading, setLoading] = useState(false);
//     const [inputs, setInputs] = useState({ email: '', password: '' });

//     const navigate = useNavigate();

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         let updatedErrors = { ...initialStateErrors };
//         let hasError = false;

//         // Validate email and password inputs
//         if (inputs.email === '') {
//             updatedErrors.email.required = true;
//             hasError = true;
//         }
//         if (inputs.password === '') {
//             updatedErrors.password.required = true;
//             hasError = true;
//         }

//         if (!hasError) {
//             setLoading(true);
//             // Call the LoginApi to log in the user
//             LoginApi(inputs)
//                 .then((response) => {
//                     storeUserData(response.data.idToken); // Ensure `response.data.idToken` exists
//                     navigate('/dashboard');
//                 })
//                 .catch((err) => {
//                     setErrors({ ...errors, custom_error: 'Invalid Credentials' });
//                 })
//                 .finally(() => {
//                     setLoading(false);
//                 });
//         }

//         setErrors(updatedErrors);
//     };

//     // Redirect to dashboard if user is authenticated
//     if (isAuthenticated()) {
//         return <Navigate to="/dashboard" />;
//     }

//     const handleInput = (event) => {
//         const { name, value } = event.target;
//         setInputs({ ...inputs, [name]: value });
//     };

//     return (
//         <section className="login-block">
//             <div className="container mx-auto max-w-md">
//                 <h2 className="text-center text-2xl font-bold mb-6">Login Now</h2>
//                 <form onSubmit={handleSubmit} className="login-form">
//                     <div className="form-group">
//                         <label htmlFor="email" className="text-gray-500">Email</label>
//                         <input
//                             type="email"
//                             className="input-field"
//                             onChange={handleInput}
//                             name="email"
//                             placeholder="Enter your email"
//                             value={inputs.email}
//                         />
//                         {errors.email.required && <span className="text-red-500">Email is required.</span>}
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="password" className="text-gray-500">Password</label>
//                         <input
//                             type="password"
//                             className="input-field"
//                             onChange={handleInput}
//                             name="password"
//                             placeholder="Enter your password"
//                             value={inputs.password}
//                         />
//                         {errors.password.required && <span className="text-red-500">Password is required.</span>}
//                         {errors.custom_error && <span className="text-red-500">{errors.custom_error}</span>}
//                     </div>
//                     <button type="submit" className="btn btn-primary w-full mt-4" disabled={loading}>
//                         {loading ? 'Logging in...' : 'Login'}
//                     </button>
//                 </form>
//                 <div className="text-center mt-3">
//                     <p className="text-gray-500">
//                         Don't have an account? <Link to="/register">Register</Link>
//                     </p>
//                 </div>
//             </div>
//         </section>
//     );
// }
//////////////oyhsaaaaa


import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { LoginApi } from '../services/Api';
import { isAuthenticated } from '../services/Auth';
import { storeUserData } from '../services/Storage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './LoginPage.css';

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
        <section className="login-block min-h-screen flex items-center justify-center bg-gray-50">
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
