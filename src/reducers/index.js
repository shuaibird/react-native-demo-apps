import { combineReducers } from 'redux'
import libraries from './libraries'
import selectedLibraryId from './selectedLibraryId'

export default combineReducers({
    libraries,
    selectedLibraryId,
})
