import { useState, useEffect, useRef } from 'react'

type CountdownTimerProps = {
  initialTime: number
}

type CountdownTimerHook = {
  time: number
  start: () => void
  pause: () => void
  reset: () => void
  skip: () => void
  isRunning: boolean
}

const useCountdownTimer = ({
  initialTime
}: CountdownTimerProps): CountdownTimerHook => {
  const [time, setTime] = useState<number>(initialTime)
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const start = (): void => {
    setIsRunning(true)
  }

  const pause = (): void => {
    setIsRunning(false)
  }

  const reset = (): void => {
    setTime(initialTime)
    setIsRunning(false)
  }

  const skip = (): void => {
    setTime(0)
    setIsRunning(false)
  }

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime - 1)
      }, 100)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isRunning])

  return {
    time,
    start,
    pause,
    reset,
    skip,
    isRunning
  }
}

export default useCountdownTimer
