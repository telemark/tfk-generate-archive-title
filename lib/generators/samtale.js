const capitalize = require('../capitalize')
const formatDate = require('../format-date')

function resolveCategory (item) {
  return item.documentTemplate === 'ikke-samtale' ? 'ikke ønsket' : 'gjennomført'
}

module.exports = (item) => {
  const now = item.documentDate ? new Date(item.documentDate) : new Date()
  const date = formatDate(now)
  let title = []
  let publicTitle = []
  title.push(capitalize('Elevsamtale'))
  publicTitle.push(capitalize('Elevsamtale'))
  title.push(resolveCategory(item))
  publicTitle.push(resolveCategory(item))
  title.push(item.studentName)
  title.push(date)
  publicTitle.push(date)
  title.push(item.studentMainGroupName)
  publicTitle.push(item.studentMainGroupName)

  return {
    title: title.join(' - '),
    publicTitle: publicTitle.join(' - ')
  }
}
