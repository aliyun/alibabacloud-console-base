import { useContext } from 'react'
import { WidgetContext } from '@alicloud/widget-context'
import upperfirst from './utils/upperfirst'

function useGlobalState(key) {
  const globalState = useContext(WidgetContext)
  if (!key) {
    return globalState
  }
  return [globalState[key], globalState[`set${upperfirst(key)}`]]
}

export default useGlobalState
