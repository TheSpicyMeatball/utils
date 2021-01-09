<h2>round</h2>
<p>Rounds a number to a maximum specified number of significant digits</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>value</b></p>The value to round</td><td>number</td></tr><tr><td><p><b>values</b></p>The maximum number of significant digits to display (e.g. '0' would round to a whole number, '2' would round to at most two decimal places)</td><td>TValues</td></tr></tbody>
    </table><p><b>Returns:</b> {number}</p>
<h4>Import</h4>

```
import { round } from '@paravano/utils';
```

  <h4>Examples</h4>




```    
round(0.4, 0)    //=> 0
round(0.5, 0)    //=> 1
round(0.44, 1)   //=> 0.4
round(0.44, -1)  //=> 0.4
round(0.45, 1)   //=> 0.5
round(0.411, 2)  //=> 0.41
round(0.499, 2)  //=> 0.5
round(0.999, 2)  //=> 1
```

    