import getConsoleConfig from './getConsoleConfig'

// 标签
export const LABELS = 'LABELS'

export default (seriesName, typeName) => {
  const labels = getConsoleConfig(LABELS)
  if (labels[seriesName]) {
    const labelTypes = labels[seriesName]
    for (const typeItem of labelTypes) {
      if (typeItem.type === typeName) {
        return true
      }
    }
  }
  return false
}
