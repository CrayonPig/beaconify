'use strict';

const pluginBrower = require('..');
const assert = require('assert').strict;

assert.strictEqual(pluginBrower(), 'Hello from pluginBrower');
console.info('pluginBrower tests passed');
