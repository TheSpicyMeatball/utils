<h2>get&lt;T = Record&lt;string, unknown&gt;, TReturn, TDefault&gt;</h2>
<p>Gets the value at the specified path of the object</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>obj</b></p>The original object</td><td>T</td></tr><tr><td><p><b>path</b></p>The path to the desired key</td><td>string</td></tr><tr><td><p><b>defaultValue</b></p>The default value to return if the resolved value is undefined</td><td>TDefault</td></tr></tbody>
    </table><p><b>Returns:</b> {TReturn | TDefault}</p>
<h4>Import</h4>

```
import { get } from '@paravano/utils';
```

  <h4>Examples</h4>




```
get({ a: { b: { c: 3 }, d: null } }, 'a.b.c', 'default')  => 3
get({ a: { b: { c: 3 }, d: null } }, 'a.b.d', 'default')  => 'default'
get({ a: { b: { c: 3 }, d: null } }, 'x.y.z', 'default')  => 'default'
```

