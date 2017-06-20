const tape = require ('tape')
const writa = require('./')

tape('==================== writa testsuite summary ====================', test)

function test(t){
  t.test('===== basic consumption =====', consumption)
}

function consumption(t){
  t.plan(2)

  /* first obtain the source stream */
  const { createReadStream, readFileSync } = require('fs')
  const r = createReadStream('readme.markdown')

  r.on('end', ()=> t.ok('stream ended', 'end event works'))

  /* obtain a writable destination by passing a function to writa */
  const s = writa(function (chunk, _, next) {

    /* consume readable's data */
    t.is(
      chunk+'',
      readFileSync('readme.markdown')+'',
      'small fs readstream chunk integrity'
    )

    /* callback moves stream forward to next chunk */
    next()
  })

  /* pipe to it now from some source stream, like readable */
  r.pipe(s)
}
