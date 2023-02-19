const EventEmitter = require('events');
const { ContentResolverService } = require('../service/content/content-resolver.service');

const contentEvents = new EventEmitter()
const contentResolverService = new ContentResolverService()

contentEvents.on('content::request', ({path, callback}) => {
    contentResolverService.postRequest(path, callback)
})

function postRequest({path, callback}) {
    contentEvents.emit('content::request', {path, callback})
}

module.exports = { postRequest }; 