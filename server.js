const express = require("express") ;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const branches = require("./routes/branches");
const cors = require('cors');

const app = express();
//body parser middleware
app.use(bodyParser.urlencoded({extended : false}));
app.use(cors());
app.use(bodyParser.json());

//db config
//test is the name of database we want to create
const db = require("./config/keys").mongoURI;

//connect to mongodb
mongoose.connect(db)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err) );

//choose the port that we want to run
const port = process.env.port || 5000;

//use routes
app.use("/api/branch",branches);


//listen to the port and give the message that server is connected
app. listen(port, () => console. log(`Server running on port ${port}`));