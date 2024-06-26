const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({encoded:true}));
require('./config/mongoose.config');

require('dotenv').config();
// Later, use this to get access to the keys stored in the env file
// const myFirstSecret = process.env.FIRST_SECRET_KEY;

const port = 8000;

require('./routes/user.routes')(app);

app.listen(port, () => {console.log(`Listening on port ${port}`)});