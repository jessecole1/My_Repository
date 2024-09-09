const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();


app.use(cookieParser());
app.use(cors({credentials: true, origin: "http://localhost:3000"}));
app.use(express.json());
app.use(express.urlencoded({encoded:true}));

require('./config/mongoose.config');

require('dotenv').config();

const port = 8000;

require('./routes/jude.routes')(app)

app.listen(port, () => {console.log(`Listening on port: ${port}`)});