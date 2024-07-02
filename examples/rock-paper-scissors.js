'use strict';

import chalk from 'chalk';
import vorpal from '@ApeironTsuka/vorpal';
import less from '../../src/less.js';

function rand(r) { return Math.floor(Math.random() * r); }

function rps(lines, rows) {
  function gen() {
    const rand1 = ['rock', 'paper', 'scissors'][rand(3)];
    const rand2 = ['blue', 'white', 'yellow', 'red', 'magenta', 'green', 'cyan'][rand(7)];
    return `${chalk[rand2](rand1)} `;
  }
  let out = '';
  for (let i = 0; i < lines; i++) {
    rows = Math.floor((Math.random() * 20) * (Math.random() * 50));
    out = '';
    out += `${(i + 1)}: `;
    for (let j = 0; j < rows; j++) {
      out += gen(j + 1);
    }
    out += (i === lines - 1) ? '' : '\n';
    this.log(out);
  }
  return out;
}

vorpal
  .delimiter(`${chalk.grey(`type "${chalk.blue(`rock-paper-scissors | less`)}":`)}`)
  .use(less)
  .show();

vorpal.command('single', 'Spits an epic set of single-page data to less.')
  .alias('s')
  .parse((str) => {
    return `${str} | less -F`;
  })
  .action(function (args, cb) {
    this.log(rps(20, 5));
    setTimeout(() => {
      this.log(rps(10, 6));
      cb();
    }, 1000);
  });

vorpal.command('rock-paper-scissors', 'Spits an epic set of data to less.')
  .alias('b')
  .action(function (args, cb) {
    rps.call(this, 1000, null);
    // this.log(rps(500, Math.floor((Math.random() * 20) * (Math.random() * 50))));
    setTimeout(() => {
      // self.log(rps(10, 6));
      cb();
    }, 1000);
  });
