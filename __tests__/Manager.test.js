const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('Emily', 2, 'test@test.com', 3);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});