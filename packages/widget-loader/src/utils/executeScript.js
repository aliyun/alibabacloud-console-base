// this util exists because of `browsing-context` injection.
import generateSourceURL from './generateSourceURL'

function executeScript({ browsingContext: ctx, code, name }) {
  // eslint-disable-next-line no-new-func
  let func = Function(`
    return function widgetExecuteScriptWrapperFunction(
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

  func(ctx.window, ctx.window, ctx.document, ctx.location, ctx.history)
}

export default executeScript
