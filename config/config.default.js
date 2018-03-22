'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1521614982961_5955';

  // add your config here
  config.middleware = [ 'gzip' ];
  config.gzip = {
    threshold: 1024, // 小于1K响应不压缩
  };
  return config;
};
