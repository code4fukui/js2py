const JS2Py = require('./src/JS2Py')

const f = new JS2Py()
//const js = `for (let i = 0; i < 10; i++) { for (let j = 0; j < i; j++) { i+j }}`;
const js = `const a = (b, c) => b + c;
print(a(5, 10));
`;
console.log(f.convert(js));
