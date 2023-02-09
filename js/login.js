import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// import {
//   getAuth,
//   signInWithEmailAndPassword,
// } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBbnqHRL6KjcIFsxNO-IDXSwn2x9lrABU",
  authDomain: "learnify-c0878.firebaseapp.com",
  projectId: "learnify-c0878",
  storageBucket: "learnify-c0878.appspot.com",
  messagingSenderId: "777324005304",
  appId: "1:777324005304:web:c72639d1907209e112314d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
// alert(auth);

// Sign In
signIn.addEventListener("click", (e) => {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("Welcome : " + user.email);
      window.location.href = "./dashboard/index.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      //add an alert for errors
      alert(errorMessage);
    });
});

// Sign Up
signUp.addEventListener("click", (e) => {
  //Add All The Input Field's ID
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  //Copy It From Docs
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("Welcome: " + user.email);
      window.location.href = "./dashboard/index.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      //add an alert for errors
      alert(errorMessage);

      // ..
    });
});
