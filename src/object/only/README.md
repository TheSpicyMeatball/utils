<h2>only&lt;T = Record&lt;string, unknown&gt;&gt;</h2>
<p>Creates an object from another with only the specified keys</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>obj</b></p>The original object</td><td>T</td></tr><tr><td><p><b>keys</b></p>The keys of the object to keep</td><td>string[]</td></tr></tbody>
    </table><p><b>Returns:</b> {*}</p>
<h4>Import</h4>

```
import { only } from '@paravano/utils';
```

  <h4>Examples</h4>




```    
const obj = { hello: 'world', hi: 'earth', hola: 'mundo' };
only(obj, ['hello', 'hola'])
//=> { hello: 'world', hola: 'mundo' }
```

    