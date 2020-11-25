class History {
  constructor(opts, ctx, frame) {
    // it's a good convention to always use the explicit alias to access top
    // browsing context globals, it helps to avoid ambiguity with
    // the nesting browsing context globals
    const hostHistory = window.history

    return new Proxy(frame.contentWindow.history, {
      get(target, name) {
        ctx.addGetRecord({
          targetName: 'history',
          name,
        })

        // one app one history
        if (typeof target[name] === 'function' && /^[a-z]/.test(name)) {
          /**
           * methods: pushState, replaceState etc.
           */
          return hostHistory[name].bind(hostHistory) // to avoid illegal invocation
        }

        return hostHistory[name]
      },

      set(target, name, value) {
        ctx.addSetRecord({
          targetName: 'history',
          name,
          value,
        })

        // dump write operation
        return true
      },
    })
  }
}

export default History
