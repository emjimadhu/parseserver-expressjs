// Parse server Import
const ParseServer = require('parse-server').ParseServer

// Import Constants
const consts = require(__base + '/utils/consts')

// Exporting Parse Instance
module.exports.parseAPI = () => new ParseServer({
  databaseURI: consts.parse.databaseURL,
  cloud: consts.parse.cloud,
  appId: consts.parse.appID,
  masterKey: consts.parse.masterKey,
  serverURL: consts.parse.serverURL,
  liveQuery: {
    classNames: ["Posts", "Comments"]
  }
})

// Exporting Parse Live Query Initialization
module.exports.initLiveQuery = (app) => ParseServer.createLiveQueryServer(app)
