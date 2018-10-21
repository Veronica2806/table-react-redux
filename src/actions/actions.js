import axios from 'axios';
import {GET_USERS_PENDING, GET_USERS_REJECTED, GET_USERS_SUCCESS} from "../ACTION_TYPES/ACTION_TYPES";

export function updateValue(value) {
    return {
        type: 'UPDATE_VALUE',
        payload: value
    }
}

const GET_USERS_ENDPOINT = 'https://jsonplaceholder.typicode.com/todos';

export const getUsers = () =>
    (dispatch) => {
        dispatch({
            type:
            GET_USERS_PENDING
        });
        axios.get(GET_USERS_ENDPOINT)
            .then((response) => {dispatch({
                type: GET_USERS_SUCCESS,
                payload: response.data
            });
            })
            .catch((error) => {dispatch({
                type: GET_USERS_REJECTED,
                payload: error
            });
            });
    }



export default {
    updateValue,
    getUsers
}