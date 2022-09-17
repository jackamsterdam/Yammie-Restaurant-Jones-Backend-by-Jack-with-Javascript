const logger = require("../01-utils/log-helper")

async function logReqests(request, response, next) {

    const msg = `${request.method} Request to ${request.originalUrl}`
    logger.info(msg)

    next()
}


module.exports = logReqests