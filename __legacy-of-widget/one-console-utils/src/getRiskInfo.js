import getGlobalVariable from './getGlobalVariable'

export const RISK_INFO = 'RISK_INFO'
const getRiskInfo = () => {
  const riskInfo = getGlobalVariable(RISK_INFO)
  return riskInfo || {}
}

export default getRiskInfo
