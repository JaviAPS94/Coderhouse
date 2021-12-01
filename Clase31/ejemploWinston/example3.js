const winston = require('winston');

const {createLogger, format, transports} = winston;
const {combine, printf, timestamp, colorize} = format;



const logger = winston.createLogger({
    level: 'debug',
    format: combine(
        timestamp({
            format: 'MMM-DD-YYYY HH:mm:ss'
        }),
        colorize(),
        printf((info) => `${info.level} | ${[info.timestamp]} | ${info.message}`)
    ),
    transports : [
        new winston.transports.Console()
    ]
})

logger.silly('Print silly')
logger.debug('Print debug')
logger.verbose('Print verbose')
logger.info('Print info')
logger.warn('Print warn')
logger.error('Print error')