[![Build Status](https://travis-ci.org/telemark/tfk-generate-archive-title.svg?branch=master)](https://travis-ci.org/telemark/tfk-generate-archive-title)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# tfk-generate-archive-title

Generates title for archive

## Usage

```JavaScript
const generateTitle = require('tfk-generate-archive-title')
const data = require('./data')
const titles = generateTitle(data)
console.log(titles)
```

returns

```JavaScript
{
  title: 'The title with all info',
  publicTitle: 'The title with less info'
}
```

## License

[MIT](LICENSE)

![Robohash image of tfk-generate-archive-title](https://robots.kebabstudios.party/tfk-generate-archive-title.png "Robohash image of tfk-generate-archive-title")