<h2>any&lt;T&gt;</h2>
<p>Returns true if any value in {args} matches the {check}</p>
<p>Since v1.4.0</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>check</b></p>The condition to check for a match</td><td>(value: T) =&gt; boolean</td></tr><tr><td><p><b>args</b></p>The values to check</td><td>T[]</td></tr></tbody>
    </table><p><b>Returns:</b> {boolean}</p>
<h4>Import</h4>

```
import { any } from '@paravano/utils';
```

  <h4>Examples</h4>




```
any(value => value > 10, 25, 7) //=> true
any(value => value > 100, 25, 7) //=> false
```

