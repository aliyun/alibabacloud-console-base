// Basic console utils that differ from portal to portal
import getCurrentUid from './getCurrentUid'
import getParentUid from './getParentUid'
import getAccountType from './getAccountType'
import getChannel from './getChannel'
import getLang from './getLang'
import getLocale from './getLocale'
import getSecToken from './getSecToken'
import getUmid from './getUmid'
import getCollina from './getCollina'
import getRegionName from './getRegionName'
import getZoneName from './getZoneName'

// Universal console utils that are useful in all portals
import isOneConsole from './isOneConsole'
import channelLinkFactory from './channelLinkFactory'
import channelFeatureFactory from './channelFeatureFactory'
import useCORS from './useCORS'
import isWidgetPreEnv from './isWidgetPreEnv'

// Optional console utils
// Will dynamicly injected by loader
import getWindMessages from './getWindMessages'
import getChannelLinkList from './getChannelLinkList'
import getChannelFeatureList from './getChannelFeatureList'
import getChannelLink from './getChannelLink'
import getChannelFeature from './getChannelFeature'
import getWidgetI18nMessages from './getWidgetI18nMessages'
import getWidgetInfo from './getWidgetInfo'
import getStylePrefixForWindComponent from './getStylePrefixForWindComponent'

const basicUtils = {
  getParentUid,
  getCurrentUid,
  getAccountType,
  getChannel,
  getLang,
  getLocale,
  getSecToken,
  getUmid,
  getCollina,
  getRegionName,
  getZoneName,
}

function getBasicUtils() {
  return basicUtils
}

// All console stay same
const universalUtils = {
  isOneConsole,
  channelLinkFactory,
  channelFeatureFactory,
  useCORS,
  getCollina,
  isWidgetPreEnv,
}

function getUniversalUtils() {
  return universalUtils
}

// All this methods below are used in develop environment.
// `getBasicUtils` & `getUniversalUtils` are used in production.
export {
  getParentUid,
  getCurrentUid,
  getAccountType,
  getChannel,
  getLang,
  getLocale,
  getSecToken,
  getUmid,
  getCollina,
  getRegionName,
  getZoneName,
  getWindMessages,
  isOneConsole,
  useCORS,
  isWidgetPreEnv,
  channelLinkFactory,
  getChannelLinkList,
  getChannelLink,
  channelFeatureFactory,
  getChannelFeatureList,
  getChannelFeature,
  getWidgetI18nMessages,
  getStylePrefixForWindComponent,
  getWidgetInfo,
  getBasicUtils,
  getUniversalUtils,
}
