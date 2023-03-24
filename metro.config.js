const path = require('path')
const { getDefaultConfig } = require('@expo/metro-config')
const defaultConfig = getDefaultConfig(__dirname)

module.exports = {
  ...defaultConfig,
  resolver: {
    extraNodeModules: {
      'react-native-alias': path.resolve(
        __dirname,
        'node_modules/react-native'
      ),
      'use-session-alias': path.resolve(
        __dirname,
        '/Users/louis/Desktop/Graphql-Boilerplate/mobile/src/session/use-session'
      ),
      'styled-components-alias': path.resolve(
        __dirname,
        'node_modules/styled-components/native'
      )
    }
  }
}
