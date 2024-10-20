import { getUserData } from './Storage';

export const isAuthenticated = () => {
    return getUserData() !== null; // Returns true if user is authenticated
};
