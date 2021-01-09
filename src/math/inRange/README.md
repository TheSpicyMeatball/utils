<h2>inRange</h2>
<p>Determines whether or not the value is within the numeric range</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>lower</b></p>The lower bound; by default this is considered inclusive</td><td>number | RangeBoundary</td></tr><tr><td><p><b>upper</b></p>The upper bound; by default this is considered exclusive</td><td>number | RangeBoundary</td></tr></tbody>
    </table><p><b>Returns:</b> {(value: number) =&gt; boolean}</p><h4>Supporting Types</h4>

```
type RangeBoundary = { bound: number, inclusive: boolean };
```
<h4>Import</h4>

```
import { inRange, RangeBoundary } from '@paravano/utils';
```

  <blockquote><p><code>RangeBoundary</code> is a TypeScript type that can only be imported in TypeScript projects. However, you can still 
pass in an object with the same shape to the <code>upper</code> and <code>lower</code> params for non-TypeScript usage.</p></blockquote><h4>Examples</h4>




```    
inRange(0, 9)(7)       //=> true
inRange(0, 9)(27)      //=> false
inRange(0.44, 1)(0.5)  //=> true
inRange(-100, 50)(0)   //=> true

// boundary
inRange(0, 50)(0)      //=> true
inRange(0, 50)(50)     //=> false

inRange({ bound: 0, inclusive: false }, { bound: 0, inclusive: true })(0)
//=> false

inRange({ bound: 0, inclusive: false }, { bound: 0, inclusive: true })(50)
//=> true
```

    