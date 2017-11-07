import { combineReducers } from 'redux'
import auth from './auth'
import employeeForm from './employeeForm'
import employees from './employees'

export default combineReducers({
    auth,
    employeeForm,
    employees,
})
