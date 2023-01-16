const loadFile = require("../../filesystem/loadFile");
const LoggerService = require("../logger/logger.service");

const ContentService = {
    serveContent: (resourceRelativePath) => {
        LoggerService.trace('ContentService.serveContent', resourceRelativePath)

        if(resourceRelativePath[0] === '/')
            resourceRelativePath[0] = ''

        try {
            return loadFile(resourceRelativePath);
        } catch (e) {
            LoggerService.log('Could not find: ' + resourceRelativePath);
            return null;
        }
        
    }
}

module.exports = ContentService