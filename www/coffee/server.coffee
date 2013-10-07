express = require 'express'
webapp = express()

webapp.get '/', (req, res) ->  
  res.render "index.html"

appDir = "#{__dirname}/.."

webapp.use express.static(appDir)
webapp.set("views",  appDir)

webapp.engine('html',  require('ejs').renderFile)

port = 6969
webapp.listen port
console.log 'Listening on port #{port}'