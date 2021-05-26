<h2>calcPerformance</h2>
<p>Calculates the execution time of a function in milliseconds</p>
<p>Since v1.7.0</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th><th>Default</th></tr>
      </thead>
      <tbody><tr><td><p><b>performance</b></p>The performance object; <blockquote>For use in the browser, simply pass in <code>performance</code> which is a native object; for use in NodeJS, use <code>import { performance } from 'perf_hooks';</code></blockquote></td><td>{ now: () =&gt; number }</td><td></td></tr><tr><td><p><b>n <span>(optional)</span></b></p>The number of times to execute the function; if greater than 1, the average time is returned</td><td>number</td><td>1</td></tr></tbody>
    </table><p><b>Returns:</b> {(func: AnyFunction, ...args: any[]) =&gt; number}</p><h4>Supporting Types</h4>

```
type AnyFunction<TArgs = unknown, TReturn = unknown> = (args?: TArgs) => TReturn;
```
<h4>Import</h4>

```
import { calcPerformance, AnyFunction } from '@paravano/utils';
```

  <blockquote><p><code>AnyFunction</code> is a TypeScript type that can be imported only in TypeScript projects.</p></blockquote><h4>Examples</h4>




```    
const addOne = x => x + 1;
calcPerformance(performance)(addOne, 25);

// exec 'addOne' 100 times and return the average
calcPerformance(performance, 100)(addOne, 25);
```

    