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
isNotEmpty('')               //=> false
isNotEmpty([])               //=> false
isNotEmpty({})               //=> false
isNotEmpty('  ')             //=> true
isNotEmpty({x: 'x'})         //=> true
isNotEmpty([25])             //=> true
isNotEmpty(0)                //=> true
isNotEmpty(true)             //=> true
isNotEmpty(false)            //=> true
isNotEmpty(() => undefined)  //=> true

// if ANY isNotEmpty:
isNotEmpty.any(undefined, null, '', [], {}, 'test') //=> true

// if ALL isNotEmpty:
isNotEmpty.all('test', 0, 1, ['test']) //=> true
```

