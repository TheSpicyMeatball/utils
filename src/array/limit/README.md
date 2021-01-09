<h2>limit&lt;T&gt;</h2>
<p>Immutably inserts an item into the array if the size of the array has not reached the specified limit</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>array</b></p>The original array</td><td>T[]</td></tr><tr><td><p><b>limit</b></p>The size limit of the array</td><td>number</td></tr><tr><td><p><b>item</b></p>The item to insert</td><td>T</td></tr></tbody>
    </table><p><b>Returns:</b> {T[]}</p>
<h4>Import</h4>

```
import { limit } from '@paravano/utils';
```

  <h4>Examples</h4>




```    
limit([0, 1, 2], 10, 3)  //=> [0, 1, 2, 3]
limit([0, 1, 2], 3, 3)   //=> [0, 1, 2]
```

    