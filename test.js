var Err    = require('./index'),
    assert = require('assert');

var myErr = Err('NotFound', { code: 404 });

assert.equal(myErr.message, 'NotFound');
assert.equal(myErr.code, 404);

var noPropsErr = Err('NotFound');

assert.throws(function() {
  Err();
}, /argument missing/);
