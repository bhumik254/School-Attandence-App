import firebase from 'firebase';

//initialize your database
const firebaseConfig = {
  apiKey: 'AIzaSyBJ8X7wS4PBjfyMbr4BQdTeDc6Clgwril4',
  authDomain: 'pro-60-5e9a0.firebaseapp.com',
  databaseURL: 'https://pro-60-5e9a0-default-rtdb.firebaseio.com',
  projectId: 'pro-60-5e9a0',
  storageBucket: 'pro-60-5e9a0.appspot.com',
  messagingSenderId: '995582094696',
  appId: '1:995582094696:web:d3d938ed43cf934d31fadd',
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
