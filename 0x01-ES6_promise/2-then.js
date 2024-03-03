#!/usr/bin/node
export default (promise) => new Promise((resolve, reject) => {
  if (promise) {
    console.log('Got a response from the API');
    resolve({ status: 200, body: 'Success' });
  } else {
    reject(new Error());
  }
});
