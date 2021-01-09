<h2>replaceAt&lt;T&gt;</h2>
<p>Immutably replaces an item at the specified index of the array</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>array</b></p>The array of items</td><td>T[]</td></tr><tr><td><p><b>index</b></p>The index of the item to replace; use a negative index to count from the end</td><td>number</td></tr><tr><td><p><b>item</b></p>The replacement item</td><td>T</td></tr></tbody>
    </table><p><b>Returns:</b> {T[]}</p>
<h4>Import</h4>

```
import { replaceAt } from '@paravano/utils';
```

  <h4>Examples</h4>




```    
const array = [7, 25, 21];

replaceAt(array, 1, 97)  //=> [7, 97, 21]
```

    