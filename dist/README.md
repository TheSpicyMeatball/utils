[![Build Status](https://travis-ci.com/TheSpicyMeatball/utils.svg?branch=main)](https://travis-ci.com/TheSpicyMeatball/utils)
[![Coverage Status](https://coveralls.io/repos/github/TheSpicyMeatball/utils/badge.svg?branch=main)](https://coveralls.io/github/TheSpicyMeatball/utils?branch=main)

# @paravano/utils

<p>This library contains es5 and es6 implementations in the deliverable and is fully tree-shakable for es6. Simply import your utils as named imports like this:</p>

```
import { isNilOrEmpty, take } from '@paravano/utils';
```

<p><b>Version:</b> 1.14.0</p>

> Click on each function name for details and examples



<h2>Array</h2>
<table>
    <thead>
    <tr>
      <th>Function</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/at/README.md">at</a></td><td>Gets the item at the specified index of an array</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/count/README.md">count</a></td><td>Counts the number of items that match the condition</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/drop/README.md">drop</a></td><td>Immutably drops the first or last specified number of items of an array</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/fill/README.md">fill</a></td><td>Creates a new array of the specified size and fills each index with the item</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/findIndexes/README.md">findIndexes</a></td><td>Finds the indexes of an array that match the predicate</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/findLastIndex/README.md">findLastIndex</a></td><td>Finds the last index in an array that matches the predicate</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/first/README.md">first</a></td><td>Gets the first item of an array</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/insertAt/README.md">insertAt</a></td><td>Immutably inserts the item(s) at the specified index</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/last/README.md">last</a></td><td>Gets the last item of an array</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/limit/README.md">limit</a></td><td>Immutably inserts an item into the array if the size of the array has not reached the specified limit</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/limitItem/README.md">limitItem</a></td><td>Immutably inserts an item into the array if the occurrence of the item in the array has not reached the specified limit</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/move/README.md">move</a></td><td>Immutably moves an item from one index to another</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/pad/README.md">pad</a></td><td>Immutably pads the array with {size} number of {item}</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/pluck/README.md">pluck</a></td><td>Gets an array of items given a set of indexes</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/removeAt/README.md">removeAt</a></td><td>Immutably removes an item at the specified index of the array</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/removeIf/README.md">removeIf</a></td><td>Immutably removes an item or items based on the predicate</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/replaceAt/README.md">replaceAt</a></td><td>Immutably replaces an item at the specified index of the array</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/replaceIf/README.md">replaceIf</a></td><td>Immutably replaces an item or items based on the predicate</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/reverse/README.md">reverse</a></td><td>Immutably reverse an array</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/search/README.md">search</a></td><td>Searches an array of objects and returns the items that match the search</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/splice/README.md">splice</a></td><td>Immutably adds/removes items from within the array</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/take/README.md">take</a></td><td>Gets the first or last specified number of items of an array</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/array/toggle/README.md">toggle</a></td><td>Immutably adds the item to the array if it's not already included; removes it if it's already included</td></tr></tbody>
  </table>

<h2>Function</h2>
<table>
    <thead>
    <tr>
      <th>Function</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/function/executionTime/README.md">executionTime</a></td><td>Calculates the execution time of a function in milliseconds</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/function/pipe/README.md">pipe</a></td><td>Executes a queue of nested functions where the result of each function is fed as an argument into the subsequent function in the queue</td></tr></tbody>
  </table>

<h2>Keyboard</h2>
<table>
    <thead>
    <tr>
      <th>Function</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/keyboard/altKeyPressed/README.md">altKeyPressed</a></td><td>Verifies that the Alt key was pressed</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/keyboard/backspaceKeyPressed/README.md">backspaceKeyPressed</a></td><td>Verifies that the Backspace key was pressed</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/keyboard/ctrlKeyPressed/README.md">ctrlKeyPressed</a></td><td>Verifies that the Ctrl key was pressed</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/keyboard/deleteKeyPressed/README.md">deleteKeyPressed</a></td><td>Verifies that the Delete key was pressed</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/keyboard/downKeyPressed/README.md">downKeyPressed</a></td><td>Verifies that the down arrow key was pressed</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/keyboard/enterKeyPressed/README.md">enterKeyPressed</a></td><td>Verifies that the Enter key was pressed</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/keyboard/escKeyPressed/README.md">escKeyPressed</a></td><td>Verifies that the Escape key was pressed</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/keyboard/insertKeyPressed/README.md">insertKeyPressed</a></td><td>Verifies that the Insert key was pressed</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/keyboard/keyPressed/README.md">keyPressed</a></td><td>Verifies that at least one of the provided keys was pressed</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/keyboard/leftKeyPressed/README.md">leftKeyPressed</a></td><td>Verifies that the left arrow key was pressed</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/keyboard/rightKeyPressed/README.md">rightKeyPressed</a></td><td>Verifies that the right arrow key was pressed</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/keyboard/shiftKeyPressed/README.md">shiftKeyPressed</a></td><td>Verifies that the Shift key was pressed</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/keyboard/spaceKeyPressed/README.md">spaceKeyPressed</a></td><td>Verifies that the Space key was pressed</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/keyboard/tabKeyPressed/README.md">tabKeyPressed</a></td><td>Verifies that the Tab key was pressed</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/keyboard/upKeyPressed/README.md">upKeyPressed</a></td><td>Verifies that the up arrow key was pressed</td></tr></tbody>
  </table>

<h2>Logic</h2>
<table>
    <thead>
    <tr>
      <th>Function</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/logic/all/README.md">all</a></td><td>Returns true if all values in {args} match the {check}</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/logic/any/README.md">any</a></td><td>Returns true if any value in {args} matches the {check}</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/logic/iif/README.md">iif</a></td><td>Performs an inline if and returns either {whenTrue} or {whenFalse}</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/logic/or/README.md">or</a></td><td>Returns true if {value} has equality with any item in {args}</td></tr></tbody>
  </table>

<h2>Number</h2>
<table>
    <thead>
    <tr>
      <th>Function</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/number/commaString/README.md">commaString</a></td><td>Creates a comma separated number string</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/number/range/README.md">range</a></td><td>Determines whether or not the value is within the numeric range</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/number/round/README.md">round</a></td><td>Rounds a number to a maximum specified number of significant digits</td></tr></tbody>
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
    <tbody><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/string/camel/README.md">camel</a></td><td>Converts the string to camel case</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/string/capitalize/README.md">capitalize</a></td><td>Capitalizes every word in the string</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/string/fuzzyMatch/README.md">fuzzyMatch</a></td><td>Determines if a string has a fuzzy match to given search terms</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/string/initials/README.md">initials</a></td><td>Returns the person's initials</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/string/kebab/README.md">kebab</a></td><td>Converts the string to kebab case</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/string/leadingZero/README.md">leadingZero</a></td><td>Adds a leading zero to a value if the value is less than 10</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/string/remove/README.md">remove</a></td><td>Removes a matching string or RegExp</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/string/splitCamelCase/README.md">splitCamelCase</a></td><td>Splits a camel-cased string apart and capitalizes each word</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/string/trim/README.md">trim</a></td><td>Trims the start and the end of a string by whitespace (default), specified string, or array of possible strings</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/string/trimEnd/README.md">trimEnd</a></td><td>Trims the end of a string by whitespace (default), specified string, or array of possible strings</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/utils/tree/main/src/string/trimStart/README.md">trimStart</a></td><td>Trims the start of a string by whitespace (default), specified string, or array of possible strings</td></tr></tbody>
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
