import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import {
    Button,
    Card,
    CardSection,
    Input,
    Spinner,
} from './common'
import {
    emailChanged,
    passwordChanged,
    loginUser,
} from '../actions'

class LoginForm extends Component {
    onEmailChange = text =>
        this.props.emailChanged(text)

    onPasswordChange = text =>
        this.props.passwordChanged(text)

    onButtonPress = () => {
        // eslint-disable-next-line
        const { email, password, loginUser } = this.props
        loginUser({ email, password })
    }

    renderButton = () => {
        if (this.props.loading) {
            return <Spinner />
        }
        return (
            <Button onPress={this.onButtonPress}>
                Login
            </Button>
        )
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        placeholder='email@gmail.com'
                        onChangeText={this.onEmailChange}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label='Password'
                        placeholder='password'
                        onChangeText={this.onPasswordChange}
                        value={this.props.password}
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
    },
}

const mapStateToProps = ({ auth: { email, password, error, loading } }) => (
    {
        email,
        password,
        error,
        loading,
    }
)

const actions = {
    emailChanged,
    passwordChanged,
    loginUser,
}

export default connect(mapStateToProps, actions)(LoginForm)
