<h2>isNilOrEmpty</h2>
<p>Returns true if the value is null, undefined, or empty</p>
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
import { isNilOrEmpty } from '@paravano/utils';
```

  <h4>Examples</h4>




```    
isNilOrEmpty(null)             //=> true
isNilOrEmpty(undefined)        //=> true
isNilOrEmpty('')               //=> true
isNilOrEmpty([])               //=> true
isNilOrEmpty({})               //=> true
isNilOrEmpty('  ')             //=> false
isNilOrEmpty({x: 'x'})         //=> false
isNilOrEmpty([25])             //=> false
isNilOrEmpty(0)                //=> false
isNilOrEmpty(true)             //=> false
isNilOrEmpty(() => undefined)  //=> false
```

    