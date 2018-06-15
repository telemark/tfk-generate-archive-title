module.exports = data => {
  const category = data.category || data.documentCategory || 'default'
  const generateTitle = require(`./lib/generators/${category}`)
  return generateTitle(data)
}
