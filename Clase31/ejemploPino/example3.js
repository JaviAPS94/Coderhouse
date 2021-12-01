const pino = require('pino')

const logger = pino({ level : 'info'})

const child = logger.child({a: 'property'})

child.trace("Print trace");
child.debug("Print debug");
child.info("Print info");
child.warn("Print warn");
child.error("Print error");
child.fatal("Print fatal");
