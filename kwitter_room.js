var firebaseConfig = {
    apiKey: "AIzaSyB6uM7sRRLrc079wac9rAFQaf2f95khk5w",
    authDomain: "kwitter-project-22515.firebaseapp.com",
    databaseURL: "https://kwitter-project-22515-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-22515",
    storageBucket: "kwitter-project-22515.appspot.com",
    messagingSenderId: "579382513400",
    appId: "1:579382513400:web:cc7fba261e722d7a87350d",
    measurementId: "G-RBP0KCF6ER"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
      yes=localStorage.getItem("username");
      document.getElementById("white").innerHTML="welcome"+yes+"!";
      function roomname()
      {
        deku=document.getElementById("mha").value;
        firebase.database().ref("/").child(deku).update({
          purpose:"todoroki"
        });
        localStorage.setItem("room_name",deku);
        window.location = "kwitter_room.html"
  
      }
  
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
        console.log("Room Name" + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='bakugou(this.id)' >#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML +=row;
  
        //End code
        });});}
  getData();
  function bakugou(bakudeku)
  {
    console.log(bakudeku);
    localStorage.setItem("room_name", bakudeku);
    window.location = "kwitter_page.html";
  }
  function logout()
  {
    localStorage.removeItem("room_name");
    localStorage.removeItem("username");
    window.location = "index.html";
  }
  
  