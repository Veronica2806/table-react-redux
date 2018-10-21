import { combineReducers } from 'redux';

// @REDUCERS
import calcReducer from './caclReducer';
import getUsersReducer from './getUsersReducer';
// @ROOT REDUCER
const rootReducer = combineReducers({
    calcReducer,
    getUsersReducer
})

export default rootReducer;