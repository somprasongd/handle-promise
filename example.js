const handlePromise = require('./index');

(async () => {
  const p1 = Promise.resolve('OK');  
  const { error: error1, result: result1 } = await handlePromise(p1);
  console.log(error1, result1);

  const p2 = Promise.reject(new Error('Test Error'));  
  const { error: error2, result: result2 } = await handlePromise(p2);
  if (error2) return console.log(error2.message);
  console.log(result2);
})();