const fs = require('fs')
const path = require('path');
const LoggerService = require('../service/logger/logger.service');

function loadFile(relativePath) {
    const absolutePath = path.resolve(__dirname, '..', '..', 'public', relativePath.replace('/', ''));
    LoggerService.debug('Loading file: ' + absolutePath)
    return fs.readFileSync(absolutePath);
}

module.exports = loadFile;