require('dotenv').config();
const express = require('express');

const app = express();
const todoRoute = require('./routes/index');
const PORT = 3300 || DB_PORT;

app.use(express.json());
app.use('/api/todos', todoRoute);


app.listen(PORT, () => console.log('Server is running on port ' + PORT));