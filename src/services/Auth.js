import { getUserData } from './Storage';  // Import getUserData from Storage

// This function checks if the user is authenticated
export const isAuthenticated = () => {
  return getUserData() !== null; // Returns true if user data is available
};

// Custom hook to get the logged-in user's data
export const useAuth = () => {
  const user = getUserData(); // Retrieves user data from storage
  return user;
};
