<h2>take&lt;T&gt;</h2>
<p>Gets the first or last specified number of items of an array</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>array</b></p>The original array</td><td>T[]</td></tr><tr><td><p><b>count</b></p>If positive, the number of items to take from the start of the array If negative, the number of items to take from the end of the array</td><td>number</td></tr></tbody>
    </table><p><b>Returns:</b> {T[]} The first/last items of the array</p>
<h4>Import</h4>

```
import { take } from '@paravano/utils';
```

  <h4>Examples</h4>




```    
const array = [1, 2, 3];

take(array, 2)   //=> [1, 2]
take(array, -2)  //=> [2, 3]
take(array, 25)  //=> [1, 2, 3]
```

    