<h2>trimEnd</h2>
<p>Trims the end of a string by whitespace (default), specified string, or array of possible strings</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th><th>Default</th></tr>
      </thead>
      <tbody><tr><td><p><b>value</b></p>The string to trim</td><td>string</td><td></td></tr><tr><td><p><b>trim <span>(optional)</span></b></p>The string or array of possible strings to trim from the end</td><td>string | string[]</td><td></td></tr><tr><td><p><b>multiline <span>(optional)</span></b></p>Whether or not the chars should be trimmed from the end of every line</td><td>boolean</td><td>false</td></tr></tbody>
    </table><p><b>Returns:</b> {string}</p>
<h4>Import</h4>

```
import { trimEnd } from '@paravano/utils';
```

  <h4>Examples</h4>




```
trimEnd('   The quick brown fox   ');
// => '   The quick brown fox'

trimEnd(' foxThe quick brown fox fox fox', ' fox');
// => ' foxThe quick brown'

trimEnd('  fox The quick brown   fox', ['fox', 'brown', ' ']);
// => '  fox The quick'
```

