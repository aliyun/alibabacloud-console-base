import getRiskInfo from './getRiskInfo'

const getCollina = () => {
  const riskInfo = getRiskInfo()
  if (typeof riskInfo.GETUA === 'function') {
    return riskInfo.GETUA() || 'Fake collina generated in [getCollina]'
  }
}

export default getCollina
