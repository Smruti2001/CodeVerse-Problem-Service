const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/server.config');
const apiRouter = require('./routes');
const errorHandler = require('./utils/errorHandler');
const connectToDB = require('./config/db.config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.get('/ping', (req, res) => {
    return res.json({ message: 'Problem Service is alive' });
})

// The custom error handler middleware 
app.use(errorHandler)

app.listen(PORT, async () => {
    console.log(`Server started listening at PORT ${PORT}`);
    await connectToDB();
    console.log('Successfully connected to DB server.')
})