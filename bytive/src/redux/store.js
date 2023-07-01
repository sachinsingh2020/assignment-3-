import { configureStore } from '@reduxjs/toolkit';
import { usreReducer } from './reducers/userReducer';

const store = configureStore({
    reducer: {
        user: usreReducer,
    }
})

export default store

export const server = "https://assignment-backend-2-alpha.vercel.app/api/user"
