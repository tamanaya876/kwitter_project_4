// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDqluI1CDmPJhFkRUTaUzujU58YtJD7QBg",
    authDomain: "aadityaghosh-wqs9.firebaseapp.com",
    databaseURL: "https://aadityaghosh-wqs9-default-rtdb.firebaseio.com",
    projectId: "aadityaghosh-wqs9",
    storageBucket: "aadityaghosh-wqs9.appspot.com",
    messagingSenderId: "181530844878",
    appId: "1:181530844878:web:def2443cbcc6d37c373a9f"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name : user_name,
        message : msg,
        like : 0
      })
      
      document.getElementById("msg").value = "";
}