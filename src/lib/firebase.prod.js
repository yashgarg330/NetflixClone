import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyCFbLcg3Y4TvM3l5-sksrW1GrazLAVirew',
  authDomain: 'netflix-clone-c3c6a.firebaseapp.com',
  databaseURL: 'https://netflix-test01.firebaseio.com',
  projectId: 'netflix-clone-c3c6a',
  storageBucket: 'netflix-clone-c3c6a.appspot.com',
  messagingSenderId: '242494816403',
  appId: '1:242494816403:web:611d31bec59a6809290d66',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment
// this so you don't get duplicate data

export { firebase };
