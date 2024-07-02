'use strict';

import Vorpal from '@ApeironTsuka/vorpal';
import chalk from 'chalk';
import hn from '@ApeironTsuka/vorpal-hacker-news';
import less from '../src/less.js';

vorpal
  .delimiter(`${chalk.grey(`type "${chalk.blue(`hacker-news -l 50 | less`)}":`)}`)
  .use(less)
  .use(hn)
  .show();

