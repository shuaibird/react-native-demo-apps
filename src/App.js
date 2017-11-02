import React from 'react'
import { View } from 'react-native'
import Header from './components/Header'
import AlbumList from './components/AlbumList'

const App = () =>
    <View style={{ flex: 1 }}>
        <Header text='Album' />
        <AlbumList />
    </View>

export default App
