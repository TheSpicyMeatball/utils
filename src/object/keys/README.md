<h2>keys&lt;T = Record&lt;string, unknown&gt;&gt;</h2>
<p>Gets a string array of the object's own keys</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>value</b></p>The object from which to get the keys</td><td>T</td></tr></tbody>
    </table><p><b>Returns:</b> {string[]}</p>
<h4>Import</h4>

```
import { keys } from '@paravano/utils';
```

  <h4>Examples</h4>




```    
keys({ x: 'x' }) //=> ['x']
keys({})         //=> []
keys(null)       //=> []
keys(undefined)  //=> []
keys('')         //=> []
keys([])         //=> ['length']
```

    