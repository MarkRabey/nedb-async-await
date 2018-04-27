"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NeDB = require("nedb");
var util_1 = require("util");
var createDatastore = function (datastore) {
    var asyncDatastore = { nedb: datastore };
    var asyncMethods = ['loadDatabase', 'insert', 'find', 'findOne', 'count', 'update', 'remove', 'ensureIndex', 'removeIndex'];
    asyncMethods.forEach(function (method) {
        asyncDatastore[method] = util_1.promisify(datastore[method].bind(datastore));
    });
    return asyncDatastore;
};
exports.Datastore = function (options) {
    return createDatastore(new NeDB(options));
};
