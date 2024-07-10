const postRouter = require('./post.route');
const partnersRouter = require('./partners.route');
function route(app) {
    app.use('/posts',postRouter);
    app.use('/partners', partnersRouter)
}
module.exports = route;