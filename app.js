const Koa = require('koa');
const statics = require('koa-static');
const path = require('path');
const route = require('./route/test');

const app = new Koa();
app.use(statics(path.resolve(__dirname, 'dist')));
app.use(route.routes());
app.use(route.allowedMethods());

app.listen(3000);
