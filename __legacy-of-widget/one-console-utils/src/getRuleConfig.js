import getConsoleConfig from './getConsoleConfig'

// 规则中心的配置
export const RULE_CONFIG = 'RULE_CONFIG'

export default (product, action, type = 'string') => {
  const ruleConfig = getConsoleConfig(RULE_CONFIG)
  if (ruleConfig[product] && ruleConfig[product][action]) {
    if (type === 'json') {
      let result = null
      try {
        result = JSON.parse(ruleConfig[product][action])
      } catch (error) {
        // do nothing
      }
      return result
    }
    return ruleConfig[product][action]
  }
  return null
}
