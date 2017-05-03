const Connection = require('./connection.js');
const promiseCallback = require('./helper').promiseCallback;

class poolConnection extends Connection {
    constructor(_connection) {
        super(_connection);
    }

    release() {
        return promiseCallback.apply(this.connection, ['release', arguments]);
    }

    destroy() {
        return promiseCallback.apply(this.connection, ['destroy', arguments]);
    }
}

module.exports = poolConnection;
