![Node.js Package](https://github.com/skarllet/state-machine/workflows/Node.js%20Package/badge.svg)

# State Machine
This module is destinated to manage the state of the Agent;

## How to use
### Install
```
npm install @skarllet/state-machine
```

### Usage
```
// To use the module inside Node JS
const StateMachine = require('@skarllet/state-machine')

// Create the State Machine instance,
const sm = StateMachine.create();

// Define the states
sm.add('state:foo', async ({ change }) => change('state:bar'))
sm.add('state:bar', async () => {})

// Bootstrap the events by changing the first state
sm.change('state:foo');

```
