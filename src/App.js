import React, { Component } from 'react'
import { Provider } from 'react-redux'
import firebase from 'firebase'
import store from './store'
import config from './config.json'
import Router from './Router'

class App extends Component {
    componentWillMount() {
        firebase.initializeApp(config.firebase)
    }

    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}

export default App
