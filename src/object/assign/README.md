<h2>assign&lt;T = Record&lt;string, unknown&gt;, TValues = Record&lt;string, unknown&gt;&gt;</h2>
<p>Immutably assigns or adds (if it doesn't exist) the specified key and value to the input object</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>obj</b></p>The object on which to assign the key</td><td>T</td></tr><tr><td><p><b>values</b></p>The object with values to assign to the original object</td><td>TValues</td></tr></tbody>
    </table><p><b>Returns:</b> {T | TValues | T &amp; TValues | object}</p>
<h4>Import</h4>

```
import { assign } from '@paravano/utils';
```

  <h4>Examples</h4>




```
assign({ x: 'x' }, { x: 'assign' }) //=> { x: 'assign' }
assign({ x: 'x' }, { y: 'assign' }) //=> { x: 'x', y: 'assign' }
assign({}, { x: 'assign' })         //=> { x: 'assign' }
assign(null, { x: 'assign' })       //=> { x: 'assign' }
assign([], { x: 'assign' })         //=> { x: 'assign' }
```

