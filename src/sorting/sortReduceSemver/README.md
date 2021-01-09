<h2>sortReduceSemver</h2>
<p>Reduces an object's key value (Semver) to a sortable string</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th><th>Default</th></tr>
      </thead>
      <tbody><tr><td><p><b>key</b></p>The key in the object</td><td>string</td><td></td></tr><tr><td><p><b>seed <span>(optional)</span></b></p>A number to seed each major/minor/patch portion of the semver string to aid in the numeric sorting. You should never have to change this number unless one part of your version could be larger than the default.</td><td>number</td><td>100000</td></tr></tbody>
    </table><p><b>Returns:</b> {&lt;T = unknown&gt;(obj: T) =&gt; string} - The sorting function</p>
<h4>Import</h4>

```
import { sortReduceSemver } from '@paravano/utils';
```

  