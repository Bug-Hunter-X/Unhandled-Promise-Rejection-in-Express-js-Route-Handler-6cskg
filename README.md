# Unhandled Promise Rejection in Express.js Route Handler

This repository demonstrates a common error in Node.js Express.js applications: unhandled promise rejections within route handlers.  The application attempts to handle errors within a `.catch` block, but fails to send an appropriate error response to the client if an asynchronous operation fails. This leads to a poor user experience and potential debugging challenges.

## Bug Description

The provided `bug.js` file contains an Express.js application with a route handler that uses `Promise`.  A simulated asynchronous operation (`someAsyncFunction`) has a 50% chance of rejecting with an error. The `catch` block logs the error, but crucially **does not send a response** to the client, leading to a hanging request.

## Solution

The `bugSolution.js` file demonstrates how to correctly handle promise rejections in an Express.js route handler. It includes a `try...catch` block to ensure an appropriate response is always sent to the client, regardless of whether the asynchronous operation succeeds or fails.  This prevents silent failures and improves application robustness.

## How to Reproduce

1. Clone this repository.
2. Run `npm install express`.
3. Execute `node bug.js` and make multiple requests to `/`.  Observe that approximately half of the requests will hang without a response.
4. Execute `node bugSolution.js` and make multiple requests to `/`. Observe that all requests now produce a response, whether successful or resulting in an error.