const test = require('ava')
const generateTitle = require('../../index')
const formatDate = require('../../lib/format-date')
const data = require('../data/kontrakt-signert.json')
const now = data.documentDate ? new Date(data.documentDate) : new Date()
const date = formatDate(now)
const expectedPublicTitle = `Informasjonsbrev - godkjent lærekontrakt - ${date}`
const expectedTitle = `Informasjonsbrev - godkjent lærekontrakt - ${date}`
const titles = generateTitle(data)

test('it returns expected publicTitle', t => {
  t.deepEqual(expectedPublicTitle, titles.publicTitle, 'publicTitle OK')
})

test('it returns expected title', t => {
  t.deepEqual(expectedTitle, titles.title, 'title OK')
})
