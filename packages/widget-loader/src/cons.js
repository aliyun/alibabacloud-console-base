import axios from 'axios'

/**
 * default options for widget loader
 */
export const DEFAULT_OPTIONS = {
  dangerouslyUseDaily: false
}

/**
 * default runtime dependencies
 * `axios` is provied by the widget loader itself
 */
export const DEFAULT_RUNTIME_DEPENDENCIES = {
  axios: axios,
  // react & react-dom are no longer provided by the loader
  // these dependencies will be dynamicly loaded at runtime just like wind-runtime
  // react: React,
  // 'react-dom': ReactDOM,
  // On the other hand, in order to reduce the shared packages, which are easy
  // prone to errors, prop-types will be bundled into widget.
  // 'prop-types': PropTypes
}


export const fuzzyVersionPattern = /^(\d+)\.x$/
export const specificVersionPattern = /^(\d+)\.(\d+)\.(\d+)$/


export const DEFAULT_STYLE_PREFIX_FOR_WIND_COMPONENT = 'aliyun-widget-'


/*
 * Identifier name of the widget cache
 */
export const WIDGET_CACHE = '__ALIYUN_WIDGET_CACHE__'


/**
 * widget_store is used to share data between all widgets and more.
 */
export const WIDGET_STORE = '__ALIYUN_WIDGET_STORE__'


/**
 * Package version
 */
export const PACKAGE_VERSION = '3.9.0'
