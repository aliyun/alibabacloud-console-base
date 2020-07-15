import generateSourceURL from './generateSourceURL'

export default function executeUmd({
  code,
  dependencies = {},
  browsingContext: ctx,
  name,
}) {
  const module = { exports: {} }
  const require = (moduleIdentifier) => dependencies[moduleIdentifier]

  // eslint-disable-next-line no-new-func
  let func = Function(`
    return function widgetExecuteUmdWrapperFunction(
      module,
      exports,
      require,
      window,
      self,
      document,
      location,
      history
    ) {
      ${code}
    };
    ${generateSourceURL(name)}`)()

  func = func.bind(ctx.window)

  func(
    module,
    module.exports,
    require,
    ctx.window,
    ctx.window,
    ctx.document,
    ctx.location,
    ctx.history
  )

  return module.exports
}
