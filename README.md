# handle-promise

Promise handler function that return fulfilled promise with { error, result }.

## Install

```npm
npm i handle-promise
```

## How to use

```javascript
const handlePromise = require("handle-promise");

(async () => {
  const p1 = Promise.resolve("OK");
  const { error: error1, result: result1 } = await handlePromise(p1);
  console.log(error1, result1); // undefined 'OK'

  const p2 = Promise.reject(new Error("Test Error"));
  const { error: error2, result: result2 } = await handlePromise(p2);
  if (error2) return console.log(error2.message); // Test Error
  console.log(result2);
})();
```
