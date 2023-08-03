// frontendService.js

import axios from 'axios';

// Change this to your backend API base URL
const API_BASE_URL = 'http://localhost:3000'; 

const apiService = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
});

// Function to login a user
export const login = async (email, password) => {
    try {
        const response = await apiService.post('/login', { email, password });
        return response.data;
    } catch (error) {
        throw error.response.data.message || 'An error occurred during login';
    }
};

// Function to register a user's email and request verification
export const registerEmail = async (email) => {
    try {
        const response = await apiService.post('/register-email', { email });
        return response.data;
    } catch (error) {
        throw error.response.data.message || 'An error occurred during email registration';
    }
};

// Function to complete user registration with additional details
export const registerUser = async (userData) => {
    try {
        const response = await apiService.post('/register', userData);
        return response.data;
    } catch (error) {
        throw error.response.data.message || 'An error occurred during user registration';
    }
};

// Function to request a new verification email
export const resendVerificationEmail = async (email) => {
    try {
        const response = await apiService.post('/resend-verification-email', { email });
        return response.data;
    } catch (error) {
        throw error.response.data.message || 'An error occurred while resending the verification email';
    }
};

// Function to verify email using the verification token
export const verifyEmail = async (verificationToken) => {
    try {
        const response = await apiService.get(`/verify-email?verificationToken=${verificationToken}`);
        return response.data;
    } catch (error) {
        throw error.response.data.message || 'An error occurred during email verification';
    }
};

// Function to initiate password reset process
export const forgotPassword = async (email) => {
    try {
        const response = await apiService.post('/forgot-password', { email });
        return response.data;
    } catch (error) {
        throw error.response.data.message || 'An error occurred during password reset request';
    }
};

// Function to reset password using the password reset token
export const resetPassword = async (token, password) => {
    try {
        const response = await apiService.post('/reset-password', { token, password });
        return response.data;
    } catch (error) {
        throw error.response.data.message || 'An error occurred during password reset';
    }
};

// Function to fetch areas from the backend
export const getAreas = async () => {
    try {
        const response = await apiService.get('/areas');
        return response.data;
    } catch (error) {
        throw error.response.data.error || 'An error occurred while fetching areas';
    }
};

// Fetch listings based on query parameters
export const getListings = async (query) => {
    try {
        const response = await apiService.get('/listings', { params: query });
        return response.data;
    } catch (error) {
        throw new Error('Error fetching listings');
    }
};

// Fetch a single listing by its ID
export const getListingById = async (id) => {
    try {
        const response = await apiService.get(`/listings/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching listing by ID');
    }
};

// Fetch user profile information by user ID
export const getUserProfile = async (userId) => {
    try {
        const response = await apiService.get(`/user/${userId}/profile`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching user profile');
    }
};

// Update user profile information
export const updateUserProfile = async (userId, userData) => {
    try {
        const response = await apiService.put(`/user/${userId}/profile`, userData);
        return response.data;
    } catch (error) {
        throw new Error('Error updating user profile');
    }
};

// Fetch user's wishlist by user ID
export const getUserWishlist = async (userId) => {
    try {
        const response = await apiService.get(`/user/${userId}/wishlist`);
        return response.data.wishlist;
    } catch (error) {
        throw new Error('Error fetching user wishlist');
    }
};

// Update user's wishlist by adding or removing a property ID
export const updateWishlist = async (propertyId) => {
    try {
        const response = await apiService.post('/wishlist', { propertyId });
        return response.data;
    } catch (error) {
        throw new Error('Error updating wishlist');
    }
};

// Send guest profile information to the backend for processing
export const sendGuestProfile = async () => {
    try {
        const response = await apiService.post('/sendguest');
        return response.data;
    } catch (error) {
        throw new Error('Error sending guest profile');
    }
};

// Fetch user's booking history by user ID
export const getUserBookingHistory = async (userId) => {
    try {
        const response = await apiService.get(`/user/${userId}/bookinghistory`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching user booking history');
    }
};

// Fetch a single booking by its ID and user ID
export const getBookingById = async (userId, bookingId) => {
    try {
        const response = await apiService.get(`/user/${userId}/booking/${bookingId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching booking by ID');
    }
};

// Function to extend a booking
export const extendBooking = async (userId, bookingId, newDepartureDate) => {
    try {
        const response = await apiService.post(`/user/${userId}/booking/${bookingId}/extend`, { newDepartureDate });
        return response.data;
    } catch (error) {
        throw error.response.data.message || 'An error occurred while extending the booking';
    }
};

// Function to subscribe to the newsletter
export const subscribeToNewsletter = async (email) => {
    try {
        const response = await apiService.post('/newsletter', { email });
        return response.data;
    } catch (error) {
        throw error.response.data.message || 'An error occurred while subscribing to the newsletter';
    }
};
