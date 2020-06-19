module.exports = {
  create: (states = {}) => {
    const change = to => states[to]({ change })
    return { change }
  }
}
