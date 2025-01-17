import { Pattern } from "./Pattern.js";

export class JSVisitor {

  constructor () {
    const importDeclFn = (matches) => ({
      type: 'ImportDeclaration',
      specifiers: [{
        type: 'ImportDefaultSpecifier',
        local: matches._1
      }],
      source: matches._2
    })
    const removeFn = () => ({ type: 'Noop' })

    this.patterns = [
      [new Pattern('_1 = require(_2)'), importDeclFn],
      [new Pattern('const _1 = require(_2)'), importDeclFn],
      [new Pattern('module.exports = _1'), removeFn],
    ]
  }

  leaveExpressionStatement(ast) {
    if (ast.directive) {
      return { type: 'Noop' }
    }
  }

  leave(ast) {
    const patterns = this.patterns.filter(([from, toFn]) => from.type === ast.type)
    for (const [from, toFn] of patterns) {
      const matches = from.match(ast)
      if (matches) {
        return toFn(matches)
      }
    }
  }
}
