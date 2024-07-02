# Vorpal - Less

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

A 100% Javascript (ES2017) implementation of the [less](https://en.wikipedia.org/wiki/Less_%28Unix%29) command.

A [Vorpal.js](https://github.com/ApeironTsuka/vorpal) extension, `vorpal-less` lets you pipe vorpal commands and content through less.

### Installation

```bash
npm install @ApeironTsuka/vorpal-less
npm install @ApeironTsuka/vorpal
```

### Getting Started

```js
import Vorpal from '@ApeironTsuka/vorpal';
import hn from '@ApeironTsuka/vorpal-hacker-news';
import less from '@ApeironTsuka/vorpal-less';

const vorpal = new Vorpal();

vorpal
  .delimiter('node~$')
  .use(hn)
  .use(less)
  .show();
```

```bash
$ node hacker-news.js
node~$ hacker-news | less
...
... content
...
:
```

### Examples

- [Hackers News](https://github.com/ApeironTsuka/vorpal-less/blob/master/examples/hacker-news.js)
- [Rock Paper Scissors](https://github.com/ApeironTsuka/vorpal-less/blob/master/examples/rock-paper-scissors.js)

### Implementation

`vorpal-less` aims to be a letter-perfect implementation of the `less` command you know (and love?). All features implemented so far will appear in its help menu:

```bash
vorpal~$ less --help
```
##### Implemented:

- Primary functionality, prompt, screen writing, etc.
- All navigation commands and shortcuts.
- Less-style help menu.

### Contributing

Feel free to contribute! Additional work is needed on:

- Search options
- File-reading options
- Option flags

### License

MIT © [David Caccavella](https://github.com/dthree)

