// Setting Global Directory
global.__base = __dirname + '/'

// Library Imports
const express = require('express')
const path = require('path')
const morgan = require('morgan')
const ParseServer = require('parse-server').ParseServer

// Custom Imports
const consts = require('./utils/consts')

// Creating Parse Server Instance
const parseAPI = new ParseServer({
  databaseURI: consts.parse.databaseURL,
  cloud: consts.parse.cloud,
  appId: consts.parse.appID,
  masterKey: consts.parse.masterKey,
  serverURL: consts.parse.serverURL,
  liveQuery: {
    classNames: ["Posts", "Comments"]
  }
})

// Creating APP
const app = express()

// Morgon for HTTP Request
app.use(morgan('combined'))
// Serve static assets from the /public folder
app.use('/public', express.static(path.join(__base, '/public')))
// Serve the Parse API on the /parse URL prefix
app.use(consts.parse.mountPath, parseAPI)

// Importing Routes
require('./routes')(app)

// Creating HTTP Server
app.listen(consts.port, () => {
  console.log(`Server started at http://localhost:${consts.port}`)
})

// This will enable the Live Query real-time server
ParseServer.createLiveQueryServer(app)
