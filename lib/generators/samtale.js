const capitalize = require('../capitalize')
const datePadding = require('../date-padding')

function resolveCategory (item) {
  let resolved = item.documentCategory

  if (item.documentCategory === 'samtale') {
    resolved = item.documentTemplate === 'ikke-samtale' ? 'ikke ønsket' : 'gjennomført'
  }

  return resolved
}

function formatDate (date) {
  return `${datePadding(date.getDate())}.${datePadding(date.getMonth() + 1)}.${date.getFullYear()}`
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
    title: title,
    publicTitle: publicTitle
  }
}
