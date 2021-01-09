<h2>first&lt;T, TDefault&gt;</h2>
<p>Gets the first item of an array</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>array</b></p>The array of items</td><td>T[]</td></tr><tr><td><p><b>defaultValue <span>(optional)</span></b></p>The default value if the item is null or undefined</td><td>TDefault</td></tr></tbody>
    </table><p><b>Returns:</b> {T | TDefault}</p>
<h4>Import</h4>

```
import { first } from '@paravano/utils';
```

  <h4>Examples</h4>




```    
const array = [7, 25, 21, 17, 42];

first(array)              //=> 7
first([], 'default')      //=> 'default'
first([null], 'default')  //=> 'default'
```

    