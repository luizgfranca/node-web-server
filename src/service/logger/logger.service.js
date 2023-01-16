const LogLevelOptions = {
    INFO: 0,
    LOG: 1,
    DEBUG: 2,
    TRACE: 3
}

const LOG_LEVEL = LogLevelOptions.DEBUG;

const LoggerService = {
    info: (args) => { console.info(args) },
    log: (args) => {
        if(LOG_LEVEL >= LogLevelOptions.LOG)
            console.log(args)
    },
    debug: (args) => {
        if(LOG_LEVEL >= LogLevelOptions.DEBUG)
            console.debug(args)
    },
    trace: (args) => {
        if(LOG_LEVEL >= LogLevelOptions.TRACE)
            console.trace(args)
    }
}

module.exports = LoggerService