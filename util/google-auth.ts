import * as Google from 'expo-auth-session/providers/google'

const GoogleAuth = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      '135427563097-i3nhnp8mvrgmoq542291jcnrls7tngqb.apps.googleusercontent.com',
    iosClientId:
      '135427563097-4d705hiurl7aougc45got0tdn8ot560t.apps.googleusercontent.com',
    expoClientId:
      '135427563097-gco1a99g49luj4pk849h9oeei3ubcu1q.apps.googleusercontent.com'
  })

  return {
    request,
    response,
    promptAsync
  }
}

export default GoogleAuth
