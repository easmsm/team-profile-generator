const Intern = require('../lib/Intern');

test('creates an engineer object', () => {
    const Intern = new intern('Emily', 001, 'test@test.com', 'Lourdes');
  
    expect(intern.school).toEqual(expect.any(String));
});