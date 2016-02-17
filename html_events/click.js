var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.static(__dirname + "/../html_events/"));
app.get('/start',
    function(req,res)
    {
        res.redirect('/home');
        console.log("Start");
    }
);
app.get('/stop',
    function(req,res)
    {
        res.redirect('/home');
        console.log("Stop");
    }
);
app.get('/home',
    function(req,res)
    {
      console.log("Home requested");
      var data = fs.readFile('./index.html', function (err, html) { if (err) { throw err;}
      res.writeHeader(200, {"Content-Type": "text/html"});
      res.write(html);
        });
      res.end();
    }
  );
app.listen(80);
