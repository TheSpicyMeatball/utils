<h2>at&lt;T, TDefault&gt;</h2>
<p>Gets the item at the specified index of an array</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>array</b></p>The array to check</td><td>T[]</td></tr><tr><td><p><b>index</b></p>The index of the array to get; use a negative value to count from the end of the array</td><td>number</td></tr><tr><td><p><b>defaultValue</b></p>The value to return if there is no value at the specified index</td><td>TDefault</td></tr></tbody>
    </table><p><b>Returns:</b> {T | TDefault}</p>
<h4>Import</h4>

```
import { at } from '@paravano/utils';
```

  <h4>Examples</h4>




```    
at([0, 1, 2], 1, 'default') //=> 1
at([0, 1, 2], 25, 'default') //=> default
```

    