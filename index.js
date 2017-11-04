import { AppRegistry } from 'react-native'
import App from './src/App'

AppRegistry.registerComponent('rocker', () => App)

GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest
