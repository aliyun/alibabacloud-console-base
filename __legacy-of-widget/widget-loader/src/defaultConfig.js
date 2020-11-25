export const defaultConfig = {
  dependencies: {},
  hoc: {},
  requestCompanion: [],
  lazy: true,
  prepareTimeout: 60000,
  browsingContext: null,
  jsonpIdentifier: 'widgetJsonp',
}

export const mergeConfig = (...configs) =>
  configs.reduce(
    (prev, curr) => ({
      ...prev,
      ...curr,
    }),
    {}
  )

export const mergeWithDefaultConfig = (...configs) =>
  configs.reduce(
    (prev, curr) => ({
      ...prev,
      ...curr,
    }),
    defaultConfig
  )
