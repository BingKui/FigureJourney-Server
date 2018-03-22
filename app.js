'use strict';

module.exports = app => {
  app.once('server', server => {
    console.log(server);
    console.log('HTTP 服务已经启动成功！');
  });
  app.on('error', (err, ctx) => {
    console.log(ctx);
  });
  app.on('request', ctx => {
    console.log('请求', ctx);
  });
  app.on('response', ctx => {
    console.log('请求响应', ctx);
  });
};
