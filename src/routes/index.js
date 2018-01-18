const generalRoutes = require(__base + '/controllers/general')

module.exports = (app) => {
  // Root Route
  app.get('/',
    generalRoutes.root)
  // Test Route
  app.get('/test',
    generalRoutes.test)
}
