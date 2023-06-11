const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({encoded:true}));
require('./config/mongoose.config');

const port = 8000;
require('./routes/todo.routes')(app);
app.listen(port, () => {console.log(`Listening on port: ${port}`)});