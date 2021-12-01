const pino = require('pino')

const logger = pino({ level : 'trace'})

logger.trace("Print trace");
logger.debug("Print debug");

logger.info("Print info");
logger.warn("Print warn");
logger.error("Print error");
logger.fatal("Print fatal");