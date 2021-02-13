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
isNotNilOrEmpty(null)             //=> false
isNotNilOrEmpty(undefined)        //=> false
isNotNilOrEmpty('')               //=> false
isNotNilOrEmpty([])               //=> false
isNotNilOrEmpty({})               //=> false
isNotNilOrEmpty('  ')             //=> true
isNotNilOrEmpty({x: 'x'})         //=> true
isNotNilOrEmpty([25])             //=> true
isNotNilOrEmpty(0)                //=> true
isNotNilOrEmpty(true)             //=> true
isNotNilOrEmpty(() => undefined)  //=> true

// if ANY isNotNilOrEmpty:
isNotNilOrEmpty.any(null, undefined, '', [], {}, 'test')  //=> true

// if ALL isNotNilOrEmpty:
isNotNilOrEmpty.all('test', 0, 1, ['test'])  //=> true;
```

    