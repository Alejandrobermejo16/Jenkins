// __tests__/sum.test.js
const sum = require('../sum');  // Asegúrate de que `sum.js` esté en el directorio correcto

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
