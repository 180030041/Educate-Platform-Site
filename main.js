var firebaseConfig = {
  apiKey: "AIzaSyCcR76nUjun224T9JrJeDnQuOL5m7UCsAs",
  authDomain: "educate-platform-site.firebaseapp.com",
  projectId: "educate-platform-site",
  storageBucket: "educate-platform-site.appspot.com",
  messagingSenderId: "156841714838",
  appId: "1:156841714838:web:d7616f44a7551963448eb7",
  measurementId: "G-WY2DJXC7FW"
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

