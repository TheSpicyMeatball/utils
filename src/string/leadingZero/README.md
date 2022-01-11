<h2>leadingZero</h2>
<p>Adds a leading zero to a value if the value is less than 10</p>
<p>Since v1.9.0</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>value</b></p>The original value to possibly add a leading zero</td><td>string | number</td></tr></tbody>
    </table><p><b>Returns:</b> {string}</p>
<h4>Import</h4>

```
import { leadingZero } from '@paravano/utils';
```

  <h4>Examples</h4>




```
leadingZero(7)
//=> '07'

leadingZero(10)
//=> '10'
```

