import { configureStore } from '@reduxjs/toolkit';
import { usreReducer } from './reducers/userReducer';

const store = configureStore({
    reducer: {
        user: usreReducer,
    }
})

export default store

export const server = "http://localhost:4000/api/user"
