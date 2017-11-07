import {
    EMPLOYEES_FETCH_SUCCESS,
} from '../action-types'

const initialState = {

}

export default (state = initialState, action) => {
    switch (action.type) {
        case EMPLOYEES_FETCH_SUCCESS:
            return action.payload
        default:
            return state
    }
}
