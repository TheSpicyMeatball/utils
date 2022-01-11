<h2>count&lt;T&gt;</h2>
<p>Counts the number of items that match the condition</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>array</b></p>The array of items</td><td>T[]</td></tr><tr><td><p><b>predicate</b></p>The predicate to determine if an item in the array is a match</td><td>(item: T) =&gt; boolean</td></tr></tbody>
    </table><p><b>Returns:</b> {number}</p>
<h4>Import</h4>

```
import { count } from '@paravano/utils';
```

  <h4>Examples</h4>




```
const array = [7, 25, 21, 17, 42];

count(array, item => item >= 25 )  //=> 2
```

