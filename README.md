![Node.js Package](https://github.com/snkrs-loop/queue/workflows/Node.js%20Package/badge.svg)

# State Machine
This module is destinated to manage the state of the bot;

## Install the module
To use the module you need an ``` .npmrc ``` file with the following instructions:
```
@snkrs-loop:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=[YOUR_TOKEN]
```

After you configure your ``` .npmrc ```, you may want to install the packadge:
```
npm install @snkrs-loop/state-machine
```

## Usage
```
// To use the module inside node JS
const StateMachine = require('@snkrs-loop/state-machine')

// Define the states
const states = {
  'state:foo': async ({ change }) => change('state:bar'),
  'state:bar': async () => {},
};

// Create the State Machine instance,
// passing down the states object
const sm = StateMachine.create(states);

// Bootstrap the events by changing the first state
sm.change('state:foo');

```
