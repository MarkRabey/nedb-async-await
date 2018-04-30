const { Datastore } = require('..');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
import 'mocha';

chai.use(chaiAsPromised);
chai.should();

describe('Datastore', () => {
  const db = Datastore({ filename: 'test-data.json', autoload: true });

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
    it('responds with all records', async function() {
      const docs = await db.find({});
      docs.should.have.length(5);
    });
  });

  describe('findOne()', function() {
    it('responds with one matching record', async function() {
      const doc = await db.findOne({ number: 5 });
      doc.number.should.equal(5);
    });
  });
});
