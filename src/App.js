import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import { firebaseConfig } from './config'
import { Button, Header, Spinner } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
    state = {
        loggedIn: null,
    }

    componentWillMount() {
        firebase.initializeApp(firebaseConfig)
        firebase.auth().onAuthStateChanged(user =>
            this.setState({ loggedIn: Boolean(user) })
        )
    }

    renderContent = () => {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                )
            case false:
                return <LoginForm />
            default:
                return <Spinner />

        }
    }

    render() {
        return (
            <View>
                <Header text='Auth' />
                {this.renderContent()}
            </View>
        )
    }
}

export default App
