<h2>commaString</h2>
<p>Creates a comma separated number string</p>
<p>Since v1.11.0</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>value</b></p>The number from which to create a comma separated string</td><td>number</td></tr></tbody>
    </table><p><b>Returns:</b> {string}</p>
<h4>Import</h4>

```
import { commaString } from '@paravano/utils';
```

  <h4>Examples</h4>




```
commaString(1234567);
//=> '1,234,567'

commaString(1234.567);
//=> '1,234.567'
```

