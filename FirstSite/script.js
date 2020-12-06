//Login
{
function openLogin(){
    var btn = document.getElementById("signUp").innerHTML;
    if(btn === "Sign Up"){
        document.querySelector(".hero").style.display = "flex";
        document.body.style.overflow = "hidden";
    }
    else{
        logOut();
    }
}

function closeLogin(){
    document.querySelector(".hero").style.display = "none";
    document.body.style.overflow = "scroll";
}

function logIn(name) {
    document.querySelector(".user_profile").style.display = "inline"
    document.getElementById("user_name").innerHTML= name
    document.getElementById("signUp").innerHTML = "Log Out"
    closeLogin()

}

function logOut(){
    document.querySelector(".user_profile").style.display = "none"
    document.getElementById("signUp").innerHTML = "Sign Up"
}
}

//Map
function initMap() {
    var options={
    center:{ lat:43.17269157865619, lng:76.89998754263857},
    zoom:12,
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#242f3e"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#746855"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#242f3e"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#d59563"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#d59563"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#263c3f"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#6b9a76"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#38414e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#212a37"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9ca5b3"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#746855"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#1f2835"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#f3d19c"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#2f3948"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#d59563"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#17263c"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#515c6d"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#17263c"
          }
        ]
      }
    ]
  }

  var myMap = new google.maps.Map(document.getElementById("map"),options);

  var icon={
    url: ('../img/RealUplogo.png') ,
    scaledSize:new google.maps.Size(30,30),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0,0)
  };

  var marker = new google.maps.Marker({
    position: {lat: 43.17269157865619, lng: 76.89998754263857},
    map:myMap,
    icon:icon
  });

  var marker = new google.maps.Marker({
    position: {lat: 43.191699842715664, lng: 76.89508023390549},
    map:myMap,
    icon:icon
  });

  var marker = new google.maps.Marker({
    position: {lat: 43.19936496912261, lng: 76.91439213878606},
    map:myMap,
    icon:icon
  });

  var info = new google.maps.InfoWindow({
    content: '<h3>Welcome to RelUp</h3><p>Here is our first branch</p>'
  });

  marker.addListener("click", function(){
    info.open(myMap, marker);
  });

}


//Profile
{
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}
}

//oparation
$(document).ready(function(){
  $("#opt1").mouseover(function(){
    $("#opt1").css("background-color", "rgba(47, 47, 48, 0.9)");
  });
  $("#opt1").mouseout(function(){
    $("#opt1").css("background-color", "rgba(47, 47, 48, 0.7)");
  });
  $("#opt2").mouseover(function(){
    $("#opt2").css("background-color", "rgba(47, 47, 48, 0.9)");
  });
  $("#opt2").mouseout(function(){
    $("#opt2").css("background-color", "rgba(47, 47, 48, 0.7)");
  });
});


//Homes sites

document.getElementById('cC1').addEventListener('click', function () {
    window.location.href = 'Home1.html';
});

