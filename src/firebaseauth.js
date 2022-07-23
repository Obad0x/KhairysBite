import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js';
import{getDatabase} from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js';
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";



const firebaseConfig = {
apiKey: "AIzaSyA8eRDBZqk2wo98p2u4Q8QW0FdVVHqCHeA",
  authDomain: "khairysbite-2d97c.firebaseapp.com",
  projectId: "khairysbite-2d97c",
  storageBucket: "khairysbite-2d97c.appspot.com",
  messagingSenderId: "910474626286",
  appId: "1:910474626286:web:2d12eb19d0fba27395dfff",
  measurementId: "G-5YH7H86P6E"};
// variables
  const app = initializeApp(firebaseConfig);
const db = getDatabase(app)
const auth = getAuth();
var email = document.getElementsByName('email').value;
var password = document.getElementsByName('Password').value;
var username = document.getElementsByName('First-name').value + document.getElementsByName('Last-name');

// varables

submit.addEventListener('Click', (e) =>{

    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      alert("User Created!!:")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert( errorCode + " " + errorMessage  );
    });
})

// monitoring authentication state



