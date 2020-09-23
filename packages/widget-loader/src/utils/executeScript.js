// this util exists because of `browsing-context` injection.
import generateSourceURL from './generateSourceURL'

function executeScript({ browsingContext: ctx, code, name }) {
  // eslint-disable-next-line no-new-func
  let func = Function(`
    return function widgetExecuteScriptWrapperFunction({
      window,
      self,
      document,
      location,
      history
    }) {
      ${code}
    };
    ${generateSourceURL(name)}`)()

  func = func.bind(ctx ? ctx.window : window)

  func({
    window: ctx ? ctx.window : window,
    self: ctx ? ctx.window : window,
    document: ctx ? ctx.document : document,
    location: ctx ? ctx.location : location,
    history: ctx ? ctx.history : history,
  })
}

export default executeScript
