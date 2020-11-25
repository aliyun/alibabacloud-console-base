function getWidgetFactory(modules = [], id, version) {
  const module =
    modules.find(([_id, _version]) => id === _id && version === _version) || []

  return module[2]
}

export default getWidgetFactory
