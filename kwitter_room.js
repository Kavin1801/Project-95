var  firebaseConfig = {
      apiKey: "AIzaSyAZteaR2CeF4b25K1XDXlSkWr_G32FnlUo",
      authDomain: "panjim-9hfm.firebaseapp.com",
      databaseURL: "https://panjim-9hfm-default-rtdb.firebaseio.com",
      projectId: "panjim-9hfm",
      storageBucket: "panjim-9hfm.appspot.com",
      messagingSenderId: "897639154689",
      appId: "1:897639154689:web:b53017acd58b7f979bec00"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       room = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'  >#"+Room_names + "</div><hr>";
       document.getElementById("output").innerHTML+= room;
      });});}
getData();

function logout(){
      window.location = "index.html";
}


user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+user_name+" ! ";

  function addRoom(){

      room_name = document.getElementById("room_name").value;
  
      localStorage.setItem("room_name", room_name);

      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose : "adding room"
      });

      localStorage.getItem("room_name", room_name);

  }

  function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
