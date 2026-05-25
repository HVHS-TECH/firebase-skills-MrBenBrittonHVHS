/**************************************************************
 **************************************************************
 **                                                          **
 ** script.js is where you will write most of your code.     **
 **                                                          **
 **************************************************************
 **************************************************************/

const HTML_OUTPUT = document.getElementById("databaseOutput");
var tot = 0;
for (i = 0; i<=20000;i++){
  n = i*i;
  if (i%2==1){
    tot+=i*i
  }
}
console.log(tot)
/**************************************************************/
// helloWorld()
// Demonstrate a minimal write to firebase
// This function replaces the entire database with the message "Hello World"
// 
// This uses the set() operation to write the key:value pair "message":"Hello World"
// The ref('/') part tells the operation to write to the base level of the database "/"
// This means it replaces the whole database with message:Hello World
/**************************************************************/
function helloWorld(){
  console.log("Running helloWorld()")
  firebase.database().ref('/message').set('Hello class!')
}

function goodbyeWorld(){
  console.log("Running goodbyeWorld()")
  firebase.database().ref('/message').set('Goodbye class!')
}


function writeScores(){
  console.log("Running writeScores()")
  firebase.database().ref('/scores/').set(
    {
coby:10,
table:3,
chair:7,
door:0.7,
ceiling:1000
    }
  )
}
function readScores(){
  console.log("Reading scores")
    firebase.database().ref('/scores').once( 'value',  displayScores  )
  console.log("Finished reading scores")

  }

function displayScores(poop){
  console.log(poop.val())
}



function read(){
  console.log("Running firebase read()")
  firebase.database().ref('/message').once( 'value',  dothis  )
}

function readListener(){
  console.log("Setting a listener.")
  firebase.database().ref('/message').on( 'value',  displayMessage , error )
}

function displayMessage(snapshot){
  HTML_OUTPUT.innerText = snapshot.val();
}

function forEachRead(){
  console.log("Running foreach  read()")
  firebase.database().ref('/scores').orderByValue().limitToFirst(2).once( 'value', foreachHandler  )
}

function foreachHandler(snap){
  console.log(snap.val())
  snap.forEach(handleOne)
}

function handleOne(child){
  console.log(child.key)
  console.log(child.val())
}


function dothis(snap){
  console.log(snap.val())
}

function error(error){
  alert(error)
}