var falafel = require('falafel')
var methods = [
    'log'
  , 'warn'
  , 'info'
  , 'debug'
  , 'error'
  , 'assert'
  , 'clear'
  , 'dir'
  , 'dirxml'
  , 'trace'
  , 'group'
  , 'groupCollapsed'
  , 'time'
  , 'timeEnd'
  , 'timeStamp'
  , 'profile'
  , 'profileEnd'
  , 'count'
  , 'exception'
  , 'table'
]

module.exports = deconsole

function deconsole(src) {
  src = String(src)

  return falafel(src, function(node) {
    if (node.type !== 'Identifier') return
    if (node.name !== 'console') return
    if (!node.parent) return
    if (!node.parent.property) return

    var key = node.parent.property.name
    if (methods.indexOf(key) === -1) return

    var outer = node.parent.parent.parent
    if (outer.type === 'ExpressionStatement') {
      return node.parent.parent.update('')
    }

    return node.parent.parent.update('undefined')
  }).toString()
}
