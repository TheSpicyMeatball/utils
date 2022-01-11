<h2>defaultTo&lt;T = any, TDefault = any&gt;</h2>
<p>Returns a default value if the original value is null or undefined</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>value</b></p>The value to check</td><td>T</td></tr><tr><td><p><b>-</b></p>The default value to return if {value} is null or undefined</td><td>TDefault</td></tr></tbody>
    </table><p><b>Returns:</b> {T | TDefault}</p>
<h4>Import</h4>

```
import { defaultTo } from '@paravano/utils';
```

  <h4>Examples</h4>




```
defaultTo('value', 'default')     //=> 'value'
defaultTo('', 'default')          //=> ''
defaultTo(undefined, 'default')   //=> 'default'
defaultTo(undefined, 'default')   //=> 'default'
```

