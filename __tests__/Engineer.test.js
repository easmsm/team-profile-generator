const Engineer = require('../lib/engineer');

test('creates an engineer object', () => {
    const engineer = new engineer('Emily', 001, 'test@test.com', 'easmsm');
    // expect(employee.name).toEqual(expect.any(String));
    // expect(employee.id).toEqual(expect.any(Number));
    // expect(employee.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});