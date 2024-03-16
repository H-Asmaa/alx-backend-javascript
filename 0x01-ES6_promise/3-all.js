import uploadPhoto from './utils';
import createUser from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      console.log(`${photo} ${user.firstName} ${user.lastName}`);
    })
    .catch((error) => {
      console.log('Signup system offline');
    });
}
