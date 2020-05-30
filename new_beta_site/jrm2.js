/*document.write("Hello World!")*/

/*READMORE*/

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
} 

function myMap() {
  var mapCanvas = document.getElementById("map");
  var myCenter = new google.maps.LatLng(51.3744999,-0.1134661)
  var mapOptions = {
    center: myCenter, zoom: 16.79};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position: myCenter});
  marker.setMap(map);
  var infowindow = new google.maps.InfoWindow({
  content:"Mein Haus"
  });
  infowindow.open(map,marker); 
}
 