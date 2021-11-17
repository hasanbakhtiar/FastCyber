import React from 'react';
import ReactDOM from 'react-dom';
// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAji8Rp-AYNs_t_3pKYxwOKGsd3nS5tIbM",
  authDomain: "fast-cyber-a6b5a.firebaseapp.com",
  projectId: "fast-cyber-a6b5a",
  storageBucket: "fast-cyber-a6b5a.appspot.com",
  messagingSenderId: "851388760055",
  appId: "1:851388760055:web:f652e5bf3a13289ef1f8f2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database()


database.ref().set({
  title:"Hello"
})

  const App =()=>{
    return(
      <h1>Hello</h1>
    )
  }

ReactDOM.render(<App />,document.getElementById('root'));



