import {
    GET_USERS_PENDING,
    GET_USERS_REJECTED,
    GET_USERS_SUCCESS,
    GET_USERS_TO_INITIAL
} from '../ACTION_TYPES/ACTION_TYPES';

const initialState = {
    pending: false,
    success: false,
    rejected: false,
    response: null,
    error: null
}

export function getUsersReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS_PENDING: {
            return {
                ...state,
                pending: true
            }
        }
        case GET_USERS_SUCCESS: {
            return {
                ...state,
                success: true,
                pending: false,
                response: action.payload
            }
        }
        case GET_USERS_REJECTED: {
            return {
                ...state,
                pending: false,
                rejected: true,
                error: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export default getUsersReducer;