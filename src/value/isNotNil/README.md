<h2>isNotNil</h2>
<p>Returns true if the value is NOT null or undefined</p>
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
import { isNotNil } from '@paravano/utils';
```

  <h4>Examples</h4>




```    
isNill(null)       //=> false
isNill(undefined)  //=> false
isNill('')         //=> true
isNill([])         //=> true
isNill({})         //=> true
```

    