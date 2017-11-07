import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { text } from 'react-native-communications'
import {
    Card,
    CardSection,
    Button,
    Confirm,
} from './common'
import EmployeeForm from './EmployeeForm'
import {
    employeeUpdate,
    employeeSave,
    employeeDelete,
} from '../actions'


class EmployeeEdit extends Component {
    state = {
        showModal: false,
    }

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => this.props.employeeUpdate({ prop, value }))
    }

    onSaveButtonPress = () => {
        // eslint-disable-next-line
        const { name, phone, shift, employee: { uid }, employeeSave } = this.props
        employeeSave({ name, phone, shift, uid })
    }

    onTextButtonPress = () => {
        const { phone, shift } = this.props
        text(phone, `Your upcoming shift is on ${shift}`)
    }

    onFireButtonPress = () =>
        this.setState(prevState => ({ showModal: !prevState.showModal }))

    onFireEmployee = () => {
        // eslint-disable-next-line
        const { employeeDelete, employee: { uid } } = this.props
        employeeDelete({ uid })
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onSaveButtonPress}>
                        Save
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextButtonPress}>
                        Text
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onFireButtonPress}>
                        Fire
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onFireEmployee}
                    onDecline={() => this.setState({ showModal: false })}
                >
                    Are you sure you want to fire {this.props.name}?
                </Confirm>
            </Card>
        )
    }
}

const mapStateToProps = ({ employeeForm: { name, phone, shift } }) => (
    {
        name,
        phone,
        shift,
    }
)

const actions = {
    employeeUpdate,
    employeeSave,
    employeeDelete,
}

export default connect(mapStateToProps, actions)(EmployeeEdit)
