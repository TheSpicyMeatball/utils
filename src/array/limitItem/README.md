<h2>limitItem&lt;T&gt;</h2>
<p>Immutably inserts an item into the array if the occurrence of the item in the array has not reached the specified limit</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>array</b></p>The original array</td><td>T[]</td></tr><tr><td><p><b>limit</b></p>The maximum number of times the item can occur in the array</td><td>number</td></tr><tr><td><p><b>item</b></p>The item to insert</td><td>T</td></tr><tr><td><p><b>equalityComparer <span>(optional)</span></b></p>Optional means of determining if two items are equal or not; if omitted, a shallow comparison will be made</td><td>(item1: T, item2: T) =&gt; boolean</td></tr></tbody>
    </table><p><b>Returns:</b> {T[]}</p>
<h4>Import</h4>

```
import { limitItem } from '@paravano/utils';
```

  <h4>Examples</h4>




```
limitItem([0, 1, 2], 10, 2)     //=> [0, 1, 2, 2]
limitItem([0, 1, 2], 1, 2)     //=> [0, 1, 2]

// equalityComparer
const array = [{ id: 1, name: 'user' }, { id: 2, name: 'user' }];
const equalityComparer = (item1: T, item2: T) => item1.id === item2.id;

limitItem(array, 1, { id: 1, name: 'user' }, equalityComparer)
// => [{ id: 1, name: 'user' }, { id: 2, name: 'user' }]
```

