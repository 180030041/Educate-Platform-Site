var firebaseConfig = {
    apiKey: "AIzaSyA_g1p9uS2RxrBBUhGHWvcMZ2kwuKSzR5M",
    authDomain: "mysite-a47b5.firebaseapp.com",
    databaseURL: "https://mysite-a47b5.firebaseio.com",
    projectId: "mysite-a47b5",
    storageBucket: "mysite-a47b5.appspot.com",
    messagingSenderId: "1045025569079",
    appId: "1:1045025569079:web:f91967bb121c32096dc2b2",
    measurementId: "G-F4R1B3CX85"
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

