<h2>initials</h2>
<p>Returns the person's initials</p>
<p>Since v1.10.0</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th><th>Default</th></tr>
      </thead>
      <tbody><tr><td><p><b>firstName</b></p>The first name</td><td>string</td><td></td></tr><tr><td><p><b>lastName</b></p>The lastName name</td><td>string</td><td></td></tr><tr><td><p><b>preferredFirstName <span>(optional)</span></b></p>The preferred first name</td><td>string</td><td>undefined</td></tr></tbody>
    </table><p><b>Returns:</b> {string}</p>
<h4>Import</h4>

```
import { initials } from '@paravano/utils';
```

  <h4>Examples</h4>




```
initials('Bruce', 'Wayne');
// => 'BW'

initials('clark', 'kent', 'superman');
// => 'SK'
```

