<h2>search</h2>
<p>Searches an array of objects and returns the items that match the search</p>
<p>Since v1.14.0</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>array</b></p>The array of items</td><td>T[]</td></tr><tr><td><p><b>search</b></p>The search term or array of search terms</td><td>string | string[]</td></tr><tr><td><p><b>options</b></p>The optional different configuration options that can be used to customize the search</td><td>SearchOptions</td></tr></tbody>
    </table><p><b>Returns:</b> {T[]}</p>
<h4>Import</h4>

```
import { search } from '@paravano/utils';
```

  <h4>Examples</h4>




```    
const array = [
  { name: 'John Doe', address: '123 Sesame Street', amount: 1000 },
  { name: 'Jane Doe', address: '456 Walnut Street', amount: 500 },
];

search(array, 'joh', { keys: ['name'], caseSensitive: false })  //=> [{ name: 'John Doe', address: '123 Sesame Street', amount: 1000 }]
```

    