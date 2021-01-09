<h2>splice&lt;T&gt;</h2>
<p>Immutably adds/removes items from within the array</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>array</b></p>The original array</td><td>T[]</td></tr><tr><td><p><b>start</b></p>The index to start the splice</td><td>number</td></tr><tr><td><p><b>deleteCount</b></p>The number of items to remove</td><td>number</td></tr><tr><td><p><b>items</b></p>The item(s) to add</td><td>...T[]</td></tr></tbody>
    </table><p><b>Returns:</b> {T[]}</p>
<h4>Import</h4>

```
import { splice } from '@paravano/utils';
```

  <h4>Examples</h4>




```    
const array = [7, 25, 21, 17, 42];

splice(array, 1, 1, 99, 98)
//=> [7, 99, 98, 21, 17, 42]
```

    