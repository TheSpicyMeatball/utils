<h2>has&lt;T = Record&lt;string, unknown&gt;&gt;</h2>
<p>Checks if the path is a direct property of obj</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>obj</b></p>The original object</td><td>T</td></tr><tr><td><p><b>path</b></p>The path to the desired key</td><td>string</td></tr></tbody>
    </table><p><b>Returns:</b> {boolean}</p>
<h4>Import</h4>

```
import { has } from '@paravano/utils';
```

  <h4>Examples</h4>




```
has({ a: { b: { c: 3 }, d: null } }, 'a.b.c')  => true
has({ a: { b: { c: 3 }, d: null } }, 'a.b.d')  => false
has({ a: { b: { c: 3 }, d: null } }, 'x.y.z')  => false
```

