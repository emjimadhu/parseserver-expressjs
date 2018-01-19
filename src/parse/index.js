// Parse server Import
const ParseServer = require('parse-server').ParseServer

// Parse Instance and Parse Live Query Export
module.exports = {
  parseAPI: (consts) => {
    return new ParseServer({
      databaseURI: consts.parse.databaseURL,
      cloud: consts.parse.cloud,
      appId: consts.parse.appID,
      masterKey: consts.parse.masterKey,
      serverURL: consts.parse.serverURL,
      liveQuery: {
        classNames: ["Posts", "Comments"]
      }
    })
  },
  liveQuery: (app) => {
    return ParseServer.createLiveQueryServer(app)
  }
}

