const path = require('path')

module.exports = {
  root (req, res) {
    res.send({
      message: 'Batman cave opened.'
    })
  },
  test (req, res) {
    res.sendFile(path.join(__base, '/public/test.html'))
  }
}
