<h2>move&lt;T&gt;</h2>
<p>Immutably moves an item from one index to another</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>array</b></p>The original array</td><td>T[]</td></tr><tr><td><p><b>from</b></p>The index of the item to move</td><td>number</td></tr><tr><td><p><b>to</b></p>The index to move the item to</td><td>number</td></tr></tbody>
    </table><p><b>Returns:</b> {T[]}</p>
<h4>Import</h4>

```
import { move } from '@paravano/utils';
```

  <h4>Examples</h4>




```    
const array = [7, 25, 21, 42];

move(array, 0, 3)  //=> [25, 21, 42, 7]
move(array, 3, 0)  //=> [42, 7, 25, 21]
```

    