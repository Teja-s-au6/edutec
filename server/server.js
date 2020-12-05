const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const apiRoutes = require("./routes/rollNumberRoutes");

// Init
const app = express();
app.use(express.json());
app.use(cors());

app.use(apiRoutes);


app.listen(process.env.PORT || 4000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});