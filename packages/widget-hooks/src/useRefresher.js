import { useEffect, useReducer } from 'react'
import useGlobalState from './useGlobalState'

function useRefresher(namespace) {
  const [eventEmitter] = useGlobalState('eventEmitter')
  const [refresher, forceUpdate] = useReducer(x => x + 1, 0)
  useEffect(() => {
    eventEmitter && eventEmitter.on(`${namespace}:REFRESH`, forceUpdate)
    return () => {
      eventEmitter && eventEmitter.off(`${namespace}:REFRESH`, forceUpdate)
    }
  }, [namespace, eventEmitter])

  return refresher
}

export default useRefresher
