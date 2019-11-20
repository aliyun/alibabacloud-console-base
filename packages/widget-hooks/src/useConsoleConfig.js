import { useContext } from 'react'
import { ConsoleConfigContext } from '@alicloud/widget-context'

function useConsoleConfig(key) {
  const consoleConfig = useContext(ConsoleConfigContext)
  if (!key) {
    return consoleConfig
  }
  return consoleConfig[key]
}

export default useConsoleConfig
