import { createAction, createReducer } from '@reduxjs/toolkit';

const createUserRequest = createAction("createUserRequest");
const createUserSuccess = createAction("createUserSuccess");
const createUserFailure = createAction("createUserFailure");
const getUsersRequest = createAction("getUsersRequest");
const getUsersSuccess = createAction("getUsersSuccess");
const getUsersFailure = createAction("getUsersFailure");
const updateUserRequest = createAction("updateUserRequest");
const updateUserSuccess = createAction("updateUserSuccess");
const updateUserFailure = createAction("updateUserFailure");
const deleteUserRequest = createAction("deleteUserRequest");
const deleteUserSuccess = createAction("deleteUserSuccess");
const deleteUserFailure = createAction("deleteUserFailure");
const changeLikeRequest = createAction("changeLikeRequest");
const changeLikeSuccess = createAction("changeLikeSuccess");
const changeLikeFailure = createAction("changeLikeFailure");

const clearError = createAction('clearError');
const clearMessage = createAction('clearMessage');

export const usreReducer = createReducer({
    error: null,
}, (builder) => {
    builder
        .addCase(createUserRequest, (state, action) => {
            state.createLoading = true;
        })
        .addCase(createUserSuccess, (state, action) => {
            state.createLoading = false;
            state.message = action.payload.message;
            state.user = action.payload.user;
        })
        .addCase(createUserFailure, (state, action) => {
            state.createLoading = false;
            state.error = action.payload;
        })
        .addCase(getUsersRequest, (state, action) => {
            state.loading = true;
        })
        .addCase(getUsersSuccess, (state, action) => {
            state.loading = false;
            state.users = action.payload.users;
        })
        .addCase(getUsersFailure, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(updateUserRequest, (state, action) => {
            state.loading = true;
        })
        .addCase(updateUserSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.user = action.payload.user;
        })
        .addCase(updateUserFailure, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(deleteUserRequest, (state, action) => {
            state.loading = true;
        })
        .addCase(deleteUserSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        })
        .addCase(deleteUserFailure, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(changeLikeRequest, (state, action) => {
            state.loading = true;
        })
        .addCase(changeLikeSuccess, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        })
        .addCase(changeLikeFailure, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(clearError, (state, action) => {
            state.error = null;
        })
        .addCase(clearMessage, (state, action) => {
            state.message = null;
        })
});

