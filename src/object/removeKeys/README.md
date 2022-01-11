<h2>removeKeys&lt;T = Record&lt;string, unknown&gt;&gt;</h2>
<p>Immutably removes a set of key from an object</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>obj</b></p>The original object</td><td>T</td></tr><tr><td><p><b>keys</b></p>An array of keys to remove</td><td>string[]</td></tr></tbody>
    </table><p><b>Returns:</b> {*}</p>
<h4>Import</h4>

```
import { removeKeys } from '@paravano/utils';
```

  <h4>Examples</h4>




```
const obj = { hello: 'world', hi: 'earth', hey: 'planet' };
removeKeys(obj, ['hi', 'hey']) //=> { hello: 'world' }
```

