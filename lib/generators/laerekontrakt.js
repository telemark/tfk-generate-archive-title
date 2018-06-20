const formatDate = require('../format-date')

module.exports = (item, untOff) => {
  const now = item.documentDate ? new Date(item.documentDate) : new Date()
  const date = formatDate(now)
  let title = []
  let publicTitle = []
  title.push('Informasjonsbrev')
  publicTitle.push('Informasjonsbrev')
  title.push('godkjent lærekontrakt')
  publicTitle.push('godkjent lærekontrakt')
  title.push(date)
  publicTitle.push(date)

  return {
    title: title.join(' - '),
    publicTitle: publicTitle.join(' - ')
  }
}
