<h2>sortKeys&lt;T = Record&lt;string, unknown&gt;&gt;</h2>
<p>Immutably sorts the object keys</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>obj</b></p>The original object</td><td>T</td></tr></tbody>
    </table><p><b>Returns:</b> {T}</p>
<h4>Import</h4>

```
import { sortKeys } from '@paravano/utils';
```

  <h4>Examples</h4>




```    
const obj = { hamster: true, frog: false, cow: false };
sortKeys(obj) //=> { cow: false, frog: false, hamster: true }
```

    