<h2>sortReduceDate</h2>
<p>Reduces an object's key value (Date or string representation of a date) to a sortable string</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>key</b></p>The key in the object</td><td>string</td></tr><tr><td><p><b>depth <span>(optional)</span></b></p>Compare depth of time, h/m/s</td><td>&#39;h&#39; | &#39;m&#39; | &#39;s&#39;</td></tr></tbody>
    </table><p><b>Returns:</b> {&lt;T = Record&lt;string, unknown&gt;&gt;(obj: T) =&gt; string}</p>
<h4>Import</h4>

```
import { sortReduceDate } from '@paravano/utils';
```

  <h4>Examples</h4>




```
sortReduceDate('stamp')({ stamp: '03/20/2020' })
//=> '20200220'

sortReduceDate('stamp')({ stamp: new Date(2020, 9, 7) })
//=> '20200907'

sortReduceDate('stamp', 's')({ stamp: '2020-10-20T14:48:25.000' })
//=> '20200920144825'
```

