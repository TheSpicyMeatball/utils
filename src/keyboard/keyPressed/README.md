<h2>keyPressed</h2>
<p>Verifies that at least one of the provided keys was pressed</p>
<p>Since v1.13.0</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>event</b></p>The keyboard event</td><td>KeyboardEvent</td></tr><tr><td><p><b>keys</b></p>The keys to check for</td><td>...Array&lt;string | number&gt;</td></tr></tbody>
    </table><p><b>Returns:</b> {boolean}</p>
<h4>Import</h4>

```
import { keyPressed } from '@paravano/utils';
```

  <h4>Examples</h4>




```
// Check for Enter key press
keyPressed(event, 'Enter');

// Check for Enter or Tab key press
keyPressed(event, 'Enter', 'Tab');
```

