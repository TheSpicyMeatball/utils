<h2>splitCamelCase</h2>
<p>Splits a camel-cased string apart and capitalizes each word</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>value</b></p>The camel-cased string to split</td><td>string</td></tr><tr><td><p><b>match</b></p>The string or RegExp to match for removal</td><td>string | RegExp</td></tr></tbody>
    </table><p><b>Returns:</b> {string}</p>
<h4>Import</h4>

```
import { splitCamelCase } from '@paravano/utils';
```

  <h4>Examples</h4>




```    
remove('TheQuickBrownFox') //=> 'The Quick Brown Fox'
remove('theQuickBrownFox') //=> 'The Quick Brown Fox'
```

    