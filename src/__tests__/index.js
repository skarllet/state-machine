const stateMachine = require('../index');

describe('state machine', () => {
  describe('Checks the return of the module', () => {
    test('The Query object should have a "create" property', () => {
      expect(stateMachine).toHaveProperty('create');
    });

    test('The "create" property should be an function', () => {
      expect(typeof stateMachine.create).toBe('function');
    });
  });

  describe('Checks the return of the "create" function', () => {
    test('The create function should return an Object', () => {
      const sm = stateMachine.create();
      expect(typeof sm).toBe('object')
    });
  
    test('The object should have the property: change', () => {
      const sm = stateMachine.create();
      expect(sm).toHaveProperty('change');
    });
  });

  describe('Tests the functionality of the created State Machine', () => {
    // Create the State Machine instance,
    const sm = stateMachine.create();

    // Define the states
    const cbA = jest.fn(async ({ change }) => change('state:bar'))
    const cbB = jest.fn(async () => {})

    sm.add('state:foo', cbA)
    sm.add('state:bar', cbB)

    // Bootstrap the events by changing the first state
    sm.change('state:foo');

    describe('Tests the call of the states', () => {
      test('the state "state:foo" should be called one time', () => {
        expect(cbA.mock.calls.length).toBe(1);
      });
  
      test('the state "state:bar" should be called one time', () => {
        expect(cbB.mock.calls.length).toBe(1);
      });
    });
  });

  describe('Tests the `states` property', () => {
    test('should have 2 states inside the states object', () => {
      const sm = stateMachine.create();

      // Register valid states
      sm.add('state:foo', async () => {})
      sm.add('state:bar', async () => {})

      // dont start the chain reaction because we dont need it now
      expect(Object.entries(sm.states).length).toBe(2)
    })

    test('the `states` property should be immutable', () => {
      const sm = stateMachine.create();

      // Register valid states
      sm.add('state:foo', async () => {})
      sm.add('state:bar', async () => {})

      const snapshot = { ...sm.states }

      sm.states['foo'] = 'bar'

      // dont start the chain reaction because we dont need it now
      expect(sm.states).toEqual(snapshot)
    })
  })
});
