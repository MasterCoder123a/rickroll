let express = require("express");

let app = express();   

let PORT = process.env.PORT || 3000 

app.listen(PORT);  
app.get("/", function(req, res) {
	res.sendFile( __dirname + "/index.html" );
});
