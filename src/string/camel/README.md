<h2>camel</h2>
<p>Converts the string to camel case</p>
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
import { camel } from '@paravano/utils';
```

  <h4>Examples</h4>




```
camel('Hello World')        //=> 'helloWorld'
camel('-%^-hello-world--')  //=> 'helloWorld'
camel('$@__HELLO+WORLD__')  //=> 'helloWorld'
camel('2Hello 7world')      //=> 'hello7World'
```

