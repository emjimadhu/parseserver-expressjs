// Setting Global Directory
global.__base = __dirname + '/'

// Library Imports
const express = require('express')
const path = require('path')
const morgan = require('morgan')

// Custom Imports
const parseImports = require('./parse')
const consts = require('./utils/consts')

// Creating APP
const app = express()

// Morgon for HTTP Request
app.use(morgan('combined'))

// Serve static assets from the /public folder
app.use('/public', express.static(path.join(__base, '/public')))

// Serve the Parse API on the /parse URL prefix
app.use(consts.parse.mountPath, parseImports.parseAPI)

// Importing Routes
require('./routes')(app)

// Creating HTTP Server
app.listen(consts.port, () => {
  console.log(`Server started at http://localhost:${consts.port}`)
})

// This will enable the Live Query real-time server
parseImports.initLiveQuery(app)
