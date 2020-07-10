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
    // Create the State Machine instance,
    const sm = StateMachine.create();

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
});
