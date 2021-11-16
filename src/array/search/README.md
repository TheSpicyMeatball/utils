<h2>search</h2>
<p>Searches an array of objects and returns the items that match the search</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>array</b></p>The array of items</td><td>T[]</td></tr></tbody>
    </table><p><b>Returns:</b> {T[]}</p>
<h4>Import</h4>

```
import { search } from '@paravano/utils';
```

  <h4>Examples</h4>




```    
const array = [7, 25, 21];

search(array)  //=> [21, 25, 7]
```

    