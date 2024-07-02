'use strict';

import assert from 'assert';
import should from 'should';
import less from '../src/less.js';
import Vorpal from '@ApeironTsuka/vorpal';

const vorpal = new Vorpal();

vorpal.command('blabber').action(async (args) => {
  let blabber = '';
  for (let i = 0; i < 300; i++) {
    for (let j = 0; j < 80; j++) {
      blabber += Math.floor(Math.random() * 100);
    }
    blabber += '\n';
  }
  this.log(blabber);
});

describe('vorpal-less', () => {
  it('should exist and be a function', () => {
    should.exist(less);
    less.should.be.type('function');
  });

  it('should import into Vorpal', () => {
    (() => {
      vorpal.use(less);
    }).should.not.throw();
  });

  it('should exist as a command in Vorpal', () => {
    let exists = false;
    for (let i = 0, l = vorpal.commands.length; i < l; i++) {
      if (vorpal.commands[i]._name === 'less') {
        exists = true;
      }
    }
    exists.should.be.true;
  });
});
