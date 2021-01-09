<h2>sortReduceString</h2>
<p>Reduces an object's key value to a sortable string</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>key</b></p>The key or the path to the key in the object to reduce</td><td>string</td></tr><tr><td><p><b>caseSensitive</b></p>Whether or not the string should be returned as is or converted to lower case for string insensitive searches</td><td>boolean</td></tr></tbody>
    </table><p><b>Returns:</b> {&lt;T = Record&lt;string, unknown&gt;&gt;(obj: T) =&gt; string}</p>
<h4>Import</h4>

```
import { sortReduceString } from '@paravano/utils';
```

  <h4>Examples</h4>




```    
const obj = { name: 'Kermit the Frog' };

sortReduceString(obj)('name')
//=> 'kermit the frog'

sortReduceString('name', true)(obj)
//=> 'Kermit the Frog'

// Path to Key
const obj = { user: { name: 'Kermit the Frog' } };
sortReduceString('user.name')(obj)
//=> 'kermit the frog'
```

    