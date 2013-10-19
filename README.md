### custom-err

Easily create an error object with custom properties attached.

### API

`Err(message, properties)`

### Usage

```js
var Err    = require('custom-err'),
    assert = require('assert');

// the first argument represents the error message
// the second argument represents the custom properties object
var myErr = Err('NotFound', { code: 404 });

assert.equal(myErr.message, 'NotFound');
assert.equal(myErr.code, 404);
```

### Why?

Because I found myself often writing code like this:

```js
var err = new Error('Not Found');
err.code = 404;
err.someProperty = true;
```

### License

MIT
