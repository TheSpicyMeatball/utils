<h2>defaultEmptyTo&lt;T = any, TDefault = any&gt;</h2>
<p>Returns a default value if the original value is null, undefined, or empty</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>value</b></p>The value to check</td><td>T</td></tr><tr><td><p><b>-</b></p>The default value to return if {value} is null, undefined, or empty</td><td>TDefault</td></tr></tbody>
    </table><p><b>Returns:</b> {T | TDefault}</p>
<h4>Import</h4>

```
import { defaultEmptyTo } from '@paravano/utils';
```

  <h4>Examples</h4>




```    
defaultEmptyTo(null, 'default')              //=> 'default'
defaultEmptyTo(undefined, 'default')         //=> 'default'
defaultEmptyTo('', 'default')                //=> 'default'
defaultEmptyTo([], 'default')                //=> 'default'
defaultEmptyTo({}, 'default')                //=> 'default'
defaultEmptyTo('value', 'default')           //=> 'value'
defaultEmptyTo(['value'], 'default')         //=> ['value']
defaultEmptyTo({ key: 'value' }, 'default')  //=> { key: 'value' }
```

    