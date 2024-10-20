export const storeUserData = (token) => {
    localStorage.setItem('userToken', token);
};

export const getUserData = () => {
    return localStorage.getItem('userToken');
};

export const clearUserData = () => {
    localStorage.removeItem('userToken');
};
