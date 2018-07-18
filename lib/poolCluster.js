var mysql = require('mysql'),
    poolClusterConnection = require('./poolClusterConnection.js'),
    promiseCallback = require('./helper').promiseCallback;

var poolCluster = function() {
    this.poolCluster = mysql.createPoolCluster();
};

poolCluster.prototype.getConnection = function getConnection() {
    return promiseCallback.apply(this.poolCluster, ['getConnection', arguments])
    .then(function(con) {
        return new poolClusterConnection(con);
    });
};

poolCluster.prototype.add = function(name, config) {
    this.poolCluster.add(arguments);
};

poolCluster.prototype.remove = function(name) {
    return promiseCallback.apply(this.poolCluster, ['remove', arguments]);
};

poolCluster.prototype.query = function(sql, values) {
    return promiseCallback.apply(this.poolCluster.of(arguments), ['query', arguments]);
};

poolCluster.prototype.end = function(data) {
    return promiseCallback.apply(this.poolCluster, ['end', arguments]);
};

poolCluster.prototype.on = function(event, fn) {
    this.poolCluster.on(event, fn);
};

module.exports = poolCluster;
