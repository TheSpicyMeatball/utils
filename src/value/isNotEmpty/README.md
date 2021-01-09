<h2>isNotEmpty</h2>
<p>Returns true if the value is NOT empty</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>value</b></p>The value to check</td><td>*</td></tr></tbody>
    </table><p><b>Returns:</b> {boolean}</p>
<h4>Import</h4>

```
import { isNotEmpty } from '@paravano/utils';
```

  <h4>Examples</h4>




```    
isEmpty('')               //=> false
isEmpty([])               //=> false
isEmpty({})               //=> false
isEmpty('  ')             //=> true
isEmpty({x: 'x'})         //=> true
isEmpty([25])             //=> true
isEmpty(0)                //=> true
isEmpty(true)             //=> true
isEmpty(false)            //=> true
isEmpty(() => undefined)  //=> true
```

    