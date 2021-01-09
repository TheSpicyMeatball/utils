<h2>toggle&lt;T&gt;</h2>
<p>Immutably adds the item to the array if it's not already included; removes it if it's already included</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>array</b></p>The original array</td><td>T[]</td></tr><tr><td><p><b>item</b></p>The item to toggle</td><td>T</td></tr></tbody>
    </table><p><b>Returns:</b> {T[]}</p>
<h4>Import</h4>

```
import { toggle } from '@paravano/utils';
```

  <h4>Examples</h4>




```    
const array = [1, 2, 3];

toggle(array, 4)   //=> [1, 2, 3, 4]
toggle(array, 2)   //=> [1, 3]
```

    