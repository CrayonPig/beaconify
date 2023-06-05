function initMixin(Beaconify) {
  Beaconify.prototype._init = async function (options) {
    if (!options || Object.keys(options).length === 0) {
      throw new Error('初始化参数不能为空');
    }

    if (!options.dsn) {
      throw new Error('dsn不能为空');
    }

    if (!options.plugins || options.plugins.length === 0) {
      throw new Error('插件列表不能为空');
    }

    const beacon = this;

    // 挂载参数到this
    beacon.debug = !!options.debug;
    beacon.plugins = options.plugins;
    beacon.dsn = options.dsn;
    console.log('beacon.plugins', beacon.plugins);

    // 依次调用plugins的 init 方法
    for (const plugin of beacon.plugins) {
      if (plugin.init) {
        await plugin.init();
      }
    }
  };
}

export default initMixin;
