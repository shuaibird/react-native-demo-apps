import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
} from '../action-types'

const initialState = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false,
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return {
                ...state,
                email: action.payload,
            }
        case PASSWORD_CHANGED:
            return {
                ...state,
                password: action.payload,
            }
        case LOGIN_USER:
            return {
                ...state,
                loading: true,
                error: '',
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                ...initialState,
                user: action.payload,
            }
        case LOGIN_USER_FAIL:
            return {
                ...state,
                password: '',
                error: 'Auth failed',
                loading: false,
            }
        default:
            return state
    }
}

export default auth
