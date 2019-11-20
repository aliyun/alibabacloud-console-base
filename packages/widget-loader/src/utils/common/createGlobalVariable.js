function createGlobalVariable(namespace) {
  return {
    namespace,
    init() {
      if (!window[this.namespace]) {
        return window[this.namespace] = {}
      }
    },
    get(key) {
      let cache = window[this.namespace]
      if (!cache) {
        cache = this.init()
      }
      return cache[key]
    },
    set(key, value) {
      let cache = window[this.namespace]
      if (!cache) {
        cache = this.init()
      }
      cache[key] = value
      return true
    }
  }
}

export default createGlobalVariable
