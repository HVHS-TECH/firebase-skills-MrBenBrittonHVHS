/**************************************************************/
// fb_initialise()
// Initialize firebase, connect to the Firebase project.
// 
// Find the config data in the Firebase console. Cog wheel > Project Settings > General > Your Apps > SDK setup and configuration > Config
//
// Input:  n/a
// Return: n/a
/**************************************************************/
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwXqakR1SpHww2sNM7lIsANCTBbKSRKLc",
  authDomain: "fir-skills-a2ccf.firebaseapp.com",
  databaseURL: "https://fir-skills-a2ccf-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-skills-a2ccf",
  storageBucket: "fir-skills-a2ccf.firebasestorage.app",
  messagingSenderId: "537592705893",
  appId: "1:537592705893:web:2c6e40863d05db9390278c"
};


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // This log prints the firebase object to the console to show that it is working.
  // As soon as you have the script working, delete this log.
  console.log("Firebase initialize finished:");
  console.log(firebase);
