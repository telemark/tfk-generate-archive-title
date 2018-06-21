const test = require('ava')
const generateTitle = require('../../index')
const data = require('../data/elevpc.json')

test('it returns expected title for agreement', t => {
  const titles = generateTitle(data)
  const expectedTitles = {
    title: 'Leieavtale elev-pc - Thomas Topstad',
    publicTitle: 'Leieavtale elev-pc'
  }
  t.deepEqual(titles, expectedTitles, 'agreement ok')
})
