function createDynamicWindStylePrefix(windRuntimeVersion) {
  return `v${windRuntimeVersion.split('.').join('-')}-`
}

export default createDynamicWindStylePrefix
