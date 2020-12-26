function Get(yourUrl) {
  var Httpreq = new XMLHttpRequest(); // a new request
  Httpreq.open("GET",yourUrl,false);
  Httpreq.send(null);
  return Httpreq.responseText;
}

function getRandomHero() {
  var json = Get("https://mikanelson.github.io/heroes/all.json");
  var parsedJson = JSON.parse(json);

  var keys = Object.keys(parsedJson);
  var randomHero = parsedJson[keys[keys.length * Math.random() << 0]];

  var img = document.getElementById("hero-image");
  img.src = randomHero.image;

  var header = document.getElementById("hero-name");
  header.innerText = randomHero.localized_name;
}

getRandomHero();
var sortButton = document.getElementById("refresh");
sortButton.onclick = function refresh() {
  getRandomHero();
}
