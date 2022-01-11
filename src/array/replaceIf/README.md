<h2>replaceIf&lt;T&gt;</h2>
<p>Immutably replaces an item or items based on the predicate</p>
<p>Since v1.11.0</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th><th>Default</th></tr>
      </thead>
      <tbody><tr><td><p><b>array</b></p>The array of items</td><td>T[]</td><td></td></tr><tr><td><p><b>predicate</b></p>Function that returns true if the item should be replaced or false if it should not</td><td>(item: T) =&gt; boolean</td><td></td></tr><tr><td><p><b>item</b></p>The replacement item</td><td>T</td><td></td></tr><tr><td><p><b>all <span>(optional)</span></b></p>Whether or not all items matching the predicate should be replaced or just the first match</td><td>boolean</td><td>true</td></tr></tbody>
    </table><p><b>Returns:</b> {T[]}</p>
<h4>Import</h4>

```
import { replaceIf } from '@paravano/utils';
```

  <h4>Examples</h4>




```
const array = [7, 25, 21];

replaceIf(array, item => item > 20, 97)  
//=> [7, 97, 97]

replaceIf(array, item => item > 20, 97, false)  
//=> [7, 97, 21]
```

