const log4js = require("log4js");

// Appenders: Salidas de nuestros logs
// Categories: crear varios loggers, feault

log4js.configure({
  appenders: {
    consoleAppender: { type: "console" }
  },
  categories: {
    default: { appenders: ["consoleAppender"], level: "error" }
  }
});
 
const logger = log4js.getLogger();

logger.trace("Print trace");
logger.debug("Print debug");
logger.info("Print info");
logger.warn("Print warn");

logger.error("Print error");
logger.fatal("Print fatal");