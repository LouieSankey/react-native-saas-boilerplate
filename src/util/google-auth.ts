import * as Google from 'expo-auth-session/providers/google'
import { useEffect } from 'react'
import { useActions } from '../session/util-hooks/use-actions'

const GoogleAuth = () => {
  const { UpdateSession } = useActions()

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      '135427563097-i3nhnp8mvrgmoq542291jcnrls7tngqb.apps.googleusercontent.com',
    iosClientId:
      '135427563097-4d705hiurl7aougc45got0tdn8ot560t.apps.googleusercontent.com',
    expoClientId:
      '135427563097-gco1a99g49luj4pk849h9oeei3ubcu1q.apps.googleusercontent.com'
  })

  //you should only ever get to this point if you're not automatically logged in
  useEffect(() => {
    if (response) {
      if (response.type === 'success') {
        UpdateSession(response.authentication!)
      }
    }
  }, [response])

  return {
    request,
    response,
    promptAsync
  }
}

export default GoogleAuth
