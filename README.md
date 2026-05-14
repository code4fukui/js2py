# js2py

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A JavaScript ES module for converting JavaScript code to Python.

This tool parses JavaScript into an Abstract Syntax Tree (AST), applies a series of transformations for syntax and library function mappings, and then generates equivalent Python code.

## Features

- **ES Module Native:** Runs in modern JavaScript environments like Deno and browsers.
- **Syntax Conversion:** Translates modern JS syntax including arrow functions, object destructuring, classes (`extends`, `static`), and loops (`for`, `while`).
- **Library Mappings:** Provides built-in patterns to convert common functions from:
  - [BigNumber.js](https://github.com/MikeMcl/bignumber.js)
  - Lodash (e.g., `_isEmpty`, `_max`)
  - Standard `Math` and `Array` methods
- **AST-Based:** Uses an Abstract Syntax Tree for robust and extensible transformations.

## Examples

### Object Destructuring

**JavaScript:**
```javascript
let { a, b } = c;
d = a + b;
```
**Python:**
```python
d = c.a + c.b
```

### BigNumber.js

**JavaScript:**
```javascript
a.minus(b).times(0.5)
```
**Python:**
```python
(a - b) * 0.5
```

### Classes and Static Attributes

**JavaScript:**
```javascript
class A {
  fun() {
    return A.id;
  }
}
A.id = "MyId";
```
**Python:**
```python
class A:
  def fun(self):
    return "MyId"
```

## Usage

### As an ES Module

```js
import { JS2Py } from "https://code4fukui.github.io/js2py/src/JS2Py.js";

const transpiler = new JS2Py();
const jsCode = `for (let i = 0; i < 10; i++) { for (let j = 0; j < i; j++) { i + j }}`;
const pythonCode = transpiler.convert(jsCode);

console.log(pythonCode);
// Output:
// for i in range(0, 10):
//   for j in range(0, i):
//     i + j
```

### From the Command Line

The tool can be run directly using Deno to convert a file.

```sh
deno run -A cli.js example.js
```

## Development

To run the test suite:

```sh
deno test
```

## Supported Libraries

- [MikeMcl/bignumber.js: A JavaScript library for arbitrary-precision decimal and non-decimal arithmetic](https://github.com/MikeMcl/bignumber.js)

## Similar Projects

- [int3/js2py: A Javascript-to-Python translation assistant.](https://github.com/int3/js2py)
- [kevinbarabash/js2py: Transpile JavaScript to Python.](https://github.com/kevinbarabash/js2py)

## License

MIT License