const Manager = require('../lib/Manager');

test('creates an engineer object', () => {
    const Manager = new manager('Emily', 001, 'test@test.com', 4444444444);
  
    expect(manager.officeNumber).toEqual(expect.any(Number));
});