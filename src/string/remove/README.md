<h2>remove</h2>
<p>Removes a matching string or RegExp</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>original</b></p>The original string</td><td>string</td></tr><tr><td><p><b>match</b></p>The string or RegExp to match for removal</td><td>string | RegExp</td></tr></tbody>
    </table><p><b>Returns:</b> {string}</p>
<h4>Import</h4>

```
import { remove } from '@paravano/utils';
```

  <h4>Examples</h4>




```    
remove('The quick brown fox', 'quick ') //=> 'The brown fox'
remove(null, 'quick')                   //=> ''
```

    