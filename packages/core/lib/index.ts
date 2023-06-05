import { error } from '@beaconify/utils/lib/console';
import initMixin from './init';

export interface IBeaconifyOptions {
  debug: boolean;
  dsn: string;
  plugins: Array<string>;
}

function Beaconify(options: IBeaconifyOptions): void {
  if (!(this instanceof Beaconify)) {
    error('Beaconify 是一个构造函数，应该用`new`关键字调用');
    return;
  }
  try {
    this._init(options);
  } catch (e) {
    error(e);
  }
}

initMixin(Beaconify);

export default Beaconify;
