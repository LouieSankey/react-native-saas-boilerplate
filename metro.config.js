const path = require('path')

module.exports = {
  resolver: {
    extraNodeModules: {
      'react-native-alias': path.resolve(__dirname, 'node_modules/react-native')
    }
  }
}
