const winston = require('winston');
const { LOG_DB_URL } = require('./server.config');
require('winston-mongodb');

const allowedTransports = [];

// Below transport enable logging in the console
allowedTransports.push(new winston.transports.Console({
    format: winston.format.combine(
        winston.format.errors({ stack: true }),
        winston.format.colorize(),
        // First arg to the combine function is defining how we want the timestamp to be
        winston.format.timestamp({
            format: 'YYYY-MM-DD  HH:mm:ss'
        }),
        // The 2nd arg defines what actually wil be printed in the log
        winston.format.printf((log) => `${log.timestamp} [${log.level}]: ${log.message}\n${log.stack}`)
    )
}));


// Below transport enables logging in the MongoDB 
allowedTransports.push(new winston.transports.MongoDB({
    level: 'error',
    db: LOG_DB_URL,
    collection: 'logs'
}));


// The below transport enables loggin in the file
allowedTransports.push(new winston.transports.File({
    filename: 'app.log'
}));


// ==> NOTE: One can trace the STACK TRAY when the log level is ERROR but the ERROR that's being passed must be an Instance of JS Error then only it'll work.
// If we are passing a normal string in the logger.error then it'll simply print it as its a string not an Instance of JS error which has a stack tray 

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.errors({ stack: true }),
        // First arg to the combine function is defining how we want the timestamp to be
        winston.format.timestamp({
            format: 'YYYY-MM-DD  HH:mm:ss'
        }),
        // The 2nd arg defines what actually wil be printed in the log
        winston.format.printf((log) => `${log.timestamp} [${log.level}]: ${log.message} - ${log.stack}`)
    ),
    transports: allowedTransports
});


module.exports = logger;