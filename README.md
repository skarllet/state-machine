![Node.js Package](https://github.com/skarllet/state-machine/workflows/Node.js%20Package/badge.svg)

# State Machine
This module is destinated to manage the state of the bot;

## Install the module
To use the module you need an ``` .npmrc ``` file with the following instructions:
```
@skarllet:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=[YOUR_TOKEN]
```

After you configure your ``` .npmrc ```, you may want to install the packadge:
```
npm install @skarllet/state-machine
```

## Usage
```
// To use the module inside node JS
const StateMachine = require('@skarllet/state-machine')

// Create the State Machine instance,
const sm = StateMachine.create(states);

// Define the states
sm.add('state:foo', async ({ change }) => change('state:bar'))
sm.add('state:bar', async () => {})

// Bootstrap the events by changing the first state
sm.change('state:foo');

```
