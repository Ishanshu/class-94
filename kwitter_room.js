
const firebaseConfig = {
      apiKey: "AIzaSyDcKqPIOruFu88JjF1t-w1IWexjkhb1AWE",
      authDomain: "kwitter-22c5b.firebaseapp.com",
      databaseURL: "https://kwitter-22c5b-default-rtdb.firebaseio.com",
      projectId: "kwitter-22c5b",
      storageBucket: "kwitter-22c5b.appspot.com",
      messagingSenderId: "867407328362",
      appId: "1:867407328362:web:75674cc639416f7ed3c613"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
