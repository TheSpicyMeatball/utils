<h2>fill&lt;T&gt;</h2>
<p>Creates a new array of the specified size and fills each index with the item</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>size</b></p>The size of the new array</td><td>number</td></tr><tr><td><p><b>item <span>(optional)</span></b></p>The item to put in each index of the array</td><td>T</td></tr></tbody>
    </table><p><b>Returns:</b> {T[]}</p>
<h4>Import</h4>

```
import { fill } from '@paravano/utils';
```

  <h4>Examples</h4>




```
fill(5, 1) //=> [1, 1, 1, 1, 1]
fill(5) //=> [undefined, undefined, undefined, undefined, undefined]
```

