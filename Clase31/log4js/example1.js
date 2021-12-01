const log4js = require("log4js");

const logger = log4js.getLogger();

logger.level = 'info';

logger.trace("Print trace");
logger.debug("Print debug");

logger.info("Print info");
logger.warn("Print warn");
logger.error("Print error");
logger.fatal("Print fatal");