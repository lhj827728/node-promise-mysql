var Connection = require('./connection.js'),
    inherits = require('util').inherits,
    promiseCallback = require('./helper').promiseCallback;

var poolClusterConnection = function(_connection) {
    this.connection = _connection;

    Connection.call(this, null, _connection)
}

inherits(poolClusterConnection, Connection);

poolClusterConnection.prototype.release = function() {
    this.connection.release();
};

poolClusterConnection.prototype.destroy = function() {
    this.connection.destroy();
};

module.exports = poolClusterConnection;
