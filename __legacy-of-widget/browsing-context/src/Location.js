class Location {
  constructor(opts, ctx, frame) {
    // it's a good convention to always use the explicit alias to access top
    // browsing context globals, it helps to avoid ambiguity with
    // the nesting browsing context globals
    const hostLocation = window.location

    return new Proxy(frame.contentWindow.location, {
      get(target, name) {
        ctx.addGetRecord({
          targetName: 'location',
          name,
        })

        // one app one location
        // code inside the nesting browsing context have full read access to
        // the top level location
        return hostLocation[name]
      },

      set(target, name, value) {
        ctx.addSetRecord({
          targetName: 'location',
          name,
          value,
        })

        // dump write operation
        return true
      },
    })
  }
}

export default Location
