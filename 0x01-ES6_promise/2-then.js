export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      resolve({ status: 200, body: 'success' });
    })
    .catch((error) => {
      reject(new Error(error));
    });
};
