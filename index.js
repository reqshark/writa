/**
 * a generic node writable stream function
 */

module.exports = fn => new ws(fn)

function ws (fn) {
  this._write = fn
  require('stream').Writable.call(this)
}

require('util').inherits( ws, require('stream').Writable )
