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


const port = process.env.PORT || 8000;

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req,res)=>{
        res.sendFile(path.join(__dirname,'client','build','index.html'));
    });
}

app.listen(port);