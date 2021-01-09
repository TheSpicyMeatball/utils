<h2>insertAt&lt;T&gt;</h2>
<p>Immutably inserts the item(s) at the specified index</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>array</b></p>The original array</td><td>T[]</td></tr><tr><td><p><b>index</b></p>The index of the array to start the insert; use negative value to index from the end of the array</td><td>number</td></tr><tr><td><p><b>items</b></p>The item(s) to insert</td><td>T[]</td></tr></tbody>
    </table><p><b>Returns:</b> {T[]}</p>
<h4>Import</h4>

```
import { insertAt } from '@paravano/utils';
```

  <h4>Examples</h4>




```    
insert([0, 1, 2], 1, [25])     //=> [0, 25, 1, 2]
insert([0, 1, 2], 1, [25, 26]) //=> [0, 25, 26, 1, 2]
insert([0, 1, 2], -2, [25])    //=> [0, 1, 25, 2]
insert([0, 1, 2], -5, [25])    //=> [25, undefined, 0, 1, 2]
```

    