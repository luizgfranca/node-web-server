const { postRequest } = require("../../processor/content-request.processor");
const LoggerService = require("../logger/logger.service");

const ContentService = {
    serveContent: (resourceRelativePath) => {
        LoggerService.trace('ContentService.serveContent', resourceRelativePath)

        return new Promise((resolve, _) => {

            if(resourceRelativePath[0] === '/')
                resourceRelativePath[0] = ''

            postRequest({
                path: resourceRelativePath, 
                callback: (data) => {
                    if(data === null) {
                        LoggerService.log('Could not find: ' + resourceRelativePath);
                        resolve(null)
                    } 
    
                    resolve(data)
                }
            })
        });
        
    }
}

module.exports = ContentService