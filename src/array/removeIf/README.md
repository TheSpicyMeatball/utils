<h2>removeIf&lt;T&gt;</h2>
<p>Immutably removes an item or items based on the predicate</p>
<p>Since v1.12.0</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th><th>Default</th></tr>
      </thead>
      <tbody><tr><td><p><b>array</b></p>The array of items</td><td>T[]</td><td></td></tr><tr><td><p><b>predicate</b></p>Function that returns true if the item should be removed or false if it should not</td><td>(item: T) =&gt; boolean</td><td></td></tr><tr><td><p><b>all <span>(optional)</span></b></p>Whether or not all items matching the predicate should be removed or just the first match</td><td>boolean</td><td>false</td></tr></tbody>
    </table><p><b>Returns:</b> {T[]}</p>
<h4>Import</h4>

```
import { removeIf } from '@paravano/utils';
```

  <h4>Examples</h4>




```    
const array = [7, 25, 21];

removeIf(array, item => item > 20)  
//=> [7]

removeIf(array, item => item > 20, false)  
//=> [7, 21]
```

    