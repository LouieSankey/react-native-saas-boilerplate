const path = require('path')

module.exports = {
  resolver: {
    extraNodeModules: {
      'react-native-alias': path.resolve(
        __dirname,
        'node_modules/react-native'
      ),
      'styled-components-alias': path.resolve(
        __dirname,
        'node_modules/styled-components/native'
      )
    }
  }
}
