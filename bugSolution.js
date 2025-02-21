const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncFunction()
    .then(() => {
      res.send('Hello, world!');
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
});

function someAsyncFunction() {
  return new Promise((resolve, reject) => {
    const shouldFail = Math.random() < 0.5;
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