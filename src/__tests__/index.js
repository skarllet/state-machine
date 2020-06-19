const StateMachine = require('../index');

describe('StateMachine', () => {
  describe('Checks the return of the module', () => {
    test('The Query object should have a "create" property', () => {
      expect(StateMachine).toHaveProperty('create');
    });

    test('The "create" property should be an function', () => {
      expect(typeof StateMachine.create).toBe('function');
    });
  });

  describe('Checks the return of the "create" function', () => {
    test('The create function should return an Object', () => {
      const sm = StateMachine.create();
      expect(typeof sm).toBe('object')
    });
  
    test('The object should have the property: change', () => {
      const sm = StateMachine.create();
      expect(sm).toHaveProperty('change');
    });
  });

  describe('Tests the functionality of the created State Machine', () => {
    // Define the states
    const states = {
      'state:foo': jest.fn(async ({ change }) => change('state:bar')),
      'state:bar': jest.fn(async () => {}),
    };

    // Create the State Machine instance,
    // passing down the states object
    const sm = StateMachine.create(states);

    // Bootstrap the events by changing the first state
    sm.change('state:foo');

    describe('Tests the call of the states', () => {
      test('the state "state:foo" should be called one time', () => {
        expect(states['state:foo'].mock.calls.length).toBe(1);
      });
  
      test('the state "state:bar" should be called one time', () => {
        expect(states['state:bar'].mock.calls.length).toBe(1);
      });
    });
  });
});
