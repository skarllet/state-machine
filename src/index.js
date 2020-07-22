module.exports = {
  create: () => {
    const states = {}

    const add = (name, handler) => states[name] = handler

    const change = to => states[to]({ change })

    return {
      add,
      change,

      get states() {
        return { ...states }
      }
    }
  }
}
