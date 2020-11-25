class Window {
  constructor(opts = {}, ctx, frame) {
    // it's a good convention to always use the explicit alias to access top
    // browsing context globals, it helps to avoid ambiguity with
    // the nesting browsing context globals
    const hostWindow = window

    // escape hatches to the top window object
    const dangerouslyPermittedAccess = opts.dangerouslyPermittedAccess || []

    return new Proxy(frame.contentWindow, {
      set(target, name, value) {
        ctx.addSetRecord({
          targetName: 'window',
          name,
          value,
        })

        return Reflect.set(target, name, value)
      },

      get(target, name) {
        ctx.addGetRecord({
          targetName: 'window',
          name,
          danger: dangerouslyPermittedAccess.includes(name),
        })

        if (dangerouslyPermittedAccess.includes(name)) {
          return typeof hostWindow[name] === 'function' && /^[a-z]/.test(name)
            ? hostWindow[name].bind && hostWindow[name].bind(hostWindow) // to avoid illegal invocation
            : hostWindow[name]
        }

        // intercept the accesses to the commonly used globals
        // and delegate these accesses to the proxy globals
        switch (name) {
          case 'parent':
            return ctx.window
          case 'self':
            return ctx.window
          case 'document':
            return ctx.document
          case 'location':
            return ctx.location
          case 'history':
            return ctx.history
          default:
            return typeof target[name] === 'function' && /^[a-z]/.test(name)
              ? target[name].bind && target[name].bind(target) // to avoid illegal invocation
              : Reflect.get(target, name)
        }
      },
    })
  }
}

export default Window
