const fs = require('fs')
const fsextra = require('fs-extra')
const path = require('path')

var target = '/Applications/MAMP/htdocs/test.wdjzt.com/wap/......'

function deloy() {
  fs.exists(target, function (exists) {
    if (exists) {
      fsextra.emptyDirSync(target)
      fsextra.copy(path.join(__dirname, '../dist'), target)
    }
  })
}

module.exports = deloy
