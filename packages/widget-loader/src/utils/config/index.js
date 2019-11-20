import axios from 'axios'
import getConfigURL from './getConfigURL'
import generateWidgetConfigExtractionError from '../errorGenerator/generateWidgetConfigExtractionError'


const axiosInstance = axios.create()

async function loadWidgetConfig({ widgetId, locale, channelId }) {
  let failedOnOfficialCdn = false
  try {
    return await load(widgetId, locale, channelId, failedOnOfficialCdn)
  } catch (err) {
    failedOnOfficialCdn = true
    return await load(widgetId, locale, channelId, failedOnOfficialCdn)
  }
}

async function load(widgetId, locale = 'en-US', channelId = 'OFFICIAL', recover) {
  const configUrl = getConfigURL(widgetId, recover)
  const {
    locales,
    links,
    features,
  } = await loadConfig(configUrl)

  try {
    return {
      messages: locales[locale] ? locales[locale].messages : locales['en-US'].messages,
      links: links[channelId] || links.OFFICIAL,
      features: features[channelId] || features.OFFICIAL
    }
  } catch (err) {
    throw generateWidgetConfigExtractionError(err)
  }
}

async function loadConfig(url) {
  const resp = await axiosInstance.get(url)
  return resp.data
}

export default loadWidgetConfig