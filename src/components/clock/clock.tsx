import React, { useEffect } from 'react'
import { Box, Button, Container } from 'native-base'
import { Text } from 'react-native'
import useCountdownTimer from './useCountdownTimer'

const CountdownTimer = () => {
  const { time, start, pause, reset, skip, isRunning } = useCountdownTimer({
    initialTime: 40
  })

  return (
    <Container>
      <Text>Countdown Timer: {time}</Text>

      <Box>
        <Button onPress={start} disabled={isRunning}>
          <Text>Start Timer</Text>
        </Button>
        <Button onPress={pause} disabled={!isRunning}>
          <Text>Pause Timer</Text>
        </Button>
        <Button onPress={skip}>
          <Text>Finish Timer</Text>
        </Button>
        <Button onPress={reset}>
          <Text>Reset Timer</Text>
        </Button>
      </Box>
    </Container>
  )
}

export default CountdownTimer
