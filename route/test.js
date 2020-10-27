const Router = require('@koa/router');
const fs = require('fs');

const route = new Router();
route.get('/', (ctx) => {
  ctx.set('Content-Type', 'text/html');
  ctx.body = fs.createReadStream('../dist/index.html');
});

module.exports = route;
