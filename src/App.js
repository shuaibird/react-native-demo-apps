import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import { Header } from './components/common'
import LibraryList from './components/LibraryList'

const store = createStore(
    reducers,
    // eslint-disable-next-line
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const App = () => {
    return (
        <Provider store={store}>
            <View style={{ flex: 1 }}>
                <Header text='Tech Stack' />
                <LibraryList />
            </View>
        </Provider>
    )
}

export default App
