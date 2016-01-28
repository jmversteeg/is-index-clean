# is-index-clean

> check if a git repository has uncommitted changes

[![Build Status][travis-image]][travis-url]
[![Code Quality][codeclimate-image]][codeclimate-url]
[![NPM Version][npm-image]][npm-url]


## Install

```
$ npm install --save is-index-clean
```

## Usage

```js
const isIndexClean = require('is-index-clean');

isIndexClean.then(() => {
    console.log('index clean');
}, () => {
    console.log('index not clean');
});
```

## API

### is-index-clean()

Returns a Promise, which will be fulfilled if the index is completely clean and rejected otherwise.

## License

MIT © [JM Versteeg](http://github.com/jmversteeg)

[![dependency Status][david-image]][david-url]
[![devDependency Status][david-dev-image]][david-dev-url]

[travis-image]: https://img.shields.io/travis/jmversteeg/is-index-clean.svg?style=flat-square
[travis-url]: https://travis-ci.org/jmversteeg/is-index-clean

[codeclimate-image]: https://img.shields.io/codeclimate/github/jmversteeg/is-index-clean.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/jmversteeg/is-index-clean

[david-image]: https://img.shields.io/david/jmversteeg/is-index-clean.svg?style=flat-square
[david-url]: https://david-dm.org/jmversteeg/is-index-clean

[david-dev-image]: https://img.shields.io/david/dev/jmversteeg/is-index-clean.svg?style=flat-square
[david-dev-url]: https://david-dm.org/jmversteeg/is-index-clean#info=devDependencies

[coveralls-image]: https://img.shields.io/coveralls/jmversteeg/is-index-clean.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/jmversteeg/is-index-clean

[npm-image]: https://img.shields.io/npm/v/is-index-clean.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/is-index-clean