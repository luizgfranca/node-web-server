const LoggerService = require("../logger/logger.service");
const { ContentRequestTableService } = require("./contentRequestTable.service");

const contentRequestTableService = new ContentRequestTableService();

const ContentService = {
    serveContent: (resourceRelativePath) => {
        LoggerService.trace('ContentService.serveContent', resourceRelativePath)

        return new Promise((resolve, _) => {

            if(resourceRelativePath[0] === '/')
                resourceRelativePath[0] = ''

            contentRequestTableService.postRequest(resourceRelativePath, (data) => {
                if(data === null) {
                    LoggerService.log('Could not find: ' + resourceRelativePath);
                    resolve(null)
                } 

                resolve(data)
            })
        });
        
    }
}

module.exports = ContentService