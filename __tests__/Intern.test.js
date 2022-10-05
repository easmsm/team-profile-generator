const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Emily', 1, 'easmsm', 'Lourdes');
    
    expect(intern.school) .toEqual(expect.any(String));
});