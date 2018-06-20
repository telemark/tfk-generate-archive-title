const test = require('ava')
const getSkoleAar = require('get-skole-aar')
const generateTitle = require('../../index')
const data = require('../data/yff-bekreftelse.json')
const expectedPublicTitle = 'Bekreftelse til elev - yrkesfaglig fordypning - YFF'
const expectedTitle = `Bekreftelse til elev - yrkesfaglig fordypning - YFF - Thomas Topstad - Bamble vgs. avd. Grasmyr - ${getSkoleAar()} - CAFE GO' GRISEN AS`
const titles = generateTitle(data)

test('it returns expected publicTitle', t => {
  t.deepEqual(expectedPublicTitle, titles.publicTitle, 'publicTitle ok')
})

test('it returns expected title', t => {
  t.deepEqual(expectedTitle, titles.title, 'title ok')
})
