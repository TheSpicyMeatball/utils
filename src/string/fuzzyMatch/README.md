<h2>fuzzyMatch</h2>
<p>Determines if a string has a fuzzy match to given search terms</p>
<p>Since v1.10.0</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>value</b></p>The string to search</td><td>string</td></tr><tr><td><p><b>search</b></p>The search terms</td><td>string</td></tr></tbody>
    </table><p><b>Returns:</b> {boolean}</p>
<h4>Import</h4>

```
import { fuzzyMatch } from '@paravano/utils';
```

  <h4>Examples</h4>




```
fuzzyMatch('Superman', 'sman')
// => true

fuzzyMatch('Spiderman', 'sman')
// => true

fuzzyMatch('Batman', 'sman')
// => false
```

