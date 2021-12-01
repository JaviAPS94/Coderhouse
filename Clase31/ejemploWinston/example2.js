const winston = require('winston')

const logger = winston.createLogger({
    level: 'info',
    transports : [
        new winston.transports.Console({level:'verbose'}),
        new winston.transports.File({ filename: 'info.log', level:'warn'}),
    ]
})

logger.silly('Print silly')
logger.debug('Print debug')

logger.verbose('Print verbose')
logger.info('Print info')

logger.warn('Print warn')
logger.error('Print error')