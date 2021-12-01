const log4js = require("log4js");

log4js.configure({
    appenders: {
      fileAppender: { type: "file", filename: 'info2.log' },
      consoleAppender: { type: "console" }
    },
    categories: {
      default: { appenders: ["consoleAppender"], level: "info" },
      console: { appenders: ["consoleAppender"], level: "info" },
      file: { appenders: ["fileAppender"], level: "error" },
    }
  });
   
const logger = log4js.getLogger();
logger.trace("Print trace");
logger.debug("Print debug");
logger.info("Print info");
logger.warn("Print warn");
logger.error("Print error");
logger.fatal("Print fatal");

const loggerFile = log4js.getLogger('file');
loggerFile.trace("Print trace");
loggerFile.debug("Print debug");
loggerFile.info("Print info");
loggerFile.warn("Print warn");

loggerFile.error("Print error");
loggerFile.fatal("Print fatal");