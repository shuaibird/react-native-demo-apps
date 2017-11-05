import React, { Component } from 'react'
import {
    Text,
    TouchableWithoutFeedback,
    View,
    LayoutAnimation,
} from 'react-native'
import { connect } from 'react-redux'
import { CardSection } from './common'
import * as actions from '../actions'

class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring()
    }

    renderDesc = () => {
        const { library: { description }, expanded } = this.props
        if (expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>{description}</Text>
                </CardSection>
            )
        }
    }

    render() {
        const { titleStyle } = styles
        const { library: { id, title }, selectLibrary } = this.props
        return (
            <TouchableWithoutFeedback
                onPress={() => selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDesc()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    }
}

const mapStateToProps = ({ selectedLibraryId }, { library: { id } }) => (
    {
        expanded: selectedLibraryId === id,
    }
)

export default connect(mapStateToProps, actions)(ListItem)
