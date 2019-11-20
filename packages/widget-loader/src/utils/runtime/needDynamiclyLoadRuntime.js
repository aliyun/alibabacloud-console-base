function needDynamiclyLoadRuntime(currentDependencies) {
  if (
    currentDependencies['react'] &&
    currentDependencies['react-dom'] &&
    currentDependencies['prop-types'] &&
    currentDependencies['@alicloud/console-components'] &&
    currentDependencies['@alicloud/console-components-intl/lib/Provider'] &&
    currentDependencies['@alicloud/console-components-intl/lib/withRcIntl']
  ) {
    return false
  }

  // Need to load
  return true
}

export default needDynamiclyLoadRuntime
