<h2>pad&lt;T&gt;</h2>
<p>Immutably pads the array with {size} number of {item}</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>array</b></p>The original array</td><td>T[]</td></tr><tr><td><p><b>size</b></p>The size of the pad; if greater than zero, the padding will go to the end of the array; if less than zero, the padding will go to the front</td><td>number</td></tr><tr><td><p><b>item <span>(optional)</span></b></p>The item to put in each index of the array</td><td>T</td></tr></tbody>
    </table><p><b>Returns:</b> {T[]}</p>
<h4>Import</h4>

```
import { pad } from '@paravano/utils';
```

  <h4>Examples</h4>




```    
pad([1, 2, 3], 2) //=> [1, 2, 3, undefined, undefined]
pad([1, 2, 3], -2) //=> [undefined, undefined, 1, 2, 3]
pad([1, 2, 3], 1, 4) //=> [1, 2, 3, 4]
pad([1, 2, 3], -1, 0) //=> [0, 1, 2, 3]
```

    