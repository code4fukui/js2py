# js2py

JavaScriptコードをPythonに変換するためのJavaScript ESモジュールです。

このツールはJavaScriptを抽象構文木（AST）にパースし、構文やライブラリ関数のマッピングに関する一連の変換を適用した後、同等のPythonコードを生成します。

## 機能

- **ESモジュールネイティブ:** DenoやブラウザなどのモダンなJavaScript環境で動作します。
- **構文変換:** アロー関数、オブジェクトの分割代入、クラス（`extends`、`static`）、ループ（`for`、`while`）などのモダンなJS構文を変換します。
- **ライブラリマッピング:** 以下の一般的な関数を変換するための組み込みパターンを提供します:
  - [BigNumber.js](https://github.com/MikeMcl/bignumber.js)
  - Lodash（例: `_isEmpty`、`_max`）
  - 標準の `Math` および `Array` メソッド
- **ASTベース:** 抽象構文木（AST）を使用し、堅牢で拡張性の高い変換を実現します。

## 例

### オブジェクトの分割代入

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

### クラスと静的属性

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

## 使い方

### ESモジュールとして

```js
import { JS2Py } from "https://code4fukui.github.io/js2py/src/JS2Py.js";

const transpiler = new JS2Py();
const jsCode = `for (let i = 0; i < 10; i++) { for (let j = 0; j < i; j++) { i + j }}`;
const pythonCode = transpiler.convert(jsCode);

console.log(pythonCode);
// 出力:
// for i in range(0, 10):
//   for j in range(0, i):
//     i + j
```

### コマンドラインから

Denoを使用してファイルを直接変換できます。

```sh
deno run -A cli.js example.js
```

## 開発

テストスイートを実行するには:

```sh
deno test
```

## 対応ライブラリ

- [MikeMcl/bignumber.js: 任意精度の10進数および非10進数算術のJavaScriptライブラリ](https://github.com/MikeMcl/bignumber.js)

## 関連プロジェクト

- [int3/js2py: JavaScriptからPythonへの変換アシスタント。](https://github.com/int3/js2py)
- [kevinbarabash/js2py: JavaScriptをPythonにトランスパイル。](https://github.com/kevinbarabash/js2py)

## ライセンス

MIT License
