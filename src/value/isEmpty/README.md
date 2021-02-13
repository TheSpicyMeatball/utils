<h2>isEmpty</h2>
<p>Returns true if the value is empty</p>
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
import { isEmpty } from '@paravano/utils';
```

  <h4>Examples</h4>




```    
isEmpty('')               //=> true
isEmpty([])               //=> true
isEmpty({})               //=> true
isEmpty('  ')             //=> false
isEmpty({x: 'x'})         //=> false
isEmpty([25])             //=> false
isEmpty(0)                //=> false
isEmpty(true)             //=> false
isEmpty(false)            //=> false
isEmpty(() => undefined)  //=> false

// if ANY isEmpty:
isEmpty.any('test', 0, 1, ['test'], null) //=> true

// if ALL isEmpty:
isEmpty.all(undefined, null, '', [], {})  //=> true
```

    