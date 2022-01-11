<h2>toggle&lt;T, R&gt;</h2>
<p>Immutably adds the item to the array if it's not already included; removes it if it's already included</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>array</b></p>The original array</td><td>T[]</td></tr><tr><td><p><b>item</b></p>The item to toggle</td><td>T</td></tr><tr><td><p><b>reducer <span>(optional)</span></b></p>Optional function to take an array item and reduce it to a value that will be used as the basis for the toggle comparison</td><td>(item: T) =&gt; R</td></tr></tbody>
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



```
const array = [{ id: 1, value: 'a' }, { id: 2, value: 'b' }];
const reducer = x => x.id;

toggle(array, { id: 3, value: 'c' }, reducer);
//=> [{ id: 1, value: 'a' }, { id: 2, value: 'b' }, { id: 3, value: 'c' }]

toggle(array, { id: 1, value: 'a' }, reducer);
//=> [{ id: 2, value: 'b' }]
```

