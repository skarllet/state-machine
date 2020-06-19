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

// Create a Queue

// Events states the functions that should be called in the order specified
const states = {
  'state:foo': async ({ change }) => { /* do something boty*/ },
  'state:bar': async ({ change }) => { /* do something boty*/ },
  ...createState('state:baz', events),
}

//
const sm = StateMachine.create(states);

// Initialize the chain effect
sm.change('state:foo');

```
