const log4js = require("log4js");

log4js.configure({
    appenders: {
      fileAppender: { type: "file", filename: 'info.log' },
      consoleAppender: { type: "console" }
    },
    categories: {
      default: { appenders: ["fileAppender", "consoleAppender"], level: "trace" }
    }
  });
   
  const logger = log4js.getLogger();
  
  logger.trace("Print trace");
  logger.debug("Print debug");
  logger.info("Print info");
  logger.warn("Print warn");
  logger.error("Print error");
  logger.fatal("Print fatal");