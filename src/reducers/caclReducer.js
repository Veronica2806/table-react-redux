const initialState = {
    value: 0
}

const UPDATE_VALUE = 'UPDATE_VALUE'

function exampleDataReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_VALUE: {
            return {
                ...state,
                value: action.payload
            }
        }
        default: {
            return state;
        }
    }
}
export default exampleDataReducer;