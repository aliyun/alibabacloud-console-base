export default function injectScript(scriptNode, iWindow) {
  // it's a good convention to always use the explicit alias to access top
  // browsing context globals, it helps to avoid ambiguity with
  // the nesting browsing context globals
  const hostWindow = window
  const hostDocument = document

  // delay the execution to the next event loop
  setTimeout(() => {
    let u

    if (!scriptNode.src) {
      return
    }

    try {
      u = new URL(scriptNode.src)
    } catch (err) {
      return
    }

    const sp = u.searchParams

    if (sp) {
      const callbackName = sp.get('callback') || sp.get('cb') || sp.get('jsonp')

      if (callbackName && typeof iWindow[callbackName] === 'function') {
        // keep an ref to the origin callback
        const originCallback = hostWindow[callbackName]

        hostWindow[callbackName] = function (...args) {
          const result = iWindow[callbackName](...args)
          // resume the origin callback
          hostWindow[callbackName] = originCallback
          return result
        }
      }
    }

    hostDocument.head.appendChild(scriptNode)
  }, 0)
}
