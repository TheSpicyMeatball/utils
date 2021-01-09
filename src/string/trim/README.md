<h2>trim</h2>
<p>Trims the start and the end of a string by whitespace (default), specified string, or array of possible strings</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th><th>Default</th></tr>
      </thead>
      <tbody><tr><td><p><b>value</b></p>The string to trim</td><td>string</td><td></td></tr><tr><td><p><b>trim <span>(optional)</span></b></p>The string or array of possible strings to trim from the start and end</td><td>string | string[]</td><td></td></tr><tr><td><p><b>multiline <span>(optional)</span></b></p>Whether or not the chars should be trimmed from the start and end of every line</td><td>boolean</td><td>false</td></tr></tbody>
    </table><p><b>Returns:</b> {string}</p>
<h4>Import</h4>

```
import { trim } from '@paravano/utils';
```

  <h4>Examples</h4>




```    
trim('   The quick brown fox    ');
// => 'The quick brown fox'

trim(' foxThe quick brown fox fox fox', ' fox');
// => 'The quick brown'

trim('  fox The quick brown   fox', ['fox', 'brown', ' ']);
// => 'The quick'
```

    