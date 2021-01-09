[![Build Status](https://travis-ci.com/TheSpicyMeatball/utils.svg?branch=main)](https://travis-ci.com/TheSpicyMeatball/utils)
[![Coverage Status](https://coveralls.io/repos/github/TheSpicyMeatball/utils/badge.svg?branch=main)](https://coveralls.io/github/TheSpicyMeatball/utils?branch=main)
[![dependencies Status](https://status.david-dm.org/gh/TheSpicyMeatball/utils.svg)](https://david-dm.org/TheSpicyMeatball/utils)
[![npm version](https://badge.fury.io/js/utils.svg)](https://badge.fury.io/js/utils)

# @paravano/utils

<p>This library contains es5 and es6 implementations in the deliverable and is fully tree-shakable for es6. Simply import your utils as named imports like this:</p>

```
import { isNilOrEmpty, take } from '@paravano/utils';
```

<p><b>Version:</b> 0.0.1</p>

> Click on each function name for details and examples



<h2>Array</h2>
<table>
    <thead>
    <tr>
      <th>Function</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/at/README.md">at</a></td><td>Gets the item at the specified index of an array</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/count/README.md">count</a></td><td>Counts the number of items that match the condition</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/drop/README.md">drop</a></td><td>Immutably drops the first or last specified number of items of an array</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/fill/README.md">fill</a></td><td>Creates a new array of the specified size and fills each index with the item</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/findIndexes/README.md">findIndexes</a></td><td>Finds the indexes of an array that match the predicate</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/findLastIndex/README.md">findLastIndex</a></td><td>Finds the last index in an array that matches the predicate</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/first/README.md">first</a></td><td>Gets the first item of an array</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/insertAt/README.md">insertAt</a></td><td>Immutably inserts the item(s) at the specified index</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/last/README.md">last</a></td><td>Gets the last item of an array</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/limit/README.md">limit</a></td><td>Immutably inserts an item into the array if the size of the array has not reached the specified limit</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/limitItem/README.md">limitItem</a></td><td>Immutably inserts an item into the array if the occurrence of the item in the array has not reached the specified limit</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/move/README.md">move</a></td><td>Immutably moves an item from one index to another</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/pad/README.md">pad</a></td><td>Immutably pads the array with {size} number of {item}</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/pluck/README.md">pluck</a></td><td>Gets an array of items given a set of indexes</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/removeAt/README.md">removeAt</a></td><td>Immutably removes an item at the specified index of the array</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/replaceAt/README.md">replaceAt</a></td><td>Immutably replaces an item at the specified index of the array</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/reverse/README.md">reverse</a></td><td>Immutably reverse an array</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/splice/README.md">splice</a></td><td>Immutably adds/removes items from within the array</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/take/README.md">take</a></td><td>Gets the first or last specified number of items of an array</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/toggle/README.md">toggle</a></td><td>Immutably adds the item to the array if it's not already included; removes it if it's already included</td></tr></tbody>
  </table>

<h2>Logic</h2>
<table>
    <thead>
    <tr>
      <th>Function</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/logic/iif/README.md">iif</a></td><td>Performs an inline if and returns either {whenTrue} or {whenFalse}</td></tr></tbody>
  </table>

<h2>Math</h2>
<table>
    <thead>
    <tr>
      <th>Function</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/math/inRange/README.md">inRange</a></td><td>Determines whether or not the value is within the numeric range</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/math/round/README.md">round</a></td><td>Rounds a number to a maximum specified number of significant digits</td></tr></tbody>
  </table>

<h2>Object</h2>
<table>
    <thead>
    <tr>
      <th>Function</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/object/assign/README.md">assign</a></td><td>Immutably assigns or adds (if it doesn't exist) the specified key and value to the input object</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/object/get/README.md">get</a></td><td>Gets the value at the specified path of the object</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/object/has/README.md">has</a></td><td>Checks if the path is a direct property of obj</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/object/keys/README.md">keys</a></td><td>Gets a string array of the object's own keys</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/object/only/README.md">only</a></td><td>Creates an object from another with only the specified keys</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/object/removeKeys/README.md">removeKeys</a></td><td>Immutably removes a set of key from an object</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/object/sortKeys/README.md">sortKeys</a></td><td>Immutably sorts the object keys</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/object/symbols/README.md">symbols</a></td><td>Gets a string array of the object's own symbols</td></tr></tbody>
  </table>

<h2>Sorting</h2>
<table>
    <thead>
    <tr>
      <th>Function</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/sorting/sortReduce/README.md">sortReduce</a></td><td>Reduces to an object's key value for sorting</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/sorting/sortReduceDate/README.md">sortReduceDate</a></td><td>Reduces an object's key value (Date or string representation of a date) to a sortable string</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/sorting/sortReduceSemver/README.md">sortReduceSemver</a></td><td>Reduces an object's key value (Semver) to a sortable string</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/sorting/sortReduceString/README.md">sortReduceString</a></td><td>Reduces an object's key value to a sortable string</td></tr></tbody>
  </table>

<h2>String</h2>
<table>
    <thead>
    <tr>
      <th>Function</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/string/camel/README.md">camel</a></td><td>Converts the string to camel case</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/string/capitalize/README.md">capitalize</a></td><td>Capitalizes every word in the string</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/string/kebab/README.md">kebab</a></td><td>Converts the string to kebab case</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/string/remove/README.md">remove</a></td><td>Removes a matching string or RegExp</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/string/splitCamelCase/README.md">splitCamelCase</a></td><td>Splits a camel-cased string apart and capitalizes each word</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/string/trim/README.md">trim</a></td><td>Trims the start and the end of a string by whitespace (default), specified string, or array of possible strings</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/string/trimEnd/README.md">trimEnd</a></td><td>Trims the end of a string by whitespace (default), specified string, or array of possible strings</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/string/trimStart/README.md">trimStart</a></td><td>Trims the start of a string by whitespace (default), specified string, or array of possible strings</td></tr></tbody>
  </table>

<h2>Type</h2>
<table>
    <thead>
    <tr>
      <th>Function</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/type/is/README.md">is</a></td><td>Returns true if the type of value is the same as the provided type</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/type/isArray/README.md">isArray</a></td><td>Returns true if the value is an array</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/type/isBoolean/README.md">isBoolean</a></td><td>Returns true if the value is a boolean</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/type/isDate/README.md">isDate</a></td><td>Returns true if the value is an instance of Date</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/type/isFunction/README.md">isFunction</a></td><td>Returns true if the value is a function</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/type/isNumber/README.md">isNumber</a></td><td>Returns true if the value is a number</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/type/isObject/README.md">isObject</a></td><td>Returns true if the value is an object</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/type/isString/README.md">isString</a></td><td>Returns true if the value is a string</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/type/isSymbol/README.md">isSymbol</a></td><td>Returns true if the value is a symbol</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/type/type/README.md">type</a></td><td>Returns a string representation of the type which also differentiates between 'object', 'array', 'date'</td></tr></tbody>
  </table>

<h2>Value</h2>
<table>
    <thead>
    <tr>
      <th>Function</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/value/defaultEmptyTo/README.md">defaultEmptyTo</a></td><td>Returns a default value if the original value is null, undefined, or empty</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/value/defaultTo/README.md">defaultTo</a></td><td>Returns a default value if the original value is null or undefined</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/value/isEmpty/README.md">isEmpty</a></td><td>Returns true if the value is empty</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/value/isNil/README.md">isNil</a></td><td>Returns true if the value is null or undefined</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/value/isNilOrEmpty/README.md">isNilOrEmpty</a></td><td>Returns true if the value is null, undefined, or empty</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/value/isNotEmpty/README.md">isNotEmpty</a></td><td>Returns true if the value is NOT empty</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/value/isNotNil/README.md">isNotNil</a></td><td>Returns true if the value is NOT null or undefined</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/value/isNotNilOrEmpty/README.md">isNotNilOrEmpty</a></td><td>Returns true if the value is NOT null, undefined, or empty</td></tr></tbody>
  </table>

<a href="#license"></a>
<h2>License</h2>

MIT


<a href="#author"></a>
<h2>Author</h2>
Michael Paravano




<a href="#dependencies"></a>
<h2>Dependencies</h2>



None
