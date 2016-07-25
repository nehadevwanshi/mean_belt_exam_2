var   express  = require( 'express' );
var   path     = require( 'path' );
var    root     = __dirname;
var    port     = process.env.PORT || 8002;
var    bp       = require('body-parser');
var    app      = express();


app.use( express.static( path.join( root, 'client' )))
app.use( express.static( path.join( root, 'bower_components' )));
app.use(bp.json())

require('./server/config/db.js');
require('./server/config/route.js')(app);

app.listen( port, function() {
  console.log( 'server running on port ${ port }' );
});