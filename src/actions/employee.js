import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_FORM_RESET,
    EMPLOYEES_FETCH_SUCCESS,
} from '../action-types'

export const employeeUpdate = ({ prop, value }) => (
    {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value },
    }
)

export const employeeFormReset = () => (
    {
        type: EMPLOYEE_FORM_RESET,
    }
)

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth()
    return async () => {
        await firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
        Actions.pop()
    }
}

export const employeeSave = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth()
    return async () => {
        await firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({ name, phone, shift })
        Actions.pop()
    }
}

export const employeeDelete = ({ uid }) => {
    const { currentUser } = firebase.auth()
    return async () => {
        await firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .remove()
        Actions.pop()
    }
}

export const employeesFetch = () => {
    const { currentUser } = firebase.auth()
    return dispatch => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => dispatch({
                type: EMPLOYEES_FETCH_SUCCESS,
                payload: snapshot.val(),
            }))
    }
}
