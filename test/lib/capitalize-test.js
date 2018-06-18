const test = require('ava')
const capitalize = require('../../lib/capitalize')

test('it returns false with no input', t => {
  t.deepEqual(capitalize(), false, 'false ok')
})

test('it returns Bullseye from bullseye', t => {
  t.deepEqual(capitalize('bullseye'), 'Bullseye', 'capitalized ok')
})
