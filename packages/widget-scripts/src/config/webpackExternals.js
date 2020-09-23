/**
 * 构建器默认使用的 webpack external 配置
 */
const getAbc = require('../utils/getAbc')
// Get build options from abc.json
const { library } = getAbc()

module.exports = {
  /**
   * `react` related packages are excluded by default, widget must runs in
   * a environment that have `react` contained.
   */
  react: {
    root: ['WidgetReactRuntime16', 'default', 'react'],
    commonjs2: 'react',
    commonjs: 'react',
    amd: 'react',
  },
  'react-dom': {
    root: ['WidgetReactRuntime16', 'default', 'react-dom'],
    commonjs2: 'react-dom',
    commonjs: 'react-dom',
    amd: 'react-dom',
  },
  'prop-types': {
    root: ['WidgetReactRuntime16', 'default', 'prop-types'],
    commonjs2: 'prop-types',
    commonjs: 'prop-types',
    amd: 'prop-types',
  },
  /**
   * `wind` related packages are excluded by default also,
   * if the runtime do not have those contained, `widgetLoader` will load them
   * dynamicly.
   */
  '@alicloud/console-components': {
    root: ['WidgetWindRuntime', 'default', '@alicloud/console-components'],
    commonjs2: '@alicloud/console-components',
    commonjs: '@alicloud/console-components',
    amd: '@alicloud/console-components',
  },
  '@alicloud/console-components-intl/lib/Provider': {
    root: [
      'WidgetWindRuntime',
      'default',
      '@alicloud/console-components-intl/lib/Provider',
    ],
    commonjs2: '@alicloud/console-components-intl/lib/Provider',
    commonjs: '@alicloud/console-components-intl/lib/Provider',
    amd: '@alicloud/console-components-intl/lib/Provider',
  },
  '@alicloud/console-components-intl/lib/withRcIntl': {
    root: [
      'WidgetWindRuntime',
      'default',
      '@alicloud/console-components-intl/lib/withRcIntl',
    ],
    commonjs2: '@alicloud/console-components-intl/lib/withRcIntl',
    commonjs: '@alicloud/console-components-intl/lib/withRcIntl',
    amd: '@alicloud/console-components-intl/lib/withRcIntl',
  },
  /**
   * Widget console utils should be provided dynamicly according to different
   * console portal type.
   */
  '@alicloud/widget-utils-console': {
    root: 'WidgetConsoleUtils',
    commonjs2: '@alicloud/widget-utils-console',
    commonjs: '@alicloud/widget-utils-console',
    amd: '@alicloud/widget-utils-console',
  },
  '@alicloud/widget-utils-config': {
    root: `${library}Config`,
    commonjs2: '@alicloud/widget-utils-config',
    commonjs: '@alicloud/widget-utils-config',
    amd: '@alicloud/widget-utils-config',
  },
  /**
   * `axios` is used by all widgets, so it should help the performance
   * if we exclude it from the final bundle.
   * In runtime, it will be provided by `widgetLoader` to support widget to
   * run correctly.
   */
  axios: {
    root: 'axios',
    commonjs2: 'axios',
    commonjs: 'axios',
    amd: 'axios',
  },
  /**
   * Widget itself should not have its own loader, if it need the loader to
   * load another widget, it should use the loader that comes above.
   */
  '@alicloud/widget-import-console': {
    root: 'AliyunWidgetImportConsole',
    commonjs2: '@alicloud/widget-import-console',
    commonjs: '@alicloud/widget-import-console',
    amd: '@alicloud/widget-import-console',
  },
}
