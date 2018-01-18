module.exports = {
  port: process.env.PORT || 1337,
  parse: {
    databaseURL: process.env.DATABASE_URI || process.env.MONGODB_URI || 'mongodb://localhost:27017/dev',
    cloud: process.env.CLOUD_CODE_MAIN || __base + '/cloud/main.js',
    appID: process.env.APP_ID || 'myAppId',
    masterKey: process.env.MASTER_KEY || 'myMasterKey',
    serverURL: process.env.SERVER_URL || 'http://localhost:1337/parse',
    mountPath: process.env.PARSE_MOUNT || '/parse'
  }
}
