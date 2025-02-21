const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  someAsyncFunction().then(() => {
    res.send('Hello, world!');
  }).catch(err => {
    // Error handling is done here, but the response is not sent to the client
    console.error(err);
  });
});

function someAsyncFunction() {
  return new Promise((resolve, reject) => {
    // Simulate a failure condition
    const shouldFail = Math.random() < 0.5; // 50% chance of failure
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error('Something went wrong!'));
      } else {
        resolve();
      }
    }, 1000);
  });
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});