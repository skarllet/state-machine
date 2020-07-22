const events = require('@skarllet/events')

module.exports = {
  create: () => {
    const { emmit, on } = events.create()
    const states = {}

    const add = (name, handler) => states[name] = handler

    const change = to => {
      emmit('change', { to })
      states[to]({ change })
    }

    return {
      on,
      add,
      change,

      get states() {
        return { ...states }
      }
    }
  }
}
