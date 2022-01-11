<h2>is</h2>
<p>Returns true if the type of value is the same as the provided type</p>
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
import { is } from '@paravano/utils';
```

  <h4>Examples</h4>




```
is('Hello world', 'string') //=> true
is({}, 'object')            //=> true
is(null, 'object')          //=> true
is(undefined, 'undefined')  //=> true
is(25, 'symbol')            //=> false
```

