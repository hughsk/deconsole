var position = require('file-position')
var falafel  = require('falafel')
var methods  = [
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

function deconsole(src, opt) {
  opt = opt || {}
  src = String(src)

  var range = opt.range || []
  var start = range.length ? range[0] : null
  var end   = range.length ? range[1] : null

  if (range = start !== null && end !== null) {
    var getPosition = position(src)

    start = typeof start !== 'number'
      ? getPosition(start.row, start.column)
      : start

    end = typeof end !== 'number'
      ? getPosition(end.row, end.column)
      : end
  }

  return falafel(src, function(node) {
    if (range) {
      if (node.range[0] < start) return
      if (node.range[1] > end) return
    }

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
