var appDir, express, webapp;

express = require('express');

webapp = express();

webapp.get('/', function(req, res) {
  return res.render("index.html");
});

appDir = "" + __dirname + "/..";

webapp.use(express["static"](appDir));

webapp.set("views", appDir);

webapp.engine('html', require('ejs').renderFile);

webapp.listen(6969);

console.log('Listening on port 6969');
