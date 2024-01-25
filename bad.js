const firebaseConfig = {
  apiKey: "AIzaSyDcu6EkU_kCDxHJxsLcrwN6l22W05PbPaM",
  authDomain: "form-login-2fc88.firebaseapp.com",
  databaseURL: "https://form-login-2fc88-default-rtdb.firebaseio.com",
  projectId: "form-login-2fc88",
  storageBucket: "form-login-2fc88.appspot.com",
  messagingSenderId: "73359857561",
  appId: "1:73359857561:web:8553d4fd294f1e07e62508",
};


firebaseConfig.initializeApp(firebaseConfig);

var FormLoginDB=firebase.database().ref('FormLogin')
document.getElementById('FormLogin').addEventListener("Submit",Submitform);


function Submitform(e){
e.preventDefault();
var name= getElementval('name');
var email= getElementval('email');
var password= getElementval('password');
console.log(name,email,password);
} 
const getElementval = (id)=>{
return document.getElementById(id).value;

}  
    
  // Import the functions you need from the SDKs you need
  