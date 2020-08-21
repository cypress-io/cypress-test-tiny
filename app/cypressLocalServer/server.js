const Koa = require('koa');
const Router = require('@koa/router');
const staticServe = require('koa-static');
const mount = require('koa-mount');
const path = require('path');
const appRoute = require('./app');
// cache timing
// cypress clears the cache between runs and when running locally you want to re-fetch
// when you change something
const MAX_AGE_MS = 0;

module.exports = () => {
    const app = new Koa();
    const router = new Router({ prefix: '/integrationTests' });

    appRoute(router);

    app.use(router.routes());
    app.use(router.allowedMethods());

    // the css/js files to serve
    app.use(
        mount(
            `/static`,
            staticServe(path.join(__dirname, '../dist'), {
                maxage: MAX_AGE_MS,
            }),
        ),
    );

    // mock data files
    app.use(
        mount(
            `/data`,
            staticServe(path.join(__dirname, '../data'), {
                maxage: MAX_AGE_MS,
            }),
        ),
    );

    // send a 500 error if an error occurs
    app.use(async (ctx, next) => {
        try {
            await next();
        } catch (err) {
            ctx.status = err.status || 500;
            ctx.body = err.message;
            ctx.app.emit('error', err, ctx);
        }
    });

    app.on('error', (err) => {
        console.error('[koa] Error:', err);
    });

    const server = app.listen(3001);

    return () => server.close();
};

// if run directly, start the server straight away
if (!module.parent) {
    console.log(
        "If you're running in standalone mode, remember to run webpack with the --standalone flag\nServer running...",
    );
    module.exports();
}
