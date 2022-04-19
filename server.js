const express = require("express") ;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


const app = express();
//body parser middleware
app.use(bodyParser . urlencoded ( {extended : false})) ;
app.use(bodyParser . json() );

//db config
//test is the name of database we want to create
const db = "mongodb://localhost:27017/test"

//connect to mongodb
mongoose.connect(db)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err) );

//choose the port that we want to run
const port = process.env.port || 5000;

app.use("/",(req,res) => (
    res.json({ message: "Welcome Pulsara"})));

//listen to the port and give the message that server is connected
app. listen(port, () => console. log(`Server running on port ${port}`));