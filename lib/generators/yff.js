const getSkoleAar = require('get-skole-aar')

module.exports = (item, untOff) => {
  let title = []
  let publicTitle = []

  if (item.documentCategory === 'yff-bekreftelse') {
    title.push('Bekreftelse til elev')
    publicTitle.push('Bekreftelse til elev')
  } else if (item.documentCategory === 'yff-bekreftelse-bedrift') {
    title.push('Bekreftelse til bedrift')
    publicTitle.push('Bekreftelse til bedrift')
  } else if (item.documentCategory === 'yff-lokalplan') {
    title.push('Elevens lokale læreplan')
    publicTitle.push('Elevens lokale læreplan')
  } else if (item.documentCategory === 'yff-tilbakemelding') {
    title.push('Tilbakemeldingsskjema - arbeidspraksis')
    publicTitle.push('Tilbakemeldingsskjema - arbeidspraksis')
  }
  title.push('yrkesfaglig fordypning')
  publicTitle.push('yrkesfaglig fordypning')
  title.push('YFF')
  publicTitle.push('YFF')
  title.push(item.studentName)
  if (item.documentCategory !== 'yff-bekreftelse-bedrift') {
    title.push(item.schoolName)
  }
  title.push(getSkoleAar())
  if (['yff-bekreftelse', 'yff-tilbakemelding'].includes(item.documentCategory)) {
    title.push(item.bedriftsNavn)
  }

  return {
    title: title.join(' - '),
    publicTitle: publicTitle.join(' - ')
  }
}
