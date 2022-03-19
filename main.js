var firebaseConfig = {
  apiKey: "AIzaSyArLxp4OyohwHLVRTGhi7OJjoMfdnBaUvk",
  authDomain: "books-gallery-career-site.firebaseapp.com",
  databaseURL: "https://books-gallery-career-site-default-rtdb.firebaseio.com",
  projectId: "books-gallery-career-site",
  storageBucket: "books-gallery-career-site.appspot.com",
  messagingSenderId: "658931682437",
  appId: "1:658931682437:web:1aec496adb8fd5d799edec",
  measurementId: "G-E71JSGP0SC"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();



//creating a collection in Firebase
//messages(here taken name
var messagesRef = firebase.database().ref('messages');

//contactform(in html form - idname)
//submit(button in html to submit form
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
//form to get submitted
function submitForm(e){
  e.preventDefault();

 // Form Credentials To Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var message = getInputVal('message');

 // Save message
  saveMessage(name, email, message);


 // After Submission Total Form Will Clear 
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    message:message
  });
}

