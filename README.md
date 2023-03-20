# Converts JavaScript to Python ES modules

Proof of concept, converting JS to Python, for example:

```js
const BigN = require('bignumber.js')

class Calculator extends MathDevice {
  constructor(args = []) {
    super({})
  }

  static max(a, b) {
    return BigN.max(a, b)
  }
```

into 

```py
class Calculator(MathDevice):
  def __init__(self, args = []):
    super().__init__({})

  def add(self, a, b):
    return max(a, b)
```

## Usage

```js
import { JS2Py } from "https://code4fukui.github.io/js2py/src/JS2Py.js";

const f = new JS2Py()
const js = `for (let i = 0; i < 10; i++) { for (let j = 0; j < i; j++) { i + j }}`;
console.log(f.convert(js));
```

## Todo

- test for Deno

## Similar Projects

- [int3/js2py: A Javascript-to-Python translation assistant.](https://github.com/int3/js2py)
- [kevinbarabash/js2py: Transpile JavaScript to Python.](https://github.com/kevinbarabash/js2py)
