
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../services/firebase'; // Assuming firebase is already configured in your app
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import HeaderFooter from './HeaderFooter'; // Importing the HeaderFooter component
import Footer from './Footer'; // Assuming you have a Footer component

export default function RegisterPage() {
    const initialStateErrors = {
        name: { required: false },
        email: { required: false },
        password: { required: false },
        custom_error: null,
    };

    const [errors, setErrors] = useState(initialStateErrors);
    const [loading, setLoading] = useState(false);
    const [inputs, setInputs] = useState({ name: '', email: '', password: '' });

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
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
            updatedErrors.password.custom_error = 'Password must be at least 6 characters.';
            hasError = true;
        }

        if (!hasError) {
            setLoading(true); // Set loading to true before async call
            try {
                const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    inputs.email,
                    inputs.password
                );
                const user = userCredential.user;

                await setDoc(doc(db, 'users', user.uid), {
                    name: inputs.name,
                    email: inputs.email,
                    createdAt: new Date(),
                });

                console.log('Registration successful:', user);
                navigate('/login');
            } catch (err) {
                if (err.response) {
                    console.error('Registration error:', err.response.data);
                    setErrors({ ...errors, custom_error: err.response.data.error.message });
                } else {
                    console.error('Error registering:', err);
                    setErrors({ ...errors, custom_error: err.message });
                }
            } finally {
                setLoading(false); // Ensure loading is set back to false after completion
            }
        }

        setErrors(updatedErrors);
    };

    const handleInput = (event) => {
        const { name, value } = event.target;
        setInputs({ ...inputs, [name]: value });
    };

    return (
        <>
            {/* Header */}
            <HeaderFooter />

            <section className="min-h-screen flex items-center justify-center bg-gray-200 pt-20">
                <div className="container mx-auto max-w-md bg-white shadow-lg rounded-lg p-8">
                    <h2 className="text-center text-2xl font-bold mb-6">Register Now</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="form-group">
                            <label htmlFor="name" className="block text-sm text-gray-500">Name</label>
                            <input
                                type="text"
                                className="input-field w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={handleInput}
                                name="name"
                                id="name"
                                placeholder="Enter your name"
                            />
                            {errors.name.required && <span className="text-red-500 text-sm">Name is required.</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="block text-sm text-gray-500">Email</label>
                            <input
                                type="email"
                                className="input-field w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={handleInput}
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                            />
                            {errors.email.required && <span className="text-red-500 text-sm">Email is required.</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="block text-sm text-gray-500">Password</label>
                            <input
                                type="password"
                                className="input-field w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={handleInput}
                                name="password"
                                id="password"
                                placeholder="Enter your password"
                            />
                            {errors.password.required && <span className="text-red-500 text-sm">Password is required.</span>}
                            {errors.password.custom_error && <span className="text-red-500 text-sm">{errors.password.custom_error}</span>}
                        </div>
                        {errors.custom_error && <span className="text-red-500 text-sm">{errors.custom_error}</span>}
                        <button
                            type="submit"
                            className="btn btn-primary w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                            disabled={loading}
                        >
                            {loading ? (
                                <svg className="animate-spin h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                                </svg>
                            ) : (
                                'Register'
                            )}
                        </button>
                    </form>
                    <div className="text-center mt-4">
                        <p className="text-gray-500">
                            Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </>
    );
}



// import React,{ useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { RegisterApi } from '../services/Api';
// import './RegisterPage.css';

// export default function RegisterPage() {
//     const initialStateErrors = {
//         name: { required: false },
//         email: { required: false },
//         password: { required: false },
//         custom_error: null,
//     };

//     const [errors, setErrors] = useState(initialStateErrors);
//     const [loading, setLoading] = useState(false);
//     const [inputs, setInputs] = useState({ name: '', email: '', password: '' });

//     const navigate = useNavigate();

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         let updatedErrors = { ...initialStateErrors };
//         let hasError = false;

//         if (inputs.name === '') {
//             updatedErrors.name.required = true;
//             hasError = true;
//         }
//         if (inputs.email === '') {
//             updatedErrors.email.required = true;
//             hasError = true;
//         }
//         if (inputs.password === '') {
//             updatedErrors.password.required = true;
//             hasError = true;
//         } else if (inputs.password.length < 6) {
//             updatedErrors.password.custom_error = 'Password must be at least 6 characters.';
//             hasError = true;
//         }

//         if (!hasError) {
//             setLoading(true);
//             RegisterApi(inputs)
//                 .then((response) => {
//                     console.log('Registration successful:', response.data);
//                     navigate('/login');
//                 })
//                 .catch((err) => {
//                     if (err.response) {
//                         console.error('Registration error:', err.response.data);
//                         setErrors({ ...errors, custom_error: err.response.data.error.message });
//                     } else {
//                         console.error('Error registering:', err);
//                     }
//                 })
//                 .finally(() => {
//                     setLoading(false);
//                 });
//         }

//         setErrors(updatedErrors);
//     };

//     const handleInput = (event) => {
//         const { name, value } = event.target;
//         setInputs({ ...inputs, [name]: value });
//     };

//     return (
//         <section className="vh-100 register-block">
//             <div className="row justify-content-center align-items-center h-100">
//                 <div className="col-md-8">
//                     <div className="card shadow-lg p-4">
//                         <h2 className="text-center mb-4">Register Now</h2>
//                         <form onSubmit={handleSubmit} className="register-form">
//                             <div className="mb-4 form-group">
//                                 <label className="form-label text-uppercase">Name</label>
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     name="name"
//                                     placeholder="Enter your name"
//                                     onChange={handleInput}
//                                 />
//                                 {errors.name?.required && <div className="text-danger">Name is required.</div>}
//                             </div>
//                             <div className="mb-4 form-group">
//                                 <label className="form-label text-uppercase">Email</label>
//                                 <input
//                                     type="email"
//                                     className="form-control"
//                                     name="email"
//                                     placeholder="Enter your email"
//                                     onChange={handleInput}
//                                 />
//                                 {errors.email?.required && <div className="text-danger">Email is required.</div>}
//                             </div>
//                             <div className="mb-4 form-group">
//                                 <label className="form-label text-uppercase">Password</label>
//                                 <input
//                                     type="password"
//                                     className="form-control"
//                                     name="password"
//                                     placeholder="Enter your password"
//                                     onChange={handleInput}
//                                 />
//                                 {errors.password?.required && <div className="text-danger">Password is required.</div>}
//                                 {errors.password?.custom_error && <div className="text-danger">{errors.password.custom_error}</div>}
//                             </div>
//                             {errors.custom_error && <div className="text-danger">{errors.custom_error}</div>}
//                             <button type="submit" className="btn btn-register w-100" disabled={loading}>
//                                 Register
//                             </button>
//                         </form>
//                         <div className="text-center mt-3">
//                             <p>
//                                 Already have an account? <Link to="/login">Login</Link>
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }
