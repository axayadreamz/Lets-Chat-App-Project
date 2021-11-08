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

  anyname=localStorage.getItem("username");
  room_name=localStorage.getItem("room_name");
  function send()
  {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:anyname,
          message:msg,
          like:0
      });
      document.getElementById("msg").value = "";
  }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
any = message_data['name'];
message = message_data['message'];
like = message_data['like'];
store = "<h4>"+ any+"<img class='user_tick' src='tick.png'></h4>";
storem = "<h4 class='message_h4'>" + message + "</h4>";
likebutton = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='update(this.id)'>";
span = "<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";

row = store+storem+likebutton+span;
document.getElementById("output").innerHTML+= row;


//End code
 } });  }); }
getData();
function update(message_id)
{
    console.log(message_id);
    button_id = message_id;
    value = document.getElementById(button_id).value;
    updated = Number(value) + 1;
    console.log(updated);

    firebase.database().ref(room_name).child(message_id).update({
        like : updated
    });
}