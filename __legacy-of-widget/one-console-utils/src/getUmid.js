import getRiskInfo from './getRiskInfo'

const getUmid = () => {
  const riskInfo = getRiskInfo()
  return riskInfo.UMID
}

export default getUmid
