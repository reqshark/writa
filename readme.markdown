# writa

a generic node `stream_writable` function

# install
```bash
$ npm i writa
```

# use
```js
const writa = require('writa')

/* first obtain the source stream */
const { createReadStream } = require('fs')
const r = createReadStream('readme.markdown')

/* obtain a writable destination by passing a function to writa */
const s = writa(function (chunk, _, next) {

  /* consume readable's data */
  console.log(chunk+'')

  /* callback moves stream forward to next chunk */
  next()
})

/* pipe to it now from some source stream, like readable */
r.pipe(s)
```

# test
```bash
npm t
```

# related art

* [thr](https://github.com/reqshark/thr)
* [node-nanomsg](https://github.com/nickdesaulniers/node-nanomsg)
* [pull-recvfrom](https://github.com/reqshark/pull-recvfrom)
* [the stream handbook](https://github.com/substack/stream-handbook)
* [stream_writable](https://nodejs.org/docs/latest/api/stream.html#stream_writable_streams)

### MIT
