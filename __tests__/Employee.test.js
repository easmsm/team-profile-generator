const Employee = require('../lib/Employee');

test('creates an employee', () => {
    const employee = new Employee('Emily', 001, 'test@test.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));


});