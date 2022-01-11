<h2>sortReduce</h2>
<p>Reduces to an object's key value for sorting</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>key</b></p>The key or the path to the key in the object to reduce</td><td>string</td></tr></tbody>
    </table><p><b>Returns:</b> {&lt;T = Record&lt;string, unknown&gt;&gt;(obj: T) =&gt; unknown}</p>
<h4>Import</h4>

```
import { sortReduce } from '@paravano/utils';
```

  <h4>Examples</h4>




```
sortReduce('count')({ count: 25 })
//=> 25
```

