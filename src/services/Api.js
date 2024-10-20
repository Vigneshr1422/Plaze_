
import axios from "axios";
import { getUserData } from "./Storage"; // Make sure this path is correct

// Set up the base URL for Firebase Identity Toolkit
axios.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1";

// Replace with your actual API key
const API_KEY = "AIzaSyClz3L9sVdzrkEQW9ZT5ibqOtW09Ydmbaw"; 

// Define URLs for registration, login, and user details
const REGISTER_URL = `/accounts:signUp?key=${API_KEY}`;
const LOGIN_URL = `/accounts:signInWithPassword?key=${API_KEY}`;
const USER_DETAILS_URL = `/accounts:lookup?key=${API_KEY}`;

// Function to register a new user
export const RegisterApi = (inputs) => {
    const data = {
        displayName: inputs.name,
        email: inputs.email,
        password: inputs.password,
        returnSecureToken: true, // Required by Firebase to return a token
    };

    return axios.post(REGISTER_URL, data)
        .then(response => {
            console.log("User registered successfully:", response.data);
            return response;
        })
        .catch(error => {
            console.error("Error registering user:", error.response ? error.response.data : error.message);
            throw error; // Rethrow the error so it can be handled in the calling function
        });
};

// Function to get user details based on the token
export const UserDetailsApi = () => {
    const data = { idToken: getUserData() };

    return axios.post(USER_DETAILS_URL, data)
        .then(response => {
            return response;
        })
        .catch(error => {
            console.error("Error fetching user details:", error.response ? error.response.data : error.message);
            throw error;
        });
};

// Function to log in an existing user
export const LoginApi = (inputs) => {
    const data = {
        email: inputs.email,
        password: inputs.password,
        returnSecureToken: true, // Required by Firebase to return a token
    };

    return axios.post(LOGIN_URL, data)
        .then(response => {
            console.log("User logged in successfully:", response.data);
            return response;
        })
        .catch(error => {
            console.error("Error logging in user:", error.response ? error.response.data : error.message);
            throw error;
        });
};
