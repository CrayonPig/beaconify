import initMixin from './init';

export interface IBeaconifyOptions {
  debug: boolean;
}

export interface IBeaconifyFun {
  (options: IBeaconifyOptions): void;
}

function Beaconify(options) {
  if (!(this instanceof Beaconify)) {
    console.error('Beaconify is a constructor and should be called with the `new` keyword');
    return;
  }
  this._init(options);
}

initMixin(Beaconify);

export default Beaconify;
