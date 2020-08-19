export default class HookManager {
  constructor() {
    this.handlers = []
  }

  use(fulfilled, rejected) {
    const handler = {
      fulfilled,
      rejected,
    }

    this.handlers.push(handler)

    return () => {
      this.handlers = this.handlers.filter((h) => h !== handler)
    }
  }
}
