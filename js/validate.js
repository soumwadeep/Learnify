// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // alert("Welcome: " + user.email + "! Now You Can Access Our Files!");
    // ...
  } else {
    // User is signed out
    window.location.href = "../login.html";
    // ...
  }
});
// Sign Out
logOut.addEventListener("click", (e) => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      alert("Bye! We Hope To Meet You Soon Again!");
      window.location.href = "../login.html";
    })
    .catch((error) => {
      // An error happened.
      const errorCode = error.code;
      const errorMessage = error.message;
      //add an alert for errors
      alert(errorMessage);
    });
});
