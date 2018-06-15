const test = require('ava')
const generateTitle = require('../../index')

test('it returns default title on empty', t => {
  const titles = generateTitle({})
  const expectedTitles = {
    title: 'Brev til Bøtte Knoth fra Telemark fylkeskommune',
    publicTitle: 'Brev fra Telemark fylkeskommune'
  }
  t.deepEqual(titles, expectedTitles, 'default ok')
})

test('it returns expected title for agreement', t => {
  const titles = generateTitle({
    category: 'agreement',
    type: 'elevpc'
  })
  const expectedTitles = {
    title: 'Elevpc - agreement',
    publicTitle: 'Elevpc - agreement'
  }
  t.deepEqual(titles, expectedTitles, 'agreement ok')
})
