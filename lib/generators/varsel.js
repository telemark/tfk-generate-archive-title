const capitalize = require('../capitalize')
const getSkoleAar = require('get-skole-aar')
const fixPeriod = require('../fix-period')

module.exports = item => {
  let title = []
  let publicTitle = []
  title.push(capitalize(item.documentType))
  publicTitle.push(capitalize(item.documentType))
  title.push(item.documentCategory)
  publicTitle.push(item.documentCategory)
  title.push(item.studentName)
  title.push(item.studentMainGroupName)
  publicTitle.push(item.studentMainGroupName)
  title.push(fixPeriod(item.period))
  publicTitle.push(fixPeriod(item.period))
  title.push(getSkoleAar())
  publicTitle.push(getSkoleAar())

  let result = title.join(' - ')
  const charsLeft = 128 - result.length

  if (item.documentCategory === 'fag') {
    const coursesList = item.coursesList.split('\n')
    const coursesJoined = coursesList
      .map(course => course.split(' ')[0])
      .map(course => course.split(':')[1])
      .reduce((a, b) => `${a} - ${b}`)

    if (coursesJoined.length + 4 <= charsLeft) {
      result = result.replace('fag', `fag - ${coursesJoined}`)
    } else if (coursesList.length > 1 && charsLeft >= 6) {
      result = result.replace('fag', 'flere fag')
    }
  }

  return {
    title: title.join(' - '),
    publicTitle: publicTitle.join(' - ')
  }
}
