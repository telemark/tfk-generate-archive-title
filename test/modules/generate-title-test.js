const test = require('ava')
const generateTitle = require('../../index')
const data = require('../data/ikke-samtale.json')
const expectedPublicTitle = 'Elevsamtale - ikke ønsket - 20.08.2017 - BAMVS:3ST'
const expectedTitle = 'Elevsamtale - ikke ønsket - Thomas Topstad - 20.08.2017 - BAMVS:3ST'
const titles = generateTitle(data)

test('it returns expected title', t => {
  t.deepEqual(expectedTitle, titles.title, 'title ok')
})

test('it returns expected publicTitle', t => {
  t.deepEqual(expectedPublicTitle, titles.publicTitle, 'publicTitle ok')
})
