import React from 'react'
import { Text, View } from 'react-native'

const Header = ({ text }) => {
    const { viewStyle, textStyle } = styles
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{text}</Text>
        </View>
    )
}

const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        paddingTop: 15,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
    },
    textStyle: {
        fontSize: 20,
    },
}

export default Header
