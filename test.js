var deconsole = require('./')
var test = require('tape')

var src = (function() {
  console.log('hello world!')
  lorem.ipsum['dolor'](
      console.error(content)
    , 'console.warn("not modified")'
  )

  var x = {
    y: console.time('a'),
    z: console.timeEnd('a')
  }
}).toString()
  .slice(13, -2)

test('deconsole', function(t) {
  var mod = deconsole(src)

  t.notEqual(src.indexOf('console.log'), -1, 'contains console.log')
  t.notEqual(src.indexOf('console.time'), -1, 'contains console.time')
  t.notEqual(src.indexOf('console.error'), -1, 'contains console.error')
  t.notEqual(src.indexOf('console.timeEnd'), -1, 'contains console.timeEnd')

  t.equal(mod.indexOf('console.log'), -1, 'removed console.log')
  t.equal(mod.indexOf('console.time'), -1, 'removed console.time')
  t.equal(mod.indexOf('console.error'), -1, 'removed console.error')
  t.equal(mod.indexOf('console.timeEnd'), -1, 'removed console.timeEnd')
  t.notEqual(mod.indexOf('console.warn'), -1, 'did not remove console.warn in string')

  t.end()
})

test('within a range', function(t) {
  var mod = deconsole(src, {
    range: [
      { row: 0, column: 0 },
      { row: 5, column: 2 }
    ]
  })

  t.equal(mod.indexOf('console.log'), -1, 'removed console.log')
  t.equal(mod.indexOf('console.error'), -1, 'removed console.error')
  t.notEqual(mod.indexOf('console.time'), -1, 'removed console.time')
  t.notEqual(mod.indexOf('console.timeEnd'), -1, 'removed console.timeEnd')
  t.end()
})
