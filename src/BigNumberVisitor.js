export class BigNumberVisitor {

  leaveNewExpression (ast) {
    if (ast.callee.name !== 'BigN') return
    return ast.arguments[0]
  }

  leaveCallExpression(node) {
    if (node.callee.object?.name == "BigN") {
      node.callee = node.callee.property;
    }
  }
}
