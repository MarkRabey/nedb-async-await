const { Datastore } = require('..');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
import 'mocha';

chai.use(chaiAsPromised);
chai.should();

describe('Datastore', () => {
  const db = Datastore({ autoload: true });

  beforeEach(async function() {
    await db.remove({}, { multi: true });
    await db.insert([
      { number: 1, string: 'a' },
      { number: 2, string: 'b' },
      { number: 3, string: 'c' },
      { number: 4, string: 'd' },
      { number: 5, string: 'e' }
    ]);
  });

  describe('find()', function() {
    it('responds with matching records', async function() {
      const documents = await db.find({});
      documents.should.have.length(5);
    });
  });
});
