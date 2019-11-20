/**
 * This method will be excluded by the widget bundler and be
 * injected by the widget loader at runtime.
 * This means the method will not be utilized by widgets that get loaded by
 * widget loader.
 * The only two use cases are:
 * 1. In dev environment;
 * 2. By widgets get loaded through the <script> tag.
 * In dev env, we still need to handle two situations. For now, wind-runtime is
 * installed by the developer, thus the style_prefix will always be "aliyun-widget-".
 * But we intend to change this pattern, to ensure the wind-runtime should be
 * controlled by widget.js
 */

function getStylePrefixForWindComponent() {
  const windRuntimeVersion = window['WidgetWindRuntime'] && window['WidgetWindRuntime']['version']
  if (windRuntimeVersion) {
    return `v-${windRuntimeVersion.replace(/\./g, '-')}-`
  }
  return process.env.STYLE_PREFIX
}

export default getStylePrefixForWindComponent
