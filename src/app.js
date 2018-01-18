global.__base = __dirname + '/'

// Library Imports
const express = require('express')
const path = require('path')
const ParseServer = require('parse-server').ParseServer

// Custom Imports
const consts = require('./utils/consts')

const api = new ParseServer({
  databaseURI: consts.parse.databaseURL,
  cloud: consts.parse.cloud,
  appId: consts.parse.appID,
  masterKey: consts.parse.masterKey,
  serverURL: consts.parse.serverURL,
  liveQuery: {
    classNames: ["Posts", "Comments"]
  }
})

const app = express()

// Serve static assets from the /public folder
app.use('/public', express.static(path.join(__base, '/public')))

// Serve the Parse API on the /parse URL prefix
app.use(consts.parse.mountPath, api)

require('./routes')(app)

app.listen(consts.port, () => {
  console.log(`Server started at http://localhost:${consts.port}`)
})

// This will enable the Live Query real-time server
ParseServer.createLiveQueryServer(app)
