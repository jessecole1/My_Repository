const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/progress-tracker',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

    .then(() => console.log("Established a connection to the databse."))
    .catch(err => console.log("Error - Something went wrong when connecting to the database."));