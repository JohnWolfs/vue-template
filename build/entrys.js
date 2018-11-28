var fs = require('fs')
var path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

var files = fs.readdirSync(resolve('/src/pages/'))
var res = []

for(var i = 0; i < files.length; i++) {
  if (files[i] !== '.DS_Store') res.push(files[i])
}

module.exports = res
