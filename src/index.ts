import * as NeDB from 'nedb';
import * as thenify from 'thenify';

const createDatastore = (datastore: NeDB) => {
  const asyncDatastore: any = { nedb: datastore };
  const asyncMethods = [
    'loadDatabase',
    'insert',
    'find',
    'findOne',
    'count',
    'update',
    'remove',
    'ensureIndex',
    'removeIndex'
  ];

  asyncMethods.forEach(method => {
    asyncDatastore[method] = thenify(datastore[method].bind(datastore));
  });

  return asyncDatastore;
};

export const Datastore = (options: NeDB.DataStoreOptions) => {
  return createDatastore(new NeDB(options));
};
