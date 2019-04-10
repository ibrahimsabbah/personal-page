function digitalClock() {
  var date = new Date();
  var hours = date.getHours() + "";
  var minutes = date.getMinutes() + "";
  var secondes = date.getSeconds() + "";
  var day = date.getDay();
  if (hours.length < 2) {
    hours = "0" + hours;
  }
  if (minutes.length < 2) {
    minutes = "0" + minutes;
  }
  if (secondes.length < 2) {
    secondes = "0" + secondes;
  }
  var weekDay = ["Sun", "Mon", "Tur", "Wed", "Thu", "Fri", "Sat"];

  var clock = weekDay[day] + "" + hours + ":" + minutes + ":" + secondes;
  document.getElementById("clock").innerHTML = clock;
}
digitalClock();
setInterval(digitalClock, 1000);
// photoslider script
var slider_content = document.getElementById("box");
var image = ["a", "b", "c", "d"];
var i = image.length;
function nextImage() {
  if (i < image.length) {
    i++;
  } else {
    i = 1;
  }
  slider_content.innerHTML = "<img src=" + image[i - 1] + ".jpg>";
}
function prewImage() {
  if (i < image.length + 1 && i > 1) {
    i--;
  } else {
    i = image.length;
  }
  slider_content.innerHTML = "<img src=" + image[i - 1] + ".jpg>";
}
// photo slider script