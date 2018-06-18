const capitalize = require('../capitalize')

module.exports = data => {
  let title = []
  let publicTitle = []
  title.push(capitalize(data.type))
  publicTitle.push(capitalize(data.type))
  title.push(data.category)
  publicTitle.push(data.category)
  return {
    title: title.join(' - '),
    publicTitle: publicTitle.join(' - ')
  }
}
