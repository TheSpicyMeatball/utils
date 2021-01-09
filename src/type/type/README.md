<h2>type</h2>
<p>Returns a string representation of the type which also differentiates between 'object', 'array', 'date'</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>value</b></p>The value to check</td><td>*</td></tr></tbody>
    </table><p><b>Returns:</b> {string} The string representation of the type</p>
<h4>Import</h4>

```
import { type } from '@paravano/utils';
```

  <h4>Examples</h4>




```    
type({})                           //=> 'object'
type([])                           //=> 'array'
type('Hello world')                //=> 'string'
type(25)                           //=> 'number'
type(false)                        //=> 'boolean'
type(() => undefined)              //=> 'function'
type(Symbol('Hello symbol world')) //=> 'symbol'
```

    