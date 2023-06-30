import { server } from '../store'
import axios from 'axios'

export const createUserRequest = (name, email, phone, website) => async (dispatch) => {
    try {
        dispatch({ type: "createUserRequest" });

        const { data } = await axios.post(`${server}/create`, { name, email, phone, website }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true,
        });
        dispatch({ type: "createUserSuccess", payload: data });
    }
    catch (error) {
        dispatch({ type: "createUserFailure", payload: error.response.data.message  });
    }
}

export const getUsersRequest = () => async (dispatch) => {
    try {
        dispatch({ type: "getUsersRequest" });

        const { data } = await axios.get(`${server}/`, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true,
        });
        dispatch({ type: "getUsersSuccess", payload: data });
    }
    catch (error) {
        dispatch({ type: "getUsersFailure", payload: error.response.data.message  });
    }
}

export const updateUserRequest = (id, name, email, phone, website) => async (dispatch) => {
    try {
        dispatch({ type: "updateUserRequest" });

        const { data } = await axios.put(`${server}/update`, { id, name, email, phone, website }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true,
        });
        dispatch({ type: "updateUserSuccess", payload: data });
    }
    catch (error) {
        dispatch({ type: "updateUserFailure", payload: error.response.data.message  });
    }
}

export const deleteUserRequest = (id) => async (dispatch) => {
    try {
        dispatch({ type: "deleteUserRequest" });
        console.log("id", id);
        const { data } = await axios.put(`${server}/delete`, { id });
        console.log(data);
        dispatch({ type: "deleteUserSuccess", payload: data });
    }
    catch (error) {
        dispatch({ type: "deleteUserFailure", payload: error.response.data.message  });
    }
}

export const changeLikeRequest = (id) => async (dispatch) => {
    try {
        dispatch({ type: "changeLikeRequest" });

        const { data } = await axios.put(`${server}/like`, { id }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true,
        });
        dispatch({ type: "changeLikeSuccess", payload: data });
    }
    catch (error) {
        dispatch({ type: "changeLikeFailure", payload: error.response.data.message  });
    }
}