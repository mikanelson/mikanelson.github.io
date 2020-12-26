function Get(url) {
  var Httpreq = new XMLHttpRequest(); // a new request
  Httpreq.open("GET", url, false);
  Httpreq.send(null);
  return Httpreq.responseText;
}

function getRandomHero(heroJson) {
  var keys = Object.keys(heroJson);
  var randomHero = heroJson[keys[keys.length * Math.random() << 0]];
  return randomHero;
}

function updateHeroInformation(randomedHero) {
  var img = document.getElementById("hero-image");
  img.src = randomedHero.image;
  img.addEventListener("load", function () {
    var header = document.getElementById("hero-name");
    header.innerText = randomedHero.localized_name;
  });
}

function getHeroJsonObj() {
  var json = Get("https://mikanelson.github.io/heroes/all.json");
  var parsedJson = JSON.parse(json);
  return parsedJson;
}

var heroes = getHeroJsonObj();
updateHeroInformation(getRandomHero(heroes));

var sortButton = document.getElementById("refresh");
sortButton.onclick = function refresh() {
  updateHeroInformation(getRandomHero(heroes));
}
