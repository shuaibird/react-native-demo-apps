import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Card,
    CardSection,
    Button,
} from './common'
import EmployeeForm from './EmployeeForm'
import {
    employeeUpdate,
    employeeCreate,
} from '../actions'


class EmployeeCreate extends Component {
    onButtonPress = () => {
        // eslint-disable-next-line
        const { name, phone, shift, employeeCreate } = this.props
        employeeCreate({ name, phone, shift: shift || 'Monday' })
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress}>
                        Create
                    </Button>
                </CardSection>
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
    employeeCreate,
}

export default connect(mapStateToProps, actions)(EmployeeCreate)
