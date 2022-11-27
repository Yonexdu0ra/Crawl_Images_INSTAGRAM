const instagramRouter = require('./instagram')

function routes(app) {
    app.use(instagramRouter)
}

module.exports = routes