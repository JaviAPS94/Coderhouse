const winston = require('winston')

const logger = winston.createLogger({
    transports : [
        new winston.transports.Console({level:'verbose'})
    ]
})

logger.level = 'debug'

logger.silly("Print silly")
logger.debug("Print debug")
logger.verbose("Print verbose")
logger.info("Print info")
logger.warn("Print warn")
logger.error("Print error")