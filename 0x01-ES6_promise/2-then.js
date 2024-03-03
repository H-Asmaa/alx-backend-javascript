#!/usr/bin/node
export default (promise) => new Promise((resolve, reject) => {
  promise
    .then(() => {
      console.log('Got a response from the API');
      resolve({ status: 200, body: 'Success' });
    })
    .catch((error) => {
      reject(error);
    });
});
