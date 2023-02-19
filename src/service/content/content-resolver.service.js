const loadFile = require("../../filesystem/loadFile")

class ContentResolverService {

    constructor() {
        this.table = {};
    }

    postRequest(relativePath, requestCallback) {
        if(!this.table[relativePath]) { 
            this.table[relativePath] = []; 

            setImmediate(() => { 
                loadFile(relativePath, (relativePath, data) => {
                    this.resolveRequest(relativePath, data)
                }) 
            })
        }

        this.table[relativePath].push(requestCallback);
    }

    resolveRequest(relativePath, data) {
        if(!this.table[relativePath])
            throw 'Invalid table mapping!'

        this.table[relativePath].forEach(requestCallback => {
            process.nextTick(() => requestCallback(data));
        });

        this.table[relativePath] = null;
    }

}

module.exports = { ContentResolverService }