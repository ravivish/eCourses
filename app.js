const express = require('express');
const path = require('path');
var genuuid = require('uuid').v4;
const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express();

const api = require('./server/api');
const db = require('./server/db');

// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');

//Configure .env
require('dotenv').config();

//Set port as process.env.PORT if it is present otherwise set it to 4000
const port = process.env.PORT || 4000;

//Initiate connection with database
db.connect({
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
}).then(() => {
    //Handle /api with the api middleware
    app.use('/api', session({
        genid() {
            return genuuid() // use UUIDs for session IDs
        },
        store: new MongoStore({ client: db.getClient() }),
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        maxAge:1000*60*60*24
    }), api);
    
    // app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    //Handle non-api routes with static build folder
    app.use(express.static(path.join(__dirname, 'build')));

    //Return index.html for routes not handled by build folder
    app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });


    //Start listening on port
    app.listen(port, () => {
        console.log(`Server listening at port: ${port}`);
    });
});