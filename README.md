# deconsole [![Flattr this!](https://api.flattr.com/button/flattr-badge-large.png)](https://flattr.com/submit/auto?user_id=hughskennedy&url=http://github.com/hughsk/deconsole&title=deconsole&description=hughsk/deconsole%20on%20GitHub&language=en_GB&tags=flattr,github,javascript&category=software)[![experimental](http://hughsk.github.io/stability-badges/dist/experimental.svg)](http://github.com/hughsk/stability-badges) #

Remove `console.*` statements from a JS source string, while preserving original formatting

## Usage ##

[![deconsole](https://nodei.co/npm/deconsole.png?mini=true)](https://nodei.co/npm/deconsole)

### `deconsole(str, [opts])`

Takes a JavaScript string as input, and returns your cleaned up JavaScript in
return.

You can also pass the following options:

* `range`: an array with two elements, the first being the start position and
  the second being the end position for which to apply the input to. Each can
  be either a `Number` or an `Object` with `row` and `column` properties.

## License ##

MIT. See [LICENSE.md](http://github.com/hughsk/deconsole/blob/master/LICENSE.md) for details.
