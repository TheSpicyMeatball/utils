<h2>isNotNilOrEmpty</h2>
<p>Returns true if the value is NOT null, undefined, or empty</p>
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
import { isNotNilOrEmpty } from '@paravano/utils';
```

  <h4>Examples</h4>




```    
isNilOrEmpty(null)             //=> false
isNilOrEmpty(undefined)        //=> false
isNilOrEmpty('')               //=> false
isNilOrEmpty([])               //=> false
isNilOrEmpty({})               //=> false
isNilOrEmpty('  ')             //=> true
isNilOrEmpty({x: 'x'})         //=> true
isNilOrEmpty([25])             //=> true
isNilOrEmpty(0)                //=> true
isNilOrEmpty(true)             //=> true
isNilOrEmpty(() => undefined)  //=> true
```

    