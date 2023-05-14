const utils = require('@beaconify/utils')

function core() {
  utils();
  console.log('Hello from core');
}

core()

module.exports = core;
