<h2>iif&lt;TTrue, TFalse&gt;</h2>
<p>Performs an inline if and returns either {whenTrue} or {whenFalse}</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>condition</b></p>The condition to check</td><td>boolean</td></tr><tr><td><p><b>whenTrue</b></p>The value to return if the condition is true</td><td>TTrue</td></tr><tr><td><p><b>whenFalse</b></p>The value to return if the condition is false</td><td>TFalse</td></tr></tbody>
    </table><p><b>Returns:</b> {TTrue | TFalse}</p>
<h4>Import</h4>

```
import { iif } from '@paravano/utils';
```

  <h4>Examples</h4>




```    
iif(true, 25, 7) //=> 25
iif(false, 25, 7) //=> 7
```

    