const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');



const app = express();

app.use(cookieParser());
app.use(cors({credentials: true, origin: "http://localhost:3000"}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


require('./config/mongoose.config');

require('dotenv').config();
// Later, use this to get access to the keys stored in the env file
// const myFirstSecret = process.env.FIRST_SECRET_KEY;

const port = 8000;

require('./routes/user.routes')(app);

app.listen(port, () => {console.log(`Listening on port ${port}`)});