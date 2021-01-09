<h2>kebab</h2>
<p>Converts the string to kebab case</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>original</b></p>The original string</td><td>string</td></tr></tbody>
    </table><p><b>Returns:</b> {string}</p>
<h4>Import</h4>

```
import { kebab } from '@paravano/utils';
```

  <h4>Examples</h4>




```    
kebab('Hello World')        //=> 'hello-world'
kebab('-%^-hello-world--')  //=> 'hello-world'
kebab('$@__HELLO+WORLD__')  //=> 'hello-world'
kebab('2Hello 7world')      //=> 'hello-7-world'
```

    