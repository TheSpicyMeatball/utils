<h2>symbols&lt;T = Record&lt;string, unknown&gt;&gt;</h2>
<p>Gets a string array of the object's own symbols</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>value</b></p>The object from which to get the symbols</td><td>T</td></tr></tbody>
    </table><p><b>Returns:</b> {symbol[]}</p>
<h4>Import</h4>

```
import { symbols } from '@paravano/utils';
```

  <h4>Examples</h4>




```    
keys({ [Symbol('my symbol')]: 'value' }) //=> [Symbol('my symbol')]
keys({})         //=> []
keys(null)       //=> []
keys(undefined)  //=> []
keys('')         //=> []
keys([])         //=> ['length']
```

    