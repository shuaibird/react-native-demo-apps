import { SELECT_LIBRARY } from '../action-types'

export const selectLibrary = libraryId => (
    {
        type: SELECT_LIBRARY,
        payload: libraryId,
    }
)
