<h2>removeAt&lt;T&gt;</h2>
<p>Immutably removes an item at the specified index of the array</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>array</b></p>The array of items</td><td>T[]</td></tr><tr><td><p><b>indexes</b></p>The index(es) of the item(s) to remove; use a negative index to count from the end</td><td>...number</td></tr></tbody>
    </table><p><b>Returns:</b> {T[]}</p>
<h4>Import</h4>

```
import { removeAt } from '@paravano/utils';
```

  <h4>Examples</h4>




```
const array = [7, 5, 21];

removeAt(array, 1)  //=> [7, 21]
removeAt(array, -1)  //=> [7, 5]

// remove multiple items
removeAt(array, 1, 2)  //=> [7]
removeAt(array, -1, 0)  //=> [5]
```

