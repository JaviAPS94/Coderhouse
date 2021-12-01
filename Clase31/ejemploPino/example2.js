const pino = require('pino')

const logger = pino({ level : 'trace'})

logger.trace({c: {a:42,b:2}},'Hola mundo')
logger.debug("Print debug");
logger.info({a:42},'Hola mundo')
logger.warn("Print warn");
logger.error('Print error');
logger.fatal('La respuesta es %d', 42);