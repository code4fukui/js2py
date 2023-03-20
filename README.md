# Converts JavaScript to Python ES modules

Proof of concept, converting JS to Python in Pure JavaScript ES modules, for example:

```js
import { BigNumber as BigN } from "https://unpkg.com/bignumber.js@latest/bignumber.mjs";

class MathDevice {}

class Calculator extends MathDevice {
  constructor(args = []) {
    super({})
  }
  static max(list) {
    return BigN.max(list)
  }
}
```

into 

```py
class MathDevice:
  pass

class Calculator(MathDevice):
  def __init__(self, args = []):
    super().__init__({})

  def add(self, a, b):
    return max(list)
```

## Usage

### in JavaScript

```js
import { JS2Py } from "https://code4fukui.github.io/js2py/src/JS2Py.js";

const f = new JS2Py()
const js = `for (let i = 0; i < 10; i++) { for (let j = 0; j < i; j++) { i + j }}`;
console.log(f.convert(js));
```

### as a command

```sh
deno run -A cli.js example.js
```

## Test

```sh
cd test
deno test JS2Py.spec.js 
```

## Similar Projects

- [int3/js2py: A Javascript-to-Python translation assistant.](https://github.com/int3/js2py)
- [kevinbarabash/js2py: Transpile JavaScript to Python.](https://github.com/kevinbarabash/js2py)
