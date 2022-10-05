const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Emily', 1, 'test@test.com', 'easmsm');
    
    expect(engineer.github) .toEqual(expect.any(String));
});