<h2>or&lt;T&gt;</h2>
<p>Returns true if {value} has equality with any item in {args}</p>
<p>Since v1.4.0</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>value</b></p>The value to compare against</td><td>T</td></tr><tr><td><p><b>args</b></p>Known values to compare against {value}</td><td>*[]</td></tr></tbody>
    </table><p><b>Returns:</b> {boolean}</p>
<h4>Import</h4>

```
import { or } from '@paravano/utils';
```

  <h4>Examples</h4>




```    
or('item', 25, 7, 'item') //=> true
or('item', 25, 7, 'something') //=> false
```

    