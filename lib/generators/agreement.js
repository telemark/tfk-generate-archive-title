const capitalize = require('../capitalize')

const categories = {
  boker: 'Gratis utlån av læremidler',
  elevpc: 'Leieavtale elev-pc',
  images: 'Samtykke til bruk av bilder i skoleadministrative systemer'
}

module.exports = data => {
  let title = []
  let publicTitle = []
  title.push(capitalize(categories[data.category]))
  publicTitle.push(capitalize(categories[data.category]))
  title.push(data.dsfContactNormalized.fullName)
  return {
    title: title.join(' - '),
    publicTitle: publicTitle.join(' - ')
  }
}
