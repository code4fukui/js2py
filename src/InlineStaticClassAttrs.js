import { Traverse } from "./Traverse.js";
import { Pattern } from "./Pattern.js";

class SearchStaticClassAttrs {

  constructor () {
    this.classPatterns = []
    this.staticAttrs = []
  }

  leaveClassDeclaration(node) {
    this.classPatterns.push([node.id.name, new Pattern(`${node.id.name}._1 = _2`, {matchStatement: true})])
  }

  leave(ast) {
    const patterns = this.classPatterns.filter(([_, pattern]) => pattern.type === ast.type)
    for (const [className, pattern] of patterns) {
      const matches = pattern.match(ast)
      if (matches) {
        const staticAttr = [`${className}.${matches._1.name}`, matches._2]
        this.staticAttrs.push(staticAttr)
        return { type: 'Noop' }
      }
    }
  }

}

class InlineStaticClassAttrs {
  constructor (staticAttrs) {
    this.patterns = staticAttrs.map(([attr, value]) => [new Pattern(attr), value])
  }

  leave(ast) {
    const patterns = this.patterns.filter(([pattern]) => pattern.type === ast.type)
    for (const [pattern, value] of patterns) {
      const matches = pattern.match(ast)
      if (matches) {
        return value // TODO should return copy of value
      }
    }
  }
}

export function inlineStaticClassAttrs(ast) {
  const search = new SearchStaticClassAttrs()
  Traverse.traverse(ast, search)
  if (search.staticAttrs.length > 0) {
    Traverse.traverse(ast, new InlineStaticClassAttrs(search.staticAttrs))
  }
}
