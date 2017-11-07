import React, { Component } from 'react'
import { View, Text, Picker } from 'react-native'
import { connect } from 'react-redux'
import { CardSection, Input } from './common'
import {
    employeeFormReset,
} from '../actions'

class EmployeeForm extends Component {
    componentWillUnmount() {
        this.props.employeeFormReset()
    }

    renderPickerItems = () =>
        [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
        ].map(day => <Picker.Item key={day} label={day} value={day} />)

    render() {
        const { name, phone, shift, employeeUpdate } = this.props
        return (
            <View>
                <CardSection>
                    <Input
                        label='Name'
                        placeholder='Tony'
                        value={name}
                        onChangeText={value => employeeUpdate({
                            prop: 'name',
                            value
                        })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label='Phone'
                        placeholder='156-2220-9730'
                        value={phone}
                        onChangeText={value => employeeUpdate({
                            prop: 'phone',
                            value
                        })}
                    />
                </CardSection>

                <CardSection
                    style={{ flexDirection: 'column' }}
                >
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        selectedValue={shift}
                        onValueChange={value => employeeUpdate({
                            prop: 'shift',
                            value,
                        })}
                    >
                        {this.renderPickerItems()}
                    </Picker>
                </CardSection>
            </View>
        )
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20,
    },
}

const actions = {
    employeeFormReset,
}

export default connect(null, actions)(EmployeeForm)
