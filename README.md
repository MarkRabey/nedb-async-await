# NeDB Async/Await

> Async/Await (Promise) Wrapper for [NeDB](https://github.com/louischatriot/nedb)

Getting Started
===

Install with: `npm install nedb-async-await`.

Usage
===

Example using `async` and `await`:

```js
import { Datastore } from "nedb-async-await";

async function doSomething() {
  const users = Datastore({
    filename:  'database.json',
    autoload: true
  });

  await users.insert([
    { _id: 1, name: 'John Doe' },
    { _id: 2, name: 'Jane Doe' },
  ]);

  let john = await users.findOne({ name: 'John Doe' });

  console.log(john);
  // { _id: 1, name: 'John Doe' }
}
```

More coming soon.
