<h2>pipe&lt;T, TReturn&gt;</h2>
<p>Executes a queue of nested functions where the result of each function is fed as an argument into the subsequent function in the queue</p>
<p>Since v1.5.0</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>funcs</b></p>The function queue</td><td>...AnyFunction</td></tr></tbody>
    </table><p><b>Returns:</b> {(value?: T) =&gt; TReturn | T}</p><h4>Supporting Types</h4>

```
type AnyFunction<TArgs = unknown, TReturn = unknown> = (args?: TArgs) => TReturn;
```
<h4>Import</h4>

```
import { pipe, AnyFunction } from '@paravano/utils';
```

  <blockquote><p><code>AnyFunction</code> is a TypeScript type that can be imported only in TypeScript projects.</p></blockquote><h4>Examples</h4>




```    
const addOne = x => x + 1;
const addSeven = x => x + 7;
const timesNegativeOne = x => x * -1;

pipe(addOne, addSeven, timesNegativeOne, Math.abs)(25);
//=> 33
```

    