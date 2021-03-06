var Connection = require('./lib/connection.js');
var Pool = require('./lib/pool.js');
var mysql = require('mysql');

exports.createConnection = function(config){
    return new Connection(config);
}

exports.createPool = function(config){
    return new Pool(config);
}

exports.Types = mysql.Types;
exports.escape = mysql.escape;
exports.escapeId = mysql.escapeId;
exports.format = mysql.format;
