import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
} from '../action-types'

export const emailChanged = payload => (
    {
        type: EMAIL_CHANGED,
        payload,
    }
)

export const passwordChanged = payload => (
    {
        type: PASSWORD_CHANGED,
        payload,
    }
)

export const loginUser = ({ email, password }) => {
    const loginUserSuccess = (dispatch, user) => {
        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: user,
        })
        Actions.main()
    }

    const loginUserFail = dispatch =>
        dispatch({
            type: LOGIN_USER_FAIL,
        })

    return async dispatch => {
        dispatch({ type: LOGIN_USER })
        try {
            const user = await firebase.auth().signInWithEmailAndPassword(email, password)
            loginUserSuccess(dispatch, user)
        } catch (loginErr) {
            try {
                const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
                loginUserSuccess(dispatch, user)
            } catch (signUpErr) {
                loginUserFail(dispatch)
            }
        }
    }
}
