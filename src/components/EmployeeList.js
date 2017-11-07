import _ from 'lodash'
import React, { Component } from 'react'
import { ListView } from 'react-native'
import { connect } from 'react-redux'
import { employeesFetch } from '../actions'
import EmployeeListItem from './EmployeeListItem'

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch()
        this.createDataSource(this.props)
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps)
    }

    createDataSource = ({ employees }) => {
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        })
        this.dataSource = dataSource.cloneWithRows(employees)
    }

    renderRow = employee =>
        <EmployeeListItem employee={employee} />

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        )
    }
}

const mapStateToProps = ({ employees }) => (
    {
        employees: _.map(employees, (val, uid) => ({ ...val, uid })),
    }
)

const actions = {
    employeesFetch,
}

export default connect(mapStateToProps, actions)(EmployeeList)
