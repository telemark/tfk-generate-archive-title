module.exports = data => {
  const type = data.type || data.documentType || 'default'
  const generateTitle = require(`./lib/generators/${type}`)
  return generateTitle(data)
}
