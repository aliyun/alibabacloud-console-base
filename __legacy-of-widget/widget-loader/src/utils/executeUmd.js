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
      {
        window,
        self,
        document,
        location,
        history
      }
    ) {
      ${code}
    };
    ${generateSourceURL(name)}`)()

  func = func.bind(ctx ? ctx.window : window)

  func(module, module.exports, require, {
    window: ctx ? ctx.window : window,
    self: ctx ? ctx.window : window,
    document: ctx ? ctx.document : document,
    location: ctx ? ctx.location : location,
    history: ctx ? ctx.history : history,
  })

  return module.exports
}
