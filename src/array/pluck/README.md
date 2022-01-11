<h2>pluck&lt;T&gt;</h2>
<p>Gets an array of items given a set of indexes</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>array</b></p>The array to pluck</td><td>T[]</td></tr><tr><td><p><b>indexes</b></p>The indexes of items to pluck</td><td>number[]</td></tr></tbody>
    </table><p><b>Returns:</b> {T[]}</p>
<h4>Import</h4>

```
import { pluck } from '@paravano/utils';
```

  <h4>Examples</h4>




```
const array = ['a', 'b', 'c'];

pluck(array, [0, 2])      //=> ['a', 'c']
pluck(array, [0, 2, 17])  //=> ['a', 'c', undefined]

pluck(array, [])          //=> []
pluck([], [0, 2])         //=> [undefined, undefined]
pluck(null, [0, 2])       //=> [undefined, undefined]
pluck(undefined, [0, 2])  //=> [undefined, undefined]
```

